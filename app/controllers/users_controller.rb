class UsersController < ApplicationController
  before_action :set_user, only: [:destroy]
  skip_before_action :authorize, only: :create

  # GET /users/1
  def show
    render json: @current_user, status: :ok
  end

  # POST /users
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    NewUserEmailMailer.notify_user(user).deliver_now

    render json: user, status: :created
  end

  # # PATCH/PUT /users/1
  # def update
  #   if @user.update(user_params)
  #     render json: @user
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /users/1
  def destroy
    @user.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:name, :email, :phone, :username, :password)
    end
end
