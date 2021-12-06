# frozen_string_literal: true

class RedirectionsController < ApplicationController
  def index
    redirections = Redirection.all
    render status: :ok, json: { redirections: redirections }
  end

  def create
    redirection = Redirection.new(redirection_params)
    if redirection.save
      render status: :ok, json: { notice: t("successfully_created", entity: "Redirection") }
    else
      errors = redirection.errors.full_messages.to_sentence
      render status: :unprocessable_entity, json: { error: errors }
    end
  end

  private

    def redirection_params
      params.require(:redirection).permit(:from_path, :to_path)
    end
end
