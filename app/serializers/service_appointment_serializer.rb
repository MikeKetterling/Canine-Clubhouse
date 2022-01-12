class ServiceAppointmentSerializer < ActiveModel::Serializer
  attributes :id, :start, :end
  has_one :service
  has_one :dog
  has_one :groomer
end
