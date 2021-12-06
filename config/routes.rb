# frozen_string_literal: true

Rails.application.routes.draw do
  defaults format: :json do
    resources :categories, except: %i[new edit], param: :id do
      post "sort", on: :collection
    end
    resources :articles, except: %i[new edit], param: :id
    resources :generals, only: %i[show update], param: :id
    resources :redirections, only: %i[index create]
  end

  root "home#index"
  get "*path", to: "home#index", via: :all
end
