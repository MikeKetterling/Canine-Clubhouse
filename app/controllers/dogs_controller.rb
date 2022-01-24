class DogsController < ApplicationController
  before_action :set_dog, only: [:show, :update, :destroy]

  # GET /dogs
  def index
    render json: @current_user.dogs.all
  end

  # GET /dogs/1
  def show
    render json: @dog
  end

  # POST /dogs
  def create
    # byebug
    dog = Dog.create!(dog_params)
    render json: dog, status: :created
    
  end

  # PATCH/PUT /dogs/1
  def update
    @dog.update!(dog_params)
    render json: @dog
    # byebug

  end

  # DELETE /dogs/1
  def destroy
    @dog.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dog
      @dog = Dog.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def dog_params
      params.permit(:name, :age, :breed, :gender, :weight, :image, :pet_image, :user_id)
    end
end
