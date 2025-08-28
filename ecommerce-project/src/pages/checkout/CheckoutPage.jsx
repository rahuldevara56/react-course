import { PaymentSummary } from './PaymentSummary'
import { CheckoutHeader } from './CheckoutHeader'
import axios from 'axios'
import { useState, useEffect, } from 'react'
import './CheckoutHeader.css'
import './ChectoutPage.css'
import { OrderSummary } from './OrderSummary'

export function CheckoutPage({ cart , loadCart}) {

  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null)

  useEffect(() => {

   async function fetchCheckoutData() {
     let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
       setDeliveryOptions(response.data)

      response =await axios.get('/api/payment-summary')
            setPaymentSummary(response.data)
    }
    fetchCheckoutData();
  }, [cart])
  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="images/cart-favicon.png" />
      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart}/>

          <PaymentSummary paymentSummary={paymentSummary}/>
        </div>
      </div>
    </>
  )
}