# frozen_string_literal: true

class CategoriesController < ApplicationController
  before_action :load_category, only: %i[show update destroy]

  def index
    categories = Category.all
    render status: :ok, json: { categories: categories }
  end

  def create
    category = Category.create!(category_params)
  end

  def show
    render status: :ok, json: { category: @category }
  end

  def update
    if @category.update(category_params)
      render status: :ok, json: { notice: t("successfully_updated", entity: "Category") }
    else
      render status: :unprocessable_entity, json: { error: @category.errors.full_messages.to_sentence }
    end
  end

  def destroy
    if @category.destroy
      render status: :ok, json: { notice: t("successfully_deleted", entity: "Category") }
    else
      render status: :unprocessable_entity,
        json: { error: @category.errors.full_messages.to_sentence }
    end
  end

  private

    def load_category
      @category = Category.find_by(id: params[:id])
      unless @category
        render status: :not_found, json: { error: t("not_found", entity: "Category") }
      end
    end

    def category_params
      params.require(:category).permit(:name)
    end
end
