
import './HomePage.css'
import { Header } from '../../components/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductsGrid } from './ProductsGrid'

export function HomePage({cart, loadCart}) {

  const [products, setProducts] = useState([])
 

    useEffect(() => {
  //        fetch('http://localhost:3000/api/products')
  //         .then((response) => {
  //          return response.json();
  //         }).then((data) => {
  //   setProducts(data); 
  // } )      
  
  //   axios.get('/api/products')
  //          .then((response) => {
  //     setProducts(response.data);
  //  } )  

    const getHomeData = async() => {
      
    const response = await axios.get('/api/products')
        setProducts(response.data);
    }

    getHomeData();

    },[])
 
  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="images/home-favicon.png" />

      <Header cart = {cart}/>

      <div className="home-page">
      <ProductsGrid products={products} loadCart={loadCart}/>
    </div >
    </>
  )
}


