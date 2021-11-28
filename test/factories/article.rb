# frozen_string_literal: true

FactoryBot.define do
  factory :article do
    category
    title { Faker::Lorem.sentence[0..49] }
    body { Faker::Lorem.paragraph }
    status { "draft" }
  end
end
