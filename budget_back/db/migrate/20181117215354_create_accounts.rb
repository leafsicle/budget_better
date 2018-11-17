class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.string :name
      t.string :due_date
      t.boolean :type
      t.integer :amount_due
      t.integer :frequency
      t.boolean :paid
      t.string :remaining
      t.integer :payment
      t.textarea :notes

      t.timestamps
    end
  end
end
