class AddDescriptionToServices < ActiveRecord::Migration[6.1]
  def change
    add_column :services, :description, :string
  end
end
