# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require_relative '../lib/populator_fix.rb'
# rake db:reset 
# rake db:seed
# bin/rails c
# Client.count 
# Client.all

puts "Starting seeds..."

# puts "Creating categories..."
# cat1 = Category.find_or_create_by! name: 'Painting'
# cat2 = Category.find_or_create_by! name: 'Sculpture'
# cat3 = Category.find_or_create_by! name: 'Illustration'

ArtistCategory.destroy_all
Comment.destroy_all
Review.destroy_all
Request.destroy_all
Client.destroy_all
Artist.destroy_all
Category.destroy_all

# puts "Creating Clients..."
# Client.populate 6 do |c|
#   c.first_name = Faker::Name.first_name
#    c.last_name = Faker::Name.last_name
#    c.email = Faker::Internet.email
#     c.phone_number = Faker::PhoneNumber.cell_phone
#      c.password = Faker::Alphanumeric.alpha(number: 10)
#      c.image = Faker::SlackEmoji.people
#     c.bio = Faker::Lorem.sentence(word_count:5, supplemental: true)
# end
# puts "Creating Artists..."
# Artist.populate 10 do |c|
#   c.first_name = Faker::Name.first_name
#    c.last_name = Faker::Name.last_name
#    c.email = Faker::Internet.email
#     c.phone_number = Faker::PhoneNumber.cell_phone
#      c.password = Faker::Alphanumeric.alpha(number: 10)
#      c.image = Faker::SlackEmoji.people
#     c.bio = Faker::Lorem.sentence(word_count:5, supplemental: true)
# end
# "Fetching all artists"
# artists = Artist.all


# "Fetching all categories"
# categories = Category.all

# "Fetching all clients"
# clients = Client.all

# puts "Creating Artist_Category table..."


# ArtistCategory.populate 10 do |a| 

#     a.artist_id =  artists.sample
#     a.category_id = categories.sample

# end

# puts "Created ArtistCategory"

# Review.populate 10 do |r|
#     r.star = Faker::Number.between(from: 1, to: 5)
#     r.artist_id = artists.sample
#     r.client_id = clients.sample
# end

# "Creating Requests"

# Request.populate 20 do |r|
#   r.name = Faker::Lorem.word
#   r.description = Faker::Lorem.sentence(word_count: 10)

#   r.price = 50
#   r.start_date = DateTime.now
#   r.client_id = clients.sample
#   r.artist_id = artists.sample
#   r.category_id = categories.sample

# end

# "Fetching all requests"
# requests = Request.all

# "Creating Comments"

# Comment.populate 10 do |c|
#     c.title = Faker::Lorem.word
#     c.content = Faker::Lorem.sentence(word_count: 3, supplemental: true)
#     c.client_id = clients.sample
#     c.request_id = requests.sample
# end

Client.create(
  id: 1,
  first_name: "Senay",
  last_name: "Alema",
  email: "Senay@gmail.com",
  password: 12345,
  phone_number: "604-729-0794",
)
Client.create(
  id: 2,
  first_name: "Ji",
  last_name: "Lun",
  email: "Ji@gmail.com",
  password: 12345,
  phone_number: "604-222-2222",
)
Client.create(
  id: 3,
  first_name: "Adam",
  last_name: "Underhill",
  email: "Adam@gmail.com",
  password: 12345,
  phone_number: "604-333-3333",
)
Client.create(
  id: 4,
  first_name: "Senay",
  last_name: "Alema",
  email: "Senay@gmail.com",
  password: 12345,
  phone_number: "604-444-4444",
)

Artist.create(
  id: 1,
  first_name: "Lun",
  last_name: "Ji",
  email: "Lun@gmail.com",
  password: 12345,
  phone_number: "604-729-0794",
)
Artist.create(
  id: 2,
  first_name: "Ji",
  last_name: "Lun",
  email: "Ji@gmail.com",
  password: 12345,
  phone_number: "604-323-0451",
)
Artist.create(
  id: 3,
  first_name: "Jason",
  last_name: "Nice",
  email: "Jason@gmail.com",
  password: 12345,
  phone_number: "778-124-1946",
)
Artist.create(
  id: 4,
  first_name: "Sherily",
  last_name: "Nice",
  email: "Sherily@gmail.com",
  password: 12345,
  phone_number: "225-111-7237",
)
Artist.create(
  id: 5,
  first_name: "Jojo",
  last_name: "Nice",
  email: "Jojo@gmail.com",
  password: 12345,
  phone_number: "125-151-7724",
)
Artist.create(
  id: 6,
  first_name: "James",
  last_name: "Nice",
  email: "James@gmail.com",
  password: 12345,
  phone_number: "225-051-9942",
)

Category.create(
  id: 1,
  name: "Artwork",
)
Category.create(
  id: 2,
  name: "Instruments",
)
Category.create(
  id: 3,
  name: "Hand Crafts"
)

Request.create(
  name: "Please",
  image: "https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0d29ya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  description: "Up to you",
  start_date: nil,
  expected_finish_date: "2021-08-31",
  actual_finish_date: nil,
  price: 20,
  client_id: 1,
  artist_id: nil,
  category_id: 1,
)
Request.create(
  name: "Paint",
  image:
    "https://images.unsplash.com/photo-1614519679857-2f21e9d25ca1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFydHdvcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  description: "Paint whatever you want",
  start_date: nil,
  expected_finish_date: "2021-02-01",
  actual_finish_date: nil,
  price: 40,
  client_id: 2,
  artist_id: nil,
  category_id: 1,
)
Request.create(
  name: "Me",
  image:
    "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGFydHdvcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  description: "Follow your heart",
  start_date: "2021-01-01",
  expected_finish_date: "2021-02-01",
  actual_finish_date: nil,
  price: 30,
  client_id: 1,
  artist_id: 1,
  category_id: 1,
)
Request.create(
  name: "Something",
  image:
    "https://images.unsplash.com/photo-1575995872537-3793d29d972c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGFydHdvcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  description: "I'm blind anyways",
  start_date: nil,
  expected_finish_date: "2021-08-31",
  actual_finish_date: nil,
  price: 20,
  client_id: 1,
  artist_id: 1,
  category_id: 1,
)
Request.create(
  name: "Nice",
  image:
    "https://images.unsplash.com/photo-1544409527-b0bbb5ab0013?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGFydHdvcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  description: "Nice",
  start_date: nil,
  expected_finish_date: "2021-08-31",
  actual_finish_date: nil,
  price: 20,
  client_id: 1,
  artist_id: 1,
  category_id: 1,
)
Request.create(
  name: "Gold Guitar",
  image:
    "https://images.pexels.com/photos/221629/pexels-photo-221629.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  description: "Solid Gold like Sadaams AK please",
  start_date: nil,
  expected_finish_date: "2021-08-31",
  actual_finish_date: nil,
  price: 20,
  client_id: 2,
  artist_id: 2,
  category_id: 2,
)
Request.create(
  name: "Table",
  image:
    "https://images.pexels.com/photos/2451264/pexels-photo-2451264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  description: "Tired of eating on the floor",
  start_date: nil,
  expected_finish_date: "2021-08-31",
  actual_finish_date: nil,
  price: 20,
  client_id: 2,
  artist_id: 2,
  category_id: 2,
)

Request.create(
  name: "I",
  image:
    "https://images.unsplash.com/photo-1544224690-d3d430bef970?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGFydHdvcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  description: "easy to please",
  start_date: "2021-01-01",
  expected_finish_date: "2021-02-01",
  actual_finish_date: "2021-03-01",
  price: 30,
  client_id: 1,
  artist_id: 1,
  category_id: 1,
)
Request.create(
  name: "Can't",
  image:
    "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGFydHdvcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  description: "i trust you with my life",
  start_date: "2021-01-01",
  expected_finish_date: "2021-02-01",
  actual_finish_date: "2021-03-01",
  price: 30,
  client_id: 1,
  artist_id: 1,
  category_id: 1,
)
Request.create(
  name: "Believe",
  image:
    "https://images.unsplash.com/photo-1580136579329-4b4594825880?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fGFydHdvcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  description: "dont screw this up",
  start_date: "2021-01-01",
  expected_finish_date: "2021-02-01",
  actual_finish_date: "2021-03-01",
  price: 30,
  client_id: 1,
  artist_id: 1,
  category_id: 1,
)
Request.create(
  name: "It's",
  image:
    "https://images.unsplash.com/photo-1618913001600-4284b12e1623?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGFydHdvcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  description: "i cant paint",
  start_date: "2021-01-01",
  expected_finish_date: "2021-02-01",
  actual_finish_date: "2021-03-01",
  price: 30,
  client_id: 1,
  artist_id: 4,
  category_id: 1,
)
Request.create(
  name: "Not",
  image:
    "https://images.unsplash.com/photo-1582561879360-b5f835317f05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxhcnR3b3JrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  description: "i hope you can paint",
  start_date: "2021-01-01",
  expected_finish_date: "2021-02-01",
  actual_finish_date: "2021-03-01",
  price: 30,
  client_id: 1,
  artist_id: 4,
  category_id: 1,
)
Request.create(
  name: "Butter",
  image:
    "https://images.unsplash.com/photo-1614843446128-ab25315f1536?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM4fHxhcnR3b3JrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  description: "i like the colour red",
  start_date: "2021-01-01",
  expected_finish_date: "2021-02-01",
  actual_finish_date: "2021-03-01",
  price: 30,
  client_id: 1,
  artist_id: 1,
  category_id: 1,
)
Request.create(
  name: "Hmmm....",
  image:
    "https://images.unsplash.com/photo-1578320743746-788d990bd318?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYwfHxhcnR3b3JrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  description: "good luck",
  start_date: "2021-01-01",
  expected_finish_date: "2021-02-01",
  actual_finish_date: "2021-03-01",
  price: 30,
  client_id: 1,
  artist_id: 1,
  category_id: 1,
)
Request.create(
  name: "Butter",
  image:
    "https://images.unsplash.com/photo-1578321272794-79e82a581d5d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgzfHxhcnR3b3JrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  description: "urgent request",
  start_date: "2021-01-01",
  expected_finish_date: "2021-02-01",
  actual_finish_date: "2021-03-01",
  price: 30,
  client_id: 1,
  artist_id: 4,
  category_id: 1,
)

