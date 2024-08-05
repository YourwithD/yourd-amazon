"use client"
import React, { useEffect, useState } from 'react';
import banar_1 from '../../../public/banar/ama_banar_1.jpg'
import banar_2 from '../../../public/banar/ama_banar_4.jpg'
import Image from 'next/image';
import { FaArrowLeft,  FaArrowRight  } from "react-icons/fa";
import banar_3 from '../../../public/banar/ama_banar_3.jpg'
import banar_4 from '../../../public/banar/ama_banar_4.jpg'


const banarImg = [
  banar_1, banar_2, banar_3, banar_4
];
const Banar = () => {
   const [index, setIndex] = useState(0)
  const nextImg = () => {
    setIndex((prevIndex) =>(prevIndex + 1) % banarImg.length);
  };
  const prevImg = () => {
    setIndex((prevIndex)=>(prevIndex - 1 + banarImg.length) % banarImg.length)
  }
  
  setTimeout(() => {
    nextImg()
  }, [5000])

  return (
    <div className='mt-16 w-screen h-auto relative m-auto'>
      
      <FaArrowLeft onClick={prevImg}  className='z-20  text-black absolute top-12 sm:top-36 flex cursor-pointer text-4xl ml-5' />
            <div className='w-full h-auto' >
            <Image
            alt={banarImg[index]}
            src={banarImg[index]}
            /></div>
      <FaArrowRight onClick={nextImg} className='z-20 text-black absolute top-12  sm:top-36 flex cursor-pointer right-0 text-4xl mr-5' />
        
      
     

    </div>
  )
}

export default Banar
