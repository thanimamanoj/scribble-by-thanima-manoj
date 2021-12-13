# frozen_string_literal: true

class ArticlesController < ApplicationController
  before_action :load_article, only: %i[show update destroy]

  def index
    @articles = Article.all
  end

  def create
    article = Article.new(article_params.merge!(user: User.first))
    if article.save
      render status: :ok, json: { notice: t("successfully_created", entity: "Article") }
    else
      errors = article.errors.full_messages.to_sentence
      render status: :unprocessable_entity, json: { error: errors }
    end
  end

  def show
    render
  end

  def update
    if @article.update(article_params)
      render status: :ok, json: { notice: t("successfully_updated", entity: "Article") }
    else
      render status: :unprocessable_entity,
        json: { error: @article.errors.full_messages.to_sentence }
    end
  end

  def destroy
    if @article.destroy
      render status: :ok, json: { notice: t("successfully_deleted", entity: "Article") }
    else
      render status: :unprocessable_entity,
        json: { error: @article.errors.full_messages.to_sentence }
    end
  end

  private

    def load_article
      @article = Article.find_by(id: params[:id])
      unless @article
        render status: :not_found, json: { error: t("not_found", entity: "Article") }
      end
    end

    def article_params
      params.require(:article).permit(:title, :category_id, :body, :status)
    end
end
