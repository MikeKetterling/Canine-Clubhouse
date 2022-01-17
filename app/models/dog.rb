class Dog < ApplicationRecord
  belongs_to :user
  has_many :service_appointments, dependent: :destroy
end
