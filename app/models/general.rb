# frozen_string_literal: true

class General < ApplicationRecord
  has_secure_password

  validates :password, length: { minimum: Constants::MIN_GENERAL_PASSWORD_LENGTH }, if: -> { password.present? }
end
