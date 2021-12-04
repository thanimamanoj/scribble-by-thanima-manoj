# frozen_string_literal: true

class GeneralsController < ApplicationController
  before_action :load_params

  def show
    render status: :ok, json: { general: @general }
  end

  def update
    if @general.update(general_params)
      render status: :ok, json: { notice: t("successfully_updated", entity: "General settings") }
    else
      render status: :unprocessable_entity,
        json: { error: @general.errors.full_messages.to_sentence }
    end
  end

  private

    def load_params
      @general = General.first
      unless @general
        render status: :not_found, json: { error: t("not_found", entity: "Site settings") }
      end
    end

    def general_params
      params.require(:general).permit(:name, :password)
    end
end
