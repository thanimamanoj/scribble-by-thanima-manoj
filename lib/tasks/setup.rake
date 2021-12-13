desc 'drops the db, creates db, migrates db and populates sample data'
task setup: [:environment, 'db:drop', 'db:create', 'db:migrate'] do
  Rake::Task['populate_with_sample_data'].invoke if Rails.env.development?
end

task populate_with_sample_data: [:environment] do
   if Rails.env.production?
     puts "Skipping deleting and populating sample data in production"
   else
    create_sample_data!
    puts "sample data has been added."
  end
end

def create_sample_data!
  puts 'Seeding with sample data...'
  User.create!(name: 'Oliver Smith', email: 'oliver@example.com')
  General.create!(name: 'Spinkart')
  puts 'Done! Created User Oliver Smith and set site name as Spinkart'
end
