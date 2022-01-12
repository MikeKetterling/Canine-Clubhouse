class Groomer < ApplicationRecord
    has_many :service_appointments
    has_many :dogs, through: :service_appointments
    has_many :services, through: :service_appointments
end
