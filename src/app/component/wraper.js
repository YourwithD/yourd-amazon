"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import Hader from './hader'
import Footer from './footer'

const Wrapper = ({children}) => {
  return (
    <>
    <Provider store={store}>
    <SessionProvider >
      <Hader />
     {children}
     <Footer />
    </SessionProvider>    
   </Provider>
    </>
  )
}

export default Wrapper
