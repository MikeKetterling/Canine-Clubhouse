class Service < ApplicationRecord
    has_many :service_appointments
    has_many :dogs, through: :service_appointments
    has_many :groomers, through: :service_appointments
end
