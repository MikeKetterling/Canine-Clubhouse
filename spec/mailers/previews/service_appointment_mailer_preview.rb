# Preview all emails at http://localhost:3000/rails/mailers/service_appointment_mailer
class ServiceAppointmentMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/service_appointment_mailer/new_appointment_confirmation
  def new_appointment_confirmation
    service_appointment = ServiceAppointment.last
    ServiceAppointmentMailer.new_appointment_confirmation(service_appointment)
  end

end
