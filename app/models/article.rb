# frozen_string_literal: true

class Article < ApplicationRecord
  enum status: { Draft: 0, Published: 1 }

  belongs_to :category

  validates :title, presence: true, length: { maximum: Constants::MAX_ARTICLE_TITLE_LENGTH }
  validates :body, presence: true
  validates :slug, uniqueness: true
  validate :slug_not_changed

  before_create :set_slug

  private

    def set_slug
      itr = 1
      loop do
        title_slug = title.parameterize
        slug_candidate = itr > 1 ? "#{title_slug}-#{itr}" : title_slug
        break self.slug = slug_candidate unless Article.exists?(slug: slug_candidate)

        itr += 1
      end
    end

    def slug_not_changed
      if slug_changed? && self.persisted?
        errors.add(:slug, t("article.slug.immutable"))
      end
    end
end
