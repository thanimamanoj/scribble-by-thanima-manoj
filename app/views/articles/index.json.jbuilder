# frozen_string_literal: true

json.all_count @articles.count
json.category_count @articles.group(:category_id).count
json.status_count @articles.group(:status).count
json.articles @articles do |article|
  json.extract! article,
    :id,
    :title,
    :status
  json.date article.created_at.strftime("%B #{article.created_at.day.ordinalize}, %Y")
  json.category article.category.name
  json.author "Oliver Smith"
end
