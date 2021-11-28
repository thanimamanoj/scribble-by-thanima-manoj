# frozen_string_literal: true

class Category < ApplicationRecord
  has_many :articles

  validates :name, presence: true, length: { maximum: Constants::MAX_CATEGORY_NAME_LENGTH }
end
