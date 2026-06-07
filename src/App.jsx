import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Products from './Components/Products/Products'
import Footer from './Components/Footer/Footer'
import Cart from './Components/Cart/Cart';
import { useState } from 'react';
import { Suspense } from "react";

function App() {

  const productsPromise = fetch('product.json')
    .then(res => res.json())

  const [toggle, setToggle] = useState(true);
  const [purchasedItems, setPurchasedItems] = useState([]);

  return (
    <>
      <Navbar />
      <Banner />

      <h1 className='text-3xl font-medium text-center mb-2'>Premium Digital Tools</h1>
      <p className='text-center font-extralight'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
      <div className='flex gap-3 mx-auto justify-center items-center'>
        <button onClick={() => setToggle(true)} className={`btn rounded-3xl ${toggle === true ? "bg-[#4F39F6]" : "text-[#4F39F6] border border-[#4F39F6]"}  mt-5`}>Products</button>

        <button onClick={() => setToggle(false)} className={`btn rounded-3xl ${toggle === false ? "bg-[#4F39F6]" : "text-[#4F39F6] border border-[#4F39F6] bg-transparent"} mt-5`}>Cart (0)</button>
      </div>

      {
        toggle === true ? <Suspense fallback={<p className='loading loading-spinner text-warning'></p>}>
        <Products purchasedItems={purchasedItems} setPurchasedItems={setPurchasedItems} productsPromise={productsPromise} /> </Suspense> : <Cart purchasedItems={purchasedItems} />
      }

      <Footer />
    </>
  )
}

export default App
