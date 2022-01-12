class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :breed, :gender, :weight, :image
  has_one :user
end
