# Preview all emails at http://localhost:3000/rails/mailers/new_user_email
class NewUserEmailPreview < ActionMailer::Preview
    def notify_user
        user = User.first
        NewUserEmailMailer.notify_user(user)
    end
end
