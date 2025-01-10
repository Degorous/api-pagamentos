class AddTokenToPayments < ActiveRecord::Migration[7.0]
  def change
    change_table :payments do |t|
      t.remove :card_number, :expiration_date, :cvv
      t.string :token
    end
  end
end
