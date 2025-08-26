import { HomePage } from './pages/home/HomePage'
import {Routes,Route} from 'react-router'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/orders/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'


function App() {

   const [cart, setCart] = useState([])  

   useEffect(() => {

   async function fetchAppData() {
     const response = await axios.get('/api/cart-items?expand=product')
       setCart(response.data);
    }
    
    fetchAppData();
    },[])
 return (

  <Routes>  
   <Route index element={<HomePage cart={cart} />} />
   <Route path="checkout" element={<CheckoutPage cart={cart}/>} />
   <Route path="orders" element={<OrdersPage cart = {cart} />} />
    <Route path="tracking" element={<TrackingPage />} />
  </Routes>

 )
}

export default App
