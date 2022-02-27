# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'

puts "dropping database"
Event.destroy_all
puts "populating database"

events = Event.create([
  {
    title: "Family dinner at Mom's",
    description: "Bring the dessert and don't forget all the gifts.",
    start_time: DateTime.new(2022,3,15,13,00), 
    end_time: DateTime.new(2022,3,15,22,00)
  },
  {
    title: "Family vacation",
    description: "Leaving for 2 weeks, heading to Mexico.",
    start_time: DateTime.new(2022,4,1,15,00), 
    end_time: DateTime.new(2022,4,15,12,00)
  },
  {
    title: "Team meeting at the main office",
    description: "Present the new version of the project with the latest updates",
    start_time: DateTime.new(2022,3,8,9,00), 
    end_time: DateTime.new(2022,3,8,12,00)
  }
])

puts "created #{events.length} events in the database."
puts 'done'