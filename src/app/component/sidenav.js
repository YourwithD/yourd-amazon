import React, { useEffect, useRef, useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { allSideNav } from './props';
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

const Sidenav = () => {
    const [closeNav, setCloseNav] =useState(false);
    console.log(allSideNav);
    
  return (
    
    <motion.div 
    initial={{ opacity: 0, scale: 0, }}
    animate={{ opacity: 1, scale: 1, }}
    transition={{ duration: 0.5 }}
     className={   `h-screen w-400px z-50 w-[30vw] bg-white border-2  top-0 left-0 flex flex-col absolute ${closeNav ? "hidden " : "w-80 opacity-10"} ` }>
        <div className='w-full h-16 absolute justify-center text-center  bg-amazon_blue text-white items-center flex px-10 gap-3 text-2xl ' ><CgProfile /> Hello, Your Name</div>
        <div className=' w-full pt-16 hover:overflow-scroll'>
         
            {allSideNav.map(item=>{  
                return (
                  <>
                    <h3 key={item.id} className='px-5 p-5 text-xl border-t-2 gap-5 font-bold' >{item.heading} </h3>
                    {item.info.map(item=>{
                      return (
                      <>
                        <h3 key={item.id} className='px-5 pb-5 cursor-pointer hover:underline '>{item.title}</h3>
                       
                        </>
                      )

                    })}               

                    </>
                )                     
              
               
        })}

</div>

        <div onClick={()=>{setCloseNav(true)}} className='flex absolute bg-slate-400 top-2  -right-9 text-4xl cursor-pointer ' ><IoMdClose /></div>
    </motion.div>
    
  )
  
}

export default Sidenav