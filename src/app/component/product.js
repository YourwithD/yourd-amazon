"use client"
import React, { useEffect, useState } from 'react'
import { CiStar } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/amazonSlice';

const Product = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
    
     const  featchApi = async () =>{
        let api = await fetch('https://fakestoreapi.com/products');
        let responce = await api.json()
        setProduct(responce);
    }
    useEffect(  () => {
      featchApi()
    },[] )
    return (
      
      <>
    <div className='grid m-auto  sm:grid-cols-2 md:grid-cols-4  '>
      {
        product.map((item)=>{
          return(
            <div  key={item.id} className=' z-10 '> 
            <div className='m-auto mt-16  border-2   bg-white w-80 flex flex-col '>
      <div className="imag w-80 h-96  flex flex-col items-center  ">
        <h2 className=' text-xl flex justify-end text-right w-full p-2  ' >{item.category}</h2>
      <img className='p-10 h-72  ' src={item.image}></img>
      
      </div>
      <div className='flex justify-between px-4 text-xl '><span>{item.title.substring(0, 15)}</span> <span>$ {item.price}</span></div>
      <p className='px-4'>{item.description.substring(0, 50)}</p>
      <div className='px-4 flex text-2xl text-yellow-300 '> <CiStar /> <CiStar /> <CiStar /> </div>
      <button onClick={()=>dispatch(addToCart({
        id: item.id,
        title: item.title,
        image: item.image,
        category: item.category,
        price: item.price,
        description: item.description,
        quantity: 1,
      }))} className='p-3 bg-yellow-500 hover:bg-yellow-400 rounded-md cursor-pointer'>Add To Cart</button>
    </div>
    </div>
    
          )          
        })
      }
    

   </div>
   </>
     )
}

export default Product
