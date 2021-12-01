# frozen_string_literal: true

json.article do
  json.extract! @article,
    :id,
    :title,
    :body,
    :status
  json.category @article.category
end
