# frozen_string_literal: true

class Article < ApplicationRecord
  enum status: { Draft: 0, Published: 1 }

  belongs_to :category

  validates :title, presence: true, length: { maximum: Constants::MAX_ARTICLE_TITLE_LENGTH }
  validates :body, presence: true
end
