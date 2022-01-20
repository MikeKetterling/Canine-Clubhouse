class ServiceAppointmentMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.service_appointment_mailer.new_appointment_confirmation.subject
  #
  def new_appointment_confirmation(service_appointment, current_user)
    @user = current_user
    @appt = service_appointment

    mail to: @user.email, subject: "Appointment confirmation for #{@appt.dog.name}"
  end
end
