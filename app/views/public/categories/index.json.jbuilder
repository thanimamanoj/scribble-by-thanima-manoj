# frozen_string_literal: true

json.categories @categories do |category|
  json.extract! category,
    :id,
    :name
  json.articles category.articles.Published do |article|
    json.extract! article,
      :slug,
      :title,
      :body
    json.date article.created_at.strftime("%B #{article.created_at.day.ordinalize}, %Y")
  end
end
