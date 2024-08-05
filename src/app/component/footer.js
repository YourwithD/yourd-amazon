"use client"
import React from 'react'
import { IoGlobeOutline } from "react-icons/io5";
import { FaFlag } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <section className='    w-full h-auto '>
      <div className='flex flex-col justify-center p-16 text-center bg-white  w-screen  '>
        <h2>See Personalised recommendations </h2>
        <button className='p-2 flex m-auto w-80 justify-center text-center  bg-yellow-400 rounded-lg '> Sign In</button>
        <p>New Costormer? <span className='cursor-pointer  text-blue-400 '>Start hare</span></p>
      </div>

      <Link href="/">  <div className='w-full flex justify-center bg-slate-700 p-5 text-white hover:bg-slate-600  '>Back To Top</div>  </Link >
        <div className='sm:flex  border-b-2 justify-evenly p-2  sm:p-10   text-start bg-amazon_light w-full text-white  '>
            <div className='pt-5'>
                <h2 className='text-2xl font-bold '>Get to Know Us</h2>
                <ul className=''>
                    <li className='cursor-pointer pt-1 hover:underline '>About Us</li>
                    <li className='cursor-pointer pt-1 hover:underline '>Careers</li>
                    <li className='cursor-pointer pt-1 hover:underline '>Press Releases</li>
                    <li className='cursor-pointer pt-1 hover:underline '>Amazon Science</li>
                </ul>
            </div>
            <div className='pt-5 '>
                <h2 className='text-2xl font-bold '>Contact With Us</h2>
                <ul>
                <li className='cursor-pointer pt-1 hover:underline '>Facebook</li>
                <li className='cursor-pointer pt-1 hover:underline '>Twitter</li>
                <li className='cursor-pointer pt-1 hover:underline '>Instagram</li>
                </ul>
            </div>
            <div className='pt-5 '>
                <h2 className='text-2xl font-bold '>Make Money with Us</h2>
                <ul>
                <li className='cursor-pointer pt-1 hover:underline flex-wrap '>Sell on Amazon</li>
                <li className='cursor-pointer pt-1 hover:underline flex-wrap '>Sell under Amazon Accelerator</li>
                <li className='cursor-pointer pt-1 hover:underline flex-wrap '>Protect and Build Your Brand</li>
                <li className='cursor-pointer pt-1 hover:underline flex-wrap '>Amazon Global Selling</li>
                <li className='cursor-pointer pt-1 hover:underline flex-wrap '>Become an Affiliate</li>
                <li className='cursor-pointer pt-1 hover:underline flex-wrap '>Fulfilment by Amazon</li>
                <li className='cursor-pointer pt-1 hover:underline flex-wrap '>Advertise Your Products</li>
                <li className='cursor-pointer pt-1 hover:underline flex-wrap '>Amazon Pay on Merchants
                </li>
                </ul>
            </div>
            <div className='pt-5 '>
                <h2 className='text-2xl font-bold '>Make Money with Us</h2>
                <ul>
                <li className='cursor-pointer pt-1 hover:underline flex-wrap '>COVID-19 and Amazon</li>
                <li className='cursor-pointer pt-1 hover:underline flex-wrap '>Your Account</li>
                <li className='cursor-pointer pt-1 hover:underline flex-wrap '>Returns Centre</li>
                <li className='cursor-pointer pt-1 hover:underline flex-wrap '>Recalls and Product Safety Alerts</li>
                <li className='cursor-pointer pt-1 hover:underline flex-wrap '>100% Purchase Protection</li>
                <li className='cursor-pointer pt-1 hover:underline flex-wrap '>Amazon App Download</li>
                <li className='cursor-pointer pt-1 hover:underline flex-wrap '>Help</li>
                </ul>
            </div>
        </div>
        <div className="secendFooter bg-amazon_light flex justify-center p-2  sm:p-10 text-white gap-10  sm:gap-28 border-b-2   ">
          <h1 className=' text-xl sm:text-3xl '>Your D</h1>
          <div className='flex gap-10 '>
            <button className='flex border text-center align-middle p-2  rounded-lg    justify-center gap-3   '>
              <span><IoGlobeOutline /> </span>
              <span>English</span>
            </button>
            <button className='flex border text-center align-middle p-2  rounded-lg    justify-center gap-3   '>
              <span><FaFlag /> </span>
              <span>India</span>
            </button>
          </div>
        </div>
        <div className="thardFooter bg-amazon_blue ">
        <ul className=' grid grid-cols-2 md:grid-cols-4   sm:p-10 justify-center '>
                    <li className='cursor-pointer pt-1 hover:underline w-40 flex flex-col m-2 text-[12px]  sm:text-[16px] sm:m-5 text-white  '><span className='text-white font-bold'>AbeBooks</span> <span className='flex-wrap text-yellow-50'>Books, art
                    & collectibles</span></li>
                    <li className='cursor-pointer pt-1 hover:underline w-48 flex flex-col m-2 text-[12px]  sm:text-[16px] sm:m-5  text-white'><span className='text-white font-bold'>Amazon Web Services</span> <span className='flex-wrap text-yellow-50'>Scalable Cloud
                    Computing Services</span></li>
                    <li className='cursor-pointer pt-1 hover:underline w-40 flex flex-col m-2 text-[12px]  sm:text-[16px] sm:m-5  text-white'><span className='text-white font-bold'>Audible</span> <span className='flex-wrap text-yellow-50'>Download
                    Audio Books</span></li>
                    <li className='cursor-pointer pt-1 hover:underline w-40 flex flex-col m-2 text-[12px]  sm:text-[16px] sm:m-5 text-white '><span className='text-white font-bold'>IMDb</span> <span className='flex-wrap text-yellow-50'>Movies, TV
                    & Celebrities</span></li>
                    <li className='cursor-pointer pt-1 hover:underline w-40 flex flex-col m-2 text-[12px]  sm:text-[16px] sm:m-5  text-white'><span className='text-white font-bold'>Shopbop</span> <span className='flex-wrap text-yellow-50'>Designer
                    Fashion Brands</span></li>
                    <li className='cursor-pointer pt-1 hover:underline w-40 flex flex-col m-2 text-[12px]  sm:text-[16px] sm:m-5  text-white'><span className='text-white font-bold'>Amazon Business</span> <span className='flex-wrap text-yellow-50'>Everything For
                    Your Business</span></li>
                    <li className='cursor-pointer pt-1 hover:underline w-40 flex flex-col m-2 text-[12px]  sm:text-[16px] sm:m-5 text-white '><span className='text-white font-bold'>Prime Now</span> <span className='flex-wrap text-yellow-50'>2-Hour Delivery
                    on Everyday Items</span></li>
                    <li className='cursor-pointer pt-1 hover:underline w-60 flex flex-col m-2 text-[12px]  sm:text-[16px] sm:m-5  text-white'><span className='text-white font-bold'>Amazon Prime Music</span> <span className='flex-wrap text-yellow-50'>100 million songs, ad-free
                    Over 15 million podcast episodes</span></li>
                    
                </ul>

                <div className='flex justify-center text-white gap-10  '>
                  <p className='cursor-pointer text-[12px] sm:text-[16px] hover:underline'>Conditions of Use & Sale</p>
                  <p className='cursor-pointer text-[12px] sm:text-[16px] hover:underline'>Privacy Notice</p>
                  <p className='cursor-pointer text-[12px] sm:text-[16px] hover:underline'>Interest-Based Ads</p>
                </div>
                  <p className='flex justify-center text-white pb-10 text-[10px] sm:text-[16px] hover:underline'>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
                
        </div>

      </section>
    </>
  )
}

export default Footer
