json.extract! account, :id, :name, :due_date, :type, :amount_due, :frequency, :paid, :remaining, :payment, :notes, :created_at, :updated_at
json.url account_url(account, format: :json)
