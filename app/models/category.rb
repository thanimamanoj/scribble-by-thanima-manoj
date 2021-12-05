# frozen_string_literal: true

class Category < ApplicationRecord
  acts_in_sequence

  has_many :articles

  validates :name, presence: true, length: { maximum: Constants::MAX_CATEGORY_NAME_LENGTH }
end
