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
end
