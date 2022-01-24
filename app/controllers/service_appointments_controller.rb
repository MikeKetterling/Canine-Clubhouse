class ServiceAppointmentsController < ApplicationController
  before_action :set_service_appointment, only: [:show, :destroy]

  # GET /service_appointments
  def index
    render json: ServiceAppointment.all
  end

  # GET /service_appointments/1
  def show
    render json: @service_appointment
  end

  # POST /service_appointments
  def create
    service_appointment = ServiceAppointment.create!(service_appointment_params)
    ServiceAppointmentMailer.new_appointment_confirmation(service_appointment).deliver_now
    render json: service_appointment, status: :created
  end

  # PATCH/PUT /service_appointments/1
  # def update
  #   @service_appointment.update!(service_appointment_params)
  #   render json: @service_appointment
  # end

  # DELETE /service_appointments/1
  def destroy
    @service_appointment.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_service_appointment
      @service_appointment = ServiceAppointment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def service_appointment_params
      params.permit(:start, :end, :service_id, :dog_id, :groomer_id)
    end
end
