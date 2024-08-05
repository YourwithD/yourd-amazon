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
     className={   `h-screen w-80  z-50   bg-white border-2  top-0 left-0 flex flex-col absolute ${closeNav ? "hidden " : "w-80 opacity-10"} ` }>
        <div className='w-full h-10 bg-amazon_blue text-white items-center flex px-10 gap-3 text-2xl ' ><CgProfile /> Hello, Raja</div>
        <div>
         {/*    <h2 className='px-5 text-xl font-bold'>head</h2>
            <ul>
                <li className='flex items-center justify-between px-5 cursor-pointer hover:bg-slate-100'>home <span>c</span> </li>
                <li className='flex items-center justify-between px-5 cursor-pointer hover:bg-slate-100'>home <span>c</span> </li>
            </ul>*/}
         
            {allSideNav.map(item=>{  
                return (
                    <h3 key={item.id} className='px-5 bg-black text-xl font-bold'>{item.heading} heading </h3>
                )                     
              
               
        })}

</div>

        <div onClick={()=>{setCloseNav(true)}} className='flex absolute top-2 -right-10 text-4xl cursor-pointer ' ><IoMdClose /></div>
    </motion.div>
    
  )
  
}

export default Sidenav

{/* <div className='flex items-center justify-between px-5 cursor-pointer hover:bg-slate-100'> <span>{item.info.title}</span> <IoIosArrowForward /></div> */}