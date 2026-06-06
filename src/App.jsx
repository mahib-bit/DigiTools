import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Products from './Components/Products/Products'
import { Suspense } from "react";

function App() {

  const productsPromise = fetch('product.json')
    .then(res => res.json())

  return (
    <>
      <Navbar />
      <Banner />

      <h1 className='text-3xl font-medium text-center mb-2'>Premium Digital Tools</h1>
      <p className='text-center font-extralight'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
      <div className='flex gap-3 mx-auto justify-center items-center'>
        <button className='btn rounded-3xl bg-[#4F39F6] mt-5'>Products</button>
        <button className='btn rounded-3xl text-[#4F39F6] border border-[#4F39F6] mt-5 bg-transparent'>Cart (0)</button>
      </div>

      <Suspense fallback={<p>Loading...</p>}>
        <Products productsPromise={productsPromise} />
      </Suspense>

    </>
  )
}

export default App
