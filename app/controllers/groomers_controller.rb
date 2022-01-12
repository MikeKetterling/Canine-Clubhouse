class GroomersController < ApplicationController
  before_action :set_groomer, only: [:show, :update, :destroy]

  # GET /groomers
  def index
    @groomers = Groomer.all

    render json: @groomers
  end

  # GET /groomers/1
  def show
    render json: @groomer
  end

  # POST /groomers
  def create
    @groomer = Groomer.new(groomer_params)

    if @groomer.save
      render json: @groomer, status: :created, location: @groomer
    else
      render json: @groomer.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /groomers/1
  def update
    if @groomer.update(groomer_params)
      render json: @groomer
    else
      render json: @groomer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /groomers/1
  def destroy
    @groomer.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_groomer
      @groomer = Groomer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def groomer_params
      params.require(:groomer).permit(:name, :experience)
    end
end
