import { currencyFormat } from "../../utils/money"
import axios from "axios"
import { useState } from "react"



export function CartItemDetails({ cartItem, loadCart }) {

  const [isUpdateingQuantity, setIsUpdatingQunatity] = useState(false)
  const [quantity, setQuantity]=useState(cartItem.quantity)

  const updateQuantity = async() => {
    if (isUpdateingQuantity) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity)  
    })
      await loadCart();
      setIsUpdatingQunatity(false)
    } else {
      setIsUpdatingQunatity(true)
    }
  }
 const updateQuantityInput = (event) => {
     setQuantity(event.target.value)
 }

 const update = (event) => {
    if (event.key === 'Enter') {
      updateQuantity();
    }else if (event.key === 'Escape') {
      setQuantity(cartItem.quantity)
       setIsUpdatingQunatity(false)
    }
  }

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  }
  return (
    <>
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
            Quantity: {isUpdateingQuantity
              ? <input type="text" className="quantity-textbox"
              value={quantity} onKeyDown={update}  onChange={updateQuantityInput}/>
              : <span className="quantity-label">{cartItem.quantity}</span>
            }
          </span>
          <span className="update-quantity-link link-primary" onClick={updateQuantity}>
            Update
          </span>
          <span className="delete-quantity-link link-primary"
            onClick={deleteCartItem}>
            Delete
          </span>
        </div>
      </div>
    </>
  )
}