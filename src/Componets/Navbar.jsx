import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import itech from '../assets/Group 620 (2).png'

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className=' flex justify-between items-center  h-24 max-w[1240px] m-auto px-4 text-white'>
            <img className='w-[10%]'  src={itech} alt="" />
            <ul className='md:flex hidden '>
                <li className='p-4'>home</li>
                <li className='p-4'>company</li>
                <li className='p-4'>resouruces</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contect</li>
                    <button onClick={handleNav} className='text-[#000000] w-[200px] mx-auto rounded-md py-3 bg-white hover:bg-white'>Get start</button>
            </ul>
            <div onClick={handleNav} className=' block  md:hidden'>
                {!nav ? <AiOutlineClose size={50}/> : <AiOutlineMenu size={50} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#021102] ease-in-out duration-500': 'fixed left-[-100%]'}>
                <h3 className='w-full text-3xl font-bold text-[#134ce6] m-4 '>Asadbekjon.</h3>
                <ul className='p-4 uppercase'>
                    <li className='p-4 border-b border-gray-600'>home</li>
                    <li className='p-4 border-b border-gray-600'>company</li>
                    <li className='p-4 border-b border-gray-600'>resouruces</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4 '>Contect</li>
                </ul>
            </div>
        </div>
    );
};
export default Navbar; 