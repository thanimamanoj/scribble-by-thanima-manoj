# frozen_string_literal: true

require "test_helper"

class ArticleTest < ActiveSupport::TestCase
  def setup
    @article = build(:article)
  end

  def test_article_should_be_invalid_without_title
    @article.title = ""
    assert @article.invalid?
  end

  def test_article_title_should_not_exceed_maximum_length
    @article.title = "a" * (Constants::MAX_ARTICLE_TITLE_LENGTH + 1)
    assert @article.invalid?
  end

  def test_article_should_not_be_valid_and_saved_without_body
    @article.body = ""
    assert_not @article.valid?
    assert_includes @article.errors.full_messages, "Body can't be blank"
  end

  def test_article_should_not_be_valid_without_category
    @article.category = nil
    assert @article.invalid?
  end

  def test_article_should_have_a_valid_status
    @article.status = "Draft"
    assert @article.valid?
  end
end
