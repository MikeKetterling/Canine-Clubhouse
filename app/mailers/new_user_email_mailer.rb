class NewUserEmailMailer < ApplicationMailer
    def notify_user(user)
        @user = user
        mail to: @user.email, subject: "Welcome #{@user.name} to Canine Clubhouse"
        
    end
end
