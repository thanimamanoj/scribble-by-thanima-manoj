# frozen_string_literal: true

FactoryBot.define do
  factory :general do
    name { Faker::App.name }
    password { "welcome1" }
  end
end
