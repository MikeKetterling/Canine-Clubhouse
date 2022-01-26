# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "removing all but users"

# Groomer.destroy_all
Service.destroy_all
ServiceAppointment.destroy_all
Room.destroy_all

puts "🌱 Seeding spices..."

# puts "seeding groomers"
# Groomer.create(name: "Joyce", experience: 10)
# Groomer.create(name: "Randy", experience: 3)
# Groomer.create(name: "Paula", experience: 2)
# Groomer.create(name: "Matt", experience: 5)
# Groomer.create(name: "Carl", experience: 7)
# Groomer.create(name: "Dianna", experience: 12)



puts "seeding services"
Service.create(name: "Nail Trimming", price: 10.00, description: "A gentle but effective trimming.")
Service.create(name: "Bath", price: 20.00, description: "A calming bath with top-shelf shampoo and conditioners.")
Service.create(name: "Bath & Nails", price: 25.00, description: "Our top end bath and nail trimming combo.")
Service.create(name: "Brush Out", price: 10.00, description: "A thorough brushing to bring your dogs coat back to perfection.")
Service.create(name: "Cologne", price: 5.00, description: "Our top-shelf, best smelling dog cologne.")
Service.create(name: "Ear Cleaning", price: 5.00, description: "A gentle ear canal cleaning from our expert groomers.")
Service.create(name: "Teeth Brushing", price: 5.00, description: "A dedicated oral cleaning session.")
Service.create(name: "Top Dog", price: 50.00, description: "All of our top services thrown into one - your dogs dream spa day!")

puts "seeding rooms"
Room.create(name: "Alpine", price: 50.00, description: "An Indoor Mountain Top")
Room.create(name: "Meadow", price: 50.00, description: "Indoor Open Grassy Area")
Room.create(name: "High Rise", price: 50.00, description: "Your Dogs own Downtown Apartment")
Room.create(name: "Winter Cottage", price: 75.00, description: "All the Winter Vibes")
Room.create(name: "Summer Cottage", price: 75.00, description: "Calming Summer Getaway")
Room.create(name: "Penthouse", price: 85.00, description: "All the Downtown Amenities of Penthouse for Dogs")
Room.create(name: "Farmhouse", price: 50.00, description: "Calm Country Living")
Room.create(name: "Stadium", price: 50.00, description: "For the Sports Loving Dogs")


puts "✅ Done seeding!"