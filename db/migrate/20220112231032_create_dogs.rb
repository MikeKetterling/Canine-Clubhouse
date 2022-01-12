class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.string :name
      t.int :age
      t.string :breed
      t.string :gender
      t.int :weight
      t.string :image
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
