class RoomAppointmentsController < ApplicationController
  before_action :set_room_appointment, only: [:show, :destroy]

  # GET /room_appointments
  def index
    render json: RoomAppointment.all
  end

  # GET /room_appointments/1
  def show
    render json: @room_appointment
  end

  # POST /room_appointments
  def create
    room_appointment = RoomAppointment.create!(room_appointment_params)
    # RoomAppointmentMailer.new_appointment_confirmation(room_appointment).deliver_now
    render json: room_appointment, status: :created
  end

  # PATCH/PUT /room_appointments/1
  # def update
  #   @room_appointment.update!(room_appointment_params)
  #   render json: @room_appointment
  # end

  # DELETE /room_appointments/1
  def destroy
    @room_appointment.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_room_appointment
      @room_appointment = RoomAppointment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def room_appointment_params
      params.permit(:start, :end, :dog_id, :room_id)
    end
end
