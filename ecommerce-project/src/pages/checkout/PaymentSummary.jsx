import { currencyFormat } from "../../utils/money"

export function PaymentSummary({paymentSummary}){
  return(
     <div className="payment-summary">
                <div className="payment-summary-title">
                  Payment Summary
                </div>
    
                {paymentSummary && (
                  <>
                    <div className="payment-summary-row">
                      <div>Items ({paymentSummary.totalItems}):</div>
                      <div className="payment-summary-money">
                        {currencyFormat(paymentSummary.productCostCents)}
                      </div>
                    </div>
    
                    <div className="payment-summary-row">
                      <div>Shipping &amp; handling:</div>S
                      <div className="payment-summary-money">
                        {currencyFormat(paymentSummary.shippingCostCents)}
                      </div>
                    </div>
    
                    <div className="payment-summary-row subtotal-row">
                      <div>Total before tax:</div>
                      <div className="payment-summary-money">
                        {currencyFormat(paymentSummary.totalCostBeforeTaxCents)}
                      </div>
                    </div>
    
                    <div className="payment-summary-row">
                      <div>Estimated tax (10%):</div>
                      <div className="payment-summary-money">
                        {currencyFormat(paymentSummary.taxCents)}
                      </div>
                    </div>
    
                    <div className="payment-summary-row total-row">
                      <div>Order total:</div>
                      <div className="payment-summary-money">
                        {currencyFormat(paymentSummary.totalCostCents)}
                      </div>
                    </div>
    
                    <button className="place-order-button button-primary">
                      Place your order
                    </button>
                  </>
                )}
    
    
              </div>
  )
}