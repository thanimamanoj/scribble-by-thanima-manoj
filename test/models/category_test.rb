# frozen_string_literal: true

require "test_helper"

class CategoryTest < ActiveSupport::TestCase
  def setup
    @category = build(:category)
  end

  def test_category_should_not_be_valid_and_saved_without_name
    @category.name = ""
    assert_not @category.valid?
    assert_includes @category.errors.full_messages, "Name can't be blank"
  end

  def test_category_name_should_not_exceed_maximum_length
    @category.name = "a" * (Constants::MAX_CATEGORY_NAME_LENGTH + 1)
    assert @category.invalid?
  end
end
