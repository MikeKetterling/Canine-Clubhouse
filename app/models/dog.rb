class Dog < ApplicationRecord
  belongs_to :user
  has_many :service_appointments, dependent: :destroy

  has_one_attached :pet_image
  validate :acceptable_image

  def acceptable_image
    return unless pet_image.attached?
  end
end
