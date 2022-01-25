class RoomsController < ApplicationController
  before_action :set_room, only: [:show]

  # GET /rooms
  def index 
    render json: Room.all
  end

  # GET /rooms/1
  def show
    render json: @room
  end

  # POST /rooms
  # def create
  #   room = Room.create!(room_params)
  #   render json: room, status: :created
  # end

  # PATCH/PUT /rooms/1
  # def update
  #   @room.update!(room_params)
  #   render json: @room
  # end

  # DELETE /rooms/1
  # def destroy
  #   @room.destroy
  #   head :no_content
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_room
      @room = Room.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def room_params
      params.permit(:name, :price, :description)
    end
end
