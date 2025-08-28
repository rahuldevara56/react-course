import dayjs from "dayjs"
import { currencyFormat } from "../../utils/money"
import { DeliveryOptions } from "../checkout/DeliveryOptions"
import axios from "axios"

export function OrderSummary({cart, deliveryOptions,loadCart}) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 && cart.map((cartItem) => {
        const selectedDeliveryOption = deliveryOptions
          .find((deliveryOption) => {
            return deliveryOption.id === cartItem.deliveryOptionId
          })

          const deleteCartItem = async() => {
            await axios.delete(`/api/cart-items/${cartItem.productId}`);
            await loadCart();
          }
        return (
          <div key={cartItem.productId} className="cart-item-container">
            <div className="delivery-date">
              Delivery date: {dayjs(selectedDeliveryOption.
                estimatedDeliveryTimeMs).format('dddd,MMMM D')}
            </div>

            <div className="cart-item-details-grid">
              <img className="product-image"
                src={cartItem.product.image} />

              <div className="cart-item-details">
                <div className="product-name">
                  {cartItem.product.name}
                </div>
                <div className="product-price">
                  {currencyFormat(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                  <span>
                    Quantity: <span className="quantity-label">2</span>
                  </span>
                  <span className="update-quantity-link link-primary">
                    Update
                  </span>
                  <span className="delete-quantity-link link-primary"
                  onClick={deleteCartItem}>
                    Delete
                  </span>
                </div>
              </div>

             <DeliveryOptions cartItem={cartItem} deliveryOptions= {deliveryOptions} loadCart={loadCart}/>
            </div>
          </div>
        )
      })}
    </div>
  )
}