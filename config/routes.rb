# frozen_string_literal: true

Rails.application.routes.draw do
  defaults format: :json do
    resources :categories, except: %i[new edit], param: :id do
      post "sort", on: :collection
    end
    resources :articles, except: %i[new edit], param: :id
    resource :general, only: %i[show update]
    resources :redirections, except: %i[new edit], param: :id
    resource :session, only: :create
  end
  namespace :public do
    resources :categories, only: :index, param: :slug
  end
  root "home#index"
  get "*path", to: "home#index", via: :all
end
