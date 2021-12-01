# frozen_string_literal: true

class CategoriesController < ApplicationController
  def index
    categories = Category.all
    render status: :ok, json: { categories: categories }
  end

  def create
    category = Category.create!(category_params)
  end

  private

    def category_params
      params.require(:category).permit(:name)
    end
end
