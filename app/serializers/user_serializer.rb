class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone, :username, :password_digest
end
