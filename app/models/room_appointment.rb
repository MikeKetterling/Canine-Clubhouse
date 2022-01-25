class RoomAppointment < ApplicationRecord
  belongs_to :dog
  belongs_to :room
end
