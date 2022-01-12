class ServiceAppointment < ApplicationRecord
  belongs_to :service
  belongs_to :dog
  belongs_to :groomer
end
