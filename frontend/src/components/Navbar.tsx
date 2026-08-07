import React from 'react'
import { Button } from './ui/button'

export const Navbar = () => {
  return (
    <div className='ml:10 md:ml-20 flex flex-row items-center justify-between h-16 px-4 py-2 border-b-2 border-black overflow-hidden'>
        <img src="logo.svg" alt="Logo" className=' h-23 w-23 md:h-30 md:w-30 ml-5' />
        {/* <Button className='px-4 py-2 h-10 md:h-15 w-25 md:w-35 font-sm md:font-base'>Buy Now</Button> */}
    </div>
  )
}
