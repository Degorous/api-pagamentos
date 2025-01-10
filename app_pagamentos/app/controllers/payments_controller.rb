class PaymentsController < ApplicationController
  before_action :authenticate_user!

  def create
    payment = Payment.new(user_id: current_user.id)

    payment.assign_attributes(payment_params)

    if payment.save
      MercadoPagoService.new(payment).call
      render json: payment, status: :created
    else
      render json: payment.errors, status: :unprocessable_entity
    end
  end

  def index
    payments = current_user.payments
    render json: payments

  end
  
  private
  
  def payment_params
    params.require(:payment).permit(:name, :token, :amount)
  end
end