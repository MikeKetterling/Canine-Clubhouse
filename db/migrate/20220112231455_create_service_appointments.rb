class CreateServiceAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :service_appointments do |t|
      t.datetime :start
      t.datetime :end
      t.references :service, null: false, foreign_key: true
      t.references :dog, null: false, foreign_key: true
      t.references :groomer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
