import React from 'react'
import { FaArrowDown } from "react-icons/fa";
import Product from "./Product.jsx"
import MetaData from '../layout/MetaData.jsx';

const product = {
  name:"Laptop",
  price: "Rs.1000",
  id: "hello",
  images: [{url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71p-M3sPhhL.jpg"}]
}

const Home = () => {
  return (
    <>
    <MetaData title="Swift Cart" />

    <div className='bg-gradient-to-tr from-blue-500 to-blue-950 
    flex flex-col items-center text-white gap-4 text-center h-[calc(90vmin)] pt-12 [clip-path:polygon(0%_0%,100%_0%,100%_60%,0%_75%)]
    md:gap-8 md:pt-40 md:[clip-path:polygon(0%_0%,100%_0%,100%_60%,0%_90%)]'>
      <p className=' text-3xl font-bold md:text-6xl'>Welcome to Swift Cart</p>
      <p className=' text-2xl md:text-3xl'>Find Amazing Products Below</p>
      <button className=' bg-blue-950 px-4 py-2 rounded-md'>
        <a href="#featured" className='flex items-center gap-2 md:text-2xl '>
          Scroll <FaArrowDown />
        </a>
      </button>
    </div>

    <div className=' flex flex-col items-center mb-4' id='featured'>
      <div className=' flex flex-col items-center mt-4'>
        <h1 className='text-2xl font-bold mb-1' >Featured Products</h1>
        <div className="h-1 w-60 bg-blue-700 rounded mb-6"></div>
      </div>
      <div className='flex flex-wrap md:w-4/5 md:gap-8 gap-4 justify-center md:mb-8 mb-4'>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
      </div>
      <div className='flex flex-wrap md:w-4/5 md:gap-8 gap-4 justify-center mb-8'>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
      </div>
    </div>
    </>
  )
}

export default Home