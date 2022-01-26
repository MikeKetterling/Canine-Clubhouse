class RoomAppointmentMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.room_appointment_mailer.new_appointment_confirmation.subject
  #
  def new_appointment_confirmation(room_appointment)
    @appt = room_appointment

    mail to: @appt.dog.user.email, subject: "Appointment confirmation for #{@appt.dog.name}"
  end
end
