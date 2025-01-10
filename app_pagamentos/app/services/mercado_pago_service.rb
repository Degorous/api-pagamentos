require 'mercadopago'

class MercadoPagoService
  def initialize(payment)
    @sdk = Mercadopago::SDK.new(ENV['MP_ACCESS_TOKEN'])
    @payment = payment
  end

  def call
    custom_headers = {
      'x-idempotency-key': @payment.id
    }

    custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

    payment_data = {
      transaction_amount: @payment.amount.to_f,
      token: @payment.token,
      installments: 1,
      payer: {
        email: @payment.user.email
      }
    }
    result = @sdk.payment.create(payment_data, request_options: custom_request_options)
    result[:response]

  end
end
