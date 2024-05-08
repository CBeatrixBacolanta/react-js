import React from 'react';

function Header() {
  return (
    <div className='absolute w-screen h-16 bg-pink-400 font-sans'>
        <div className='flex justify-center font-bold text-white w-screen'>
            <h2 className='flex mr-20 ml-20 mt-5 text-sm'>Home</h2>
            <h2 className='flex mr-20 ml-20 mt-5 text-sm'>About Us</h2>
            <h2 className='flex mr-20 ml-20 mt-5 text-sm'>Contact Us</h2>
        </div>
    </div>
  )
};

export default Header;