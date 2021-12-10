# frozen_string_literal: true

VALID_PASSWORD_REGEX = /(?=.*[a-z])(?=.*[0-9])/i.freeze

class General < ApplicationRecord
  has_secure_password validations: false
  has_secure_token :authentication_token

  validates :name, presence: true
  validates :password, format: { with: VALID_PASSWORD_REGEX }, if: -> { password.present? }
  validates :password, length: { minimum: Constants::MIN_GENERAL_PASSWORD_LENGTH }, if: -> { password.present? }
end
