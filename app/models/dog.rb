class Dog < ApplicationRecord
  belongs_to :user
  has_many :service_appointments, dependent: :destroy
  has_many :room_appointments, dependent: :destroy
end
