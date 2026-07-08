import { Menu, Search } from 'lucide-react';

export const Sidebar = () => {
  return (
    <div className='fixed flex flex-col items-center pt-15 py-10 gap-10 items-center w-20 border-r-2 border-black min-h-screen'>
        <Menu />
        <Search />
    </div>
  )
}
