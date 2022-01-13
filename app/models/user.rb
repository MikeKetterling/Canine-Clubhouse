class User < ApplicationRecord
    has_secure_password
    has_many :dogs

    validates :username, :email, presence: true, uniqueness: true    

end
