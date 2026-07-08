import React from 'react'
import { Button } from './ui/button'

export const Navbar = () => {
  return (
    <div className='fixed left-20 flex flex-row items-center justify-between w-[calc(100%-5rem)] h-16 px-4 overflow-hidden'>
        <img src="logo.svg" alt="Logo" className='h-30 w-30 ml-5' />
        <Button className='px-4 py-2 h-15 w-35'>Buy Now</Button>
    </div>
  )
}
