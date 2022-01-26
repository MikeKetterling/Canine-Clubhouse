class CreateRoomAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :room_appointments do |t|
      t.datetime :start
      t.datetime :end
      t.references :dog, null: false, foreign_key: true
      t.references :room, null: false, foreign_key: true

      t.timestamps
    end
  end
end
