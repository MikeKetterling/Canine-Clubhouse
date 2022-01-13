class GroomersController < ApplicationController
  before_action :set_groomer, only: [ :show ]

  # GET /groomers
  def index
    render json: Groomer.all
  end

  # GET /groomers/1
  def show
    render json: @groomer
  end

  # POST /groomers
  # def create
  #   groomer = Groomer.create!(groomer_params)
  #   render json: groomer, status: :created
  # end

  # PATCH/PUT /groomers/1
  # def update
  #   @groomer.update!(groomer_params)
  #   render json: @groomer
  # end

  # # DELETE /groomers/1
  # def destroy
  #   @groomer.destroy
  #   head :no_content
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_groomer
      @groomer = Groomer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def groomer_params
      params.permit(:name, :experience)
    end
end
