class Room < ApplicationRecord
    has_many :room_appointments
    has_many :dogs, through: :room_appointments
end
