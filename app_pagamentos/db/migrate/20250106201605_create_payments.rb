class CreatePayments < ActiveRecord::Migration[7.0]
  def change
    create_table :payments do |t|
      t.string :name
      t.string :card_number
      t.date :expiration_date
      t.string :cvv
      t.decimal :amount
      t.timestamps
    end
  end
end
