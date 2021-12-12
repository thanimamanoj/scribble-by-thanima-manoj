# frozen_string_literal: true

json.categories @categories do |category|
  json.extract! category,
    :id,
    :name,
    :sequence
    json.count category.articles.size
end
