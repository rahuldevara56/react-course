import { Link } from "react-router"
import mobilelogo from "../../assets/images/mobile-logo.png"
import logo from "../../assets/images/logo.png"
import './CheckoutHeader.css'
import checkoutlockicon from "../../assets/images/icons/checkout-lock-icon.png"

export function CheckoutHeader(){
  return(
    <>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src={logo} />
              <img className="mobile-logo" src={mobilelogo} />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<Link className="return-to-home-link"
              to="/">3 items</Link>)
          </div>

          <div className="checkout-header-right-section">
            <img src={checkoutlockicon} />
          </div>
        </div>
      </div>
    </>
  )
}