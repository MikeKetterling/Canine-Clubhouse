# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Groomer.destroy_all
Service.destroy_all

puts "🌱 Seeding spices..."

puts "seeding groomers"
Groomer.create(name: "Joyce", experience: 10)
Groomer.create(name: "Randy", experience: 3)
Groomer.create(name: "Paula", experience: 2)
Groomer.create(name: "Matt", experience: 5)
Groomer.create(name: "Carl", experience: 7)
Groomer.create(name: "Dianna", experience: 12)



puts "seeding services"
Service.create(name: "Nail Trimming", price: 10.00)
Service.create(name: "Bath", price: 20.00)
Service.create(name: "Bath & Nails", price: 25.00)
Service.create(name: "Brush Out", price: 10.00)
Service.create(name: "Cologne", price: 5.00)
Service.create(name: "Ear Cleaning", price: 5.00)
Service.create(name: "Teeth Brushing", price: 5.00)
Service.create(name: "Top Dog", price: 50.00)


puts "✅ Done seeding!"