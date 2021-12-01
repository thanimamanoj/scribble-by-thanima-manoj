# frozen_string_literal: true

class ArticlesController < ApplicationController
  before_action :load_article, only: [:update, :show]

  def index
    @articles = Article.all
  end

  def create
    article = Article.new(article_params)
    if article.save
      render status: :ok, json: { notice: t("successfully_created") }
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
      render status: :ok, json: { notice: "Successfully updated article." }
    else
      render status: :unprocessable_entity,
        json: { error: @article.errors.full_messages.to_sentence }
    end
  end

  private

    def load_article
      @article = Article.find_by(id: params[:id])
      unless @article
        render status: :not_found, json: { error: t("article.not_found") }
      end
    end

    def article_params
      params.require(:article).permit(:title, :category_id, :body, :status)
    end
end
