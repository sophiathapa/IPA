import React from 'react'
import { Button } from './ui/button'

export const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-between w-full h-16 px-4 overflow-hidden'>
        <img src="logo.svg" alt="Logo" className='h-30 w-30 ml-10' />
        <Button className='px-4 py-2 h-14 w-30'>Buy Now</Button>
    </div>
  )
}
