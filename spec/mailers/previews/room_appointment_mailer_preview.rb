# Preview all emails at http://localhost:3000/rails/mailers/room_appointment_mailer
class RoomAppointmentMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/room_appointment_mailer/new_appointment_confirmation
  def new_appointment_confirmation
    room_appointment = RoomAppointment.last
    RoomAppointmentMailer.new_appointment_confirmation(room_appointment)
  end

end
