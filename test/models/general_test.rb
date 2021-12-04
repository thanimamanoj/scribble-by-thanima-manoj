# frozen_string_literal: true

require "test_helper"

class GeneralTest < ActiveSupport::TestCase
  def setup
    @general = build(:general)
  end

  def test_general_should_not_be_valid_without_name
    @general.name = ""
    assert_not @general.valid?
  end

  def test_validation_should_accept_valid_password
    valid_passwords = %w[welcome123 WELCOME@123 PASS$word45 my&password1]
    valid_passwords.each do |password|
      @general.password = password
      assert @general.valid?
    end
  end

  def test_validation_should_reject_invalid_password
    invalid_passwords = %w[12a 123456 WELCOME welCOME my&password 23&456]

    invalid_passwords.each do |password|
      @general.password = password
      assert @general.invalid?
    end
  end

  def test_password_should_be_of_valid_length
    @general.password = "a" * (Constants::MIN_GENERAL_PASSWORD_LENGTH - 1)
    assert @general.invalid?
  end
end
