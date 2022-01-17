class User < ApplicationRecord
    has_secure_password
    has_many :dogs, dependent: :destroy

    validates :username, :email, presence: true, uniqueness: true    

end
