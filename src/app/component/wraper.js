"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import Hader from './hader'
import Footer from './footer'
import { SessionContext } from 'next-auth/react'

const Wrapper = ({children, session, ...pageProps}) => {
  return (
    <>
    <Provider store={store}>
    <SessionProvider session={session} >
      <Hader />
     {children}
     <Footer />
    </SessionProvider>    
   </Provider>
    </>
  )
}

export default Wrapper
