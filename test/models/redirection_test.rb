# frozen_string_literal: true

require "test_helper"

class RedirectionTest < ActiveSupport::TestCase
  def setup
    @redirection = build(:redirection)
  end

  def test_redirection_should_be_invalid_without_from_path
    @redirection.from_path = ""
    assert @redirection.invalid?
  end

  def test_redirection_should_be_invalid_without_to_path
    @redirection.to_path = ""
    assert @redirection.invalid?
  end

  def test_redirection_should_not_be_valid_and_saved_if_from_path_not_unique
    @redirection.save!

    test_redirection = @redirection.dup
    assert_not test_redirection.valid?

    assert_includes test_redirection.errors.full_messages, "From path has already been taken"
  end
end
