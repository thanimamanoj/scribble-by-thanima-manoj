# frozen_string_literal: true

class ArticlesController < ApplicationController
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

  private

    def article_params
      params.require(:article).permit(:title, :category_id, :body, :status)
    end
end
