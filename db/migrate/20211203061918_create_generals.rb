# frozen_string_literal: true

class CreateGenerals < ActiveRecord::Migration[6.1]
  def change
    create_table :generals do |t|
      t.string :name
      t.string :password_digest
      t.timestamps
    end
  end
end
