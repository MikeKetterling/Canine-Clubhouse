class ServiceAppointmentsController < ApplicationController
  before_action :set_service_appointment, only: [:show, :update, :destroy]

  # GET /service_appointments
  def index
    @service_appointments = ServiceAppointment.all

    render json: @service_appointments
  end

  # GET /service_appointments/1
  def show
    render json: @service_appointment
  end

  # POST /service_appointments
  def create
    @service_appointment = ServiceAppointment.new(service_appointment_params)

    if @service_appointment.save
      render json: @service_appointment, status: :created, location: @service_appointment
    else
      render json: @service_appointment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /service_appointments/1
  def update
    if @service_appointment.update(service_appointment_params)
      render json: @service_appointment
    else
      render json: @service_appointment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /service_appointments/1
  def destroy
    @service_appointment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_service_appointment
      @service_appointment = ServiceAppointment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def service_appointment_params
      params.require(:service_appointment).permit(:start, :end, :service_id, :dog_id, :groomer_id)
    end
end
