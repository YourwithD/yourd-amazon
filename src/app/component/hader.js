"use client"
import React, { useState } from 'react'
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiIndiaGate } from "react-icons/gi";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowLeft } from "react-icons/fa";
import { allCategary } from './props';
import Sidenav from './sidenav';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"
const Hader = () => {
  const [allitem, setAllitem] = useState(false);
  const [sidenav, setSidenav] = useState(false);
  const [search, setSearch] = useState(false);
  const products = useSelector((state)=> state.amazonReducer.products)

  const { data: session } = useSession()

  console.log(session);
 
  return (
    <>
      <div className="hader w-screen h-16 z-20 bg-amazon_blue flex justify-between items-center top-0 px-5 py-3 fixed">
      <Link href="/"><div className={`flex items-center h-14 text-lighttext  my-1 hover:border-2 cursor-pointer p-1 text-3xl `}> {search ? <FaArrowLeft onClick={()=>setSearch(false)} /> : "YourD" }</div></Link>
        <div className='hidden sm:flex sm:text-[10px] md:text-[14px] text-start text-lighttext h-14 my-1 hover:border-2 cursor-pointer p-1'>
        <CiLocationOn className='h-5  w-8 sm:mt-5  md:mt-6 '/>
        <div className=''> <p>Deliver to Rajesh</p>
         <h3 className='flex text-xl'> Rajaldesar</h3></div>
        </div>  
        <div className={`sm:flex rounded-lg   flex-grow text-center bg-slate-50  cursor-pointer  ${search ? "flex" : "hidden"} `}>
         <span onClick={()=>{setAllitem(!allitem)}} className='px-1 flex items-center hover:bg-slate-200'>All <IoMdArrowDropdown className=' mx-1 ' /></span> <input className='flex-grow' type="text" placeholder='Search Amazon.in'  /> <CiSearch className='h-8 w-8 p-1 rounded-r-lg   bg-yellow-600 ' />
        
      {/*   <ul className='flex flex-col text-start absolute mt-7 bg-white  p-1 w-56 overflow-y-scroll  h-72  '>
                 
          {allCategary.map(e=>{
            return(
              <li key={e.id} className='hover:bg-blue-500 text-black'> {e.name}</li>
            )
          })}
         </ul> */}
          {
            allitem ? <ul className='flex flex-col text-start absolute mt-7 bg-white  p-1 w-56 overflow-y-scroll  h-72  '>
                 
            {allCategary.map(e=>{
              return(
                <li key={e.id} className='hover:bg-blue-500 text-black'> {e.name}</li>
              )
            })}
           </ul> : " "
          }
         
        </div>
        <div className='hidden sm:flex items-center h-14 text-lighttext  my-1 hover:border-2 cursor-pointer p-1 gap-1'><GiIndiaGate/> <span>En</span><IoMdArrowDropdown className='mt-4' /></div>
        <div className=' flex items-center text-start text-lighttext h-14 my-1 hover:border-2 cursor-pointer p-1'>
       
        <div onClick={()=> signIn()} > <p className={`text-[16px] sm:text-[10px] ${search ? "hidden" : "flex"}`}>Hello Rajesh</p>
         <h3 className='hidden sm:flex sm:text-[10px] md:text-[14px] text-xl'> Acount & List</h3></div>
        <IoMdArrowDropdown className='h-5 hidden sm:flex w-8 mt-7 '/>
        </div>
        <div className='hidden sm:flex flex-col text-lighttext text-start h-14 p-1   hover:border-2 cursor-pointer'>
        <p>Return</p>
         <h3 className='flex text-xl'> & Orders</h3>
        </div>
        <Link href="/cart" >
        <div className='flex text-lighttext  items-start h-14 p-1   hover:border-2 cursor-pointer'>
       <span className='flex absolute ml-2.5 text-yellow-500 p-1 -mt-1'> {products.length > 0 ? products.length : 0 } </span><span className='mt-4 flex' > <MdOutlineShoppingCartCheckout className='text-4xl' /> Cart</span>
        </div></Link>
        <div onClick={()=>{setSearch(true)}} className={`flex sm:hidden text-lighttext  items-center h-14 p-1   hover:border-2 cursor-pointer ${search ? "hidden" : "flex"}`}>
        <CiSearch className='h-8 w-8 p-1  ' />
        </div>

      </div>
      <section>
        <div className='w-screen  flex z-10 relative   h-12 items-center cursor-pointer top-16  bg-amazon_light flex-1 '>
<div onClick={()=>setSidenav(!sidenav)} className='flex sm:flex sm:text-[10px] md:text-[14px] h-12 px-2 text-white items-center  p-1   hover:border-2 cursor-pointer'>< RxHamburgerMenu className='text-3xl px-1 sm:text-xl md:text-3xl' /> All </div>
        <div className='sm:flex sm:text-[10px] md:text-[14px]  text-white h-12 px-2  items-center  p-1 hidden   hover:border-2 cursor-pointer'>Today Deals </div>
        <div className='sm:flex sm:text-[10px] md:text-[14px]  text-white h-12 px-2  items-center  p-1 hidden   hover:border-2 cursor-pointer'>Buy Again </div>
        <div className='sm:flex sm:text-[10px] md:text-[14px]  text-white h-12 px-2  items-center  p-1 hidden   hover:border-2 cursor-pointer'>Amazon Mini TV </div>
        <div className='sm:flex sm:text-[10px] md:text-[14px]  text-white h-12 px-2  items-center  p-1 hidden   hover:border-2 cursor-pointer'>Sell </div>
        <div className='sm:flex sm:text-[10px] md:text-[14px]  text-white h-12 px-2  items-center  p-1 hidden   hover:border-2 cursor-pointer'>Amazon Pay </div>
        <div className='sm:flex sm:text-[10px] md:text-[14px]  text-white h-12 px-2  items-center  p-1 hidden   hover:border-2 cursor-pointer'>Everyday Store  </div>
        <div className='sm:flex sm:text-[10px] md:text-[14px]  text-white h-12 px-2  items-center  p-1 hidden   hover:border-2 cursor-pointer'> Best Sellers</div>
        <div className='sm:flex sm:text-[10px] md:text-[14px]  text-white h-12 px-2  items-center  p-1 hidden   hover:border-2 cursor-pointer'>Prime <IoMdArrowDropdown /> </div>
        <div className='sm:flex sm:text-[10px] md:text-[14px]  text-white h-12 px-2  items-center  p-1 hidden   hover:border-2 cursor-pointer'>Mobile </div>
    </div>
    {
      sidenav ? < Sidenav /> : ""
    }
    </section>
    </>
  )
}

export default Hader
