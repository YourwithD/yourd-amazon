import React from 'react'
import Banar from './component/banar'
import Product from './component/product'

const App = () => {
  return (
    <main >
        <Banar  />
        <div className='w-full sm:-mt-40  '>
        <Product />
        </div>
    </main>
  )
}

export default App
