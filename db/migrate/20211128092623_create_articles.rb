# frozen_string_literal: true

class CreateArticles < ActiveRecord::Migration[6.1]
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.references :category, foreign_key: true
      t.integer :status, default: 0, null: false
      t.timestamps
    end
  end
end
