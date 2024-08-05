"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, dicrimentQuantity, incrimentQuantity, removeItem } from '../redux/amazonSlice'
import Link from 'next/link'

const AddToCart = () => {
  const [totalprice, setTotalprice] = useState('0');
  const dispatch = useDispatch()
  const products = useSelector((state)=> state.amazonReducer.products);
 
  
useEffect(() => {
  let total = 0; 
   products.map((item)=>{
    total += item.quantity * item.price;
    return;});
    setTotalprice(total);
    },[products]);


  return (
    <div className='mt-16 w-screen h-auto relative m-auto'>
      <div className='sm:flex justify-between w-full '>
        {products == 0 ?  <div className='flex justify-center m-auto text-center flex-col p-10   w-full h-full ' >
          <p>Your Cart Is Empty</p> 
         <Link href='/'> <button className='hover:bg-yellow-400 bg-yellow-500 rounded-md mt-2 w-40  p-3 m-5 flex text-center justify-center   cursor-pointer'>Continue Shoping</button> </Link>
        </div>
        :
        <div className=" flex flex-col bg-white w-full  sm:w-5/6 m-3 p-4">
            <div className='flex w-full pb-3 justify-between border-b-2'><h1 className='text-4xl'>Shoping Cart</h1><h3 className='text-2xl'>Subtitle</h3></div>
            {
              products.map((item)=>{
                return(
            <div key={item.id} className=' mt-2  border-b-2 pb-3   sm:flex  w-full '>
      <div className="imag flex w-full sm:w-1/4 items-center p-10 ">
      <img
      alt={item.id}
      src={item.image}
      ></img>
      
      </div>
      <div className='flex px-4 w-3/4  flex-col'>
      <div className='  text-xl '>{item.title.substring(0, 70)}</div>
      <p className=''>{item.description.substring(0, 200)}</p>
      <div className=' flex text-xl gap-5 '>Unit Price <span>${item.price}</span> </div>
    <div className='flex  gap-2 items-center  text-2xl  '><h2>Qty:</h2><button  onClick={()=>{dispatch(dicrimentQuantity(item.id))}} >-</button> <span>{item.quantity}</span> <button onClick={()=>dispatch(incrimentQuantity(item.id))} >+</button></div>
      <button onClick={()=>dispatch(removeItem(item.id))} className='p-3 px-4 hover:bg-yellow-400   bg-yellow-500 w-40 rounded-md cursor-pointer'>Remove Item</button>
      </div>
      <div className='flex items-center justify-start sm:justify-end sm:w-1/6 px-4 text-2xl'> Total ${item.price * item.quantity}</div>   
            </div>
            )})
            }

            <button onClick={()=>dispatch(clearCart())} className='hover:bg-yellow-400 bg-yellow-500 rounded-md mt-2 w-40 p-3  cursor-pointer'>Delite All Item</button>

        </div>
}


        <div className="flex flex-col bg-white w-full sm:w-1/6 h-72 sm:m-10">
        <p className='flex-wrap p-5 '> Your Order qualities for free Shipping Choes this option at chackout.. See details</p>
        <p className='p-5 flex justify-between text-2xl'> <span>Total:</span> <span> ${totalprice}</span></p>
        <button className='hover:bg-yellow-400 bg-yellow-500 rounded-md mt-2 p-3 m-5   cursor-pointer'>Process to Pay</button>
        <p className='flex justify-center text-center text-red-500 -mt-5 '>Please Login to continue</p>
        </div>
      </div>
    </div>
  )
}

export default AddToCart
