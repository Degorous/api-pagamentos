require 'rails_helper'

describe "Payments", type: :request do
  describe "POST /" do
    it "returns http success" do
      post "/payments", params: { payment: { name: "John Doe", card_number: "1234567890123456", expiration_date: "2025-01-01", cvv: "123", amount: 100 } }
      expect(response).to have_http_status(:created)
    end

    it "create record" do
      post "/payments", params: { payment: { name: "John Doe", card_number: "1234567890123456", expiration_date: "2025-01-01", cvv: "123", amount: 100 } }
      expect(Payment.last).to have_attributes(name: "John Doe", card_number: "1234567890123456", expiration_date: Date.parse("2025-01-01"), cvv: "123", amount: BigDecimal(100) )
    end
  end

  describe "GET /" do
    it "returns all payments" do
      Payment.create(name: "John Doe", card_number: "1234567890123456", expiration_date: "2025-01-01", cvv: "123", amount: 100)

      Payment.create(name: "John Doe", card_number: "1234567890123456", expiration_date: "2025-01-01", cvv: "123", amount: 100)

      get "/payments"

      expect(response.parsed_body.count).to eq(2)
    end
  end
end