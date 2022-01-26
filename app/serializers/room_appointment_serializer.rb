class RoomAppointmentSerializer < ActiveModel::Serializer
  attributes :id, :start, :end
  has_one :dog
  has_one :room
end
