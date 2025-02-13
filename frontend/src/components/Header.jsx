import React from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className='h-16 shadow-md'>
    <div className="h-full container mx-auto flex items-center px-4 justify-between">
    <div className=''>
      <Logo w={90} h={50} />    
</div>
<div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
<input type="text" placeholder='search product here...' className='w-full outline-none pl-2'/>
<div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
<GrSearch />
</div>
</div>

<div className='flex items-center gap-4 '>
  
<div className='text-3xl cursor-pointer' >
  {/* relative flex justify-center' onClick={()=>setMenuDisplay(preve => !preve)}> */}
<FaRegCircleUser />
</div>

<div className='text-2xl relative'>
<span><FaShoppingCart/>  </span>
  <div className='bg-red-600 text-white w-5 p-.5 flex items-center justify-center rounded-full absolute -top-2 -right-2'>
    <p className='text-xs'>0</p>
  </div>

  </div>
<div> 
  <button className='px-3 py-1 rounndend-full text-white bg-red-600'>Login</button>
</div>

</div>
    </div>
  </header>


  )
}




export default Header
