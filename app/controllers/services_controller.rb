class ServicesController < ApplicationController
  before_action :set_service, only: [ :show ]

  # GET /services
  def index
    render json: Service.all
  end

  # GET /services/1
  def show
    render json: @service
  end

  # # POST /services
  # def create
  #   service = Service.create!(service_params)
  #   render json: service, status: :created
  # end

  # # PATCH/PUT /services/1
  # def update
  #   @service.update!(service_params)
  #   render json: @service
  # end

  # # DELETE /services/1
  # def destroy
  #   @service.destroy
  #   head :no_content
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_service
      @service = Service.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def service_params
      params.permit(:name, :price, :description)
    end
end
