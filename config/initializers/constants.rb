# frozen_string_literal: true

module Constants
  MAX_CATEGORY_NAME_LENGTH = 125
  MAX_ARTICLE_TITLE_LENGTH = 50
  MIN_GENERAL_PASSWORD_LENGTH = 6
  is_sqlite_db = ActiveRecord::Base.connection_db_config.configuration_hash[:adapter] == "sqlite3"
  DB_REGEX_OPERATOR = is_sqlite_db ? "REGEXP" : "~*"
end
