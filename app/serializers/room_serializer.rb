class RoomSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description
end
