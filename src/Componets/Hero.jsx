import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
    <div className='max-w-[800px]mt-[-69px] w-full  h-screen  mx-auto text-center flex flex-col justify-center '>
        <p  className='uppercase text-[#001adf] font-bold p-2'>Lorem, ipsum adipisicing elit. Vero, ex.</p>
        <h1 className='md:text-7xl sm:text-6xl text-5xl font-bold md:py-4  '>Lorem  sit amet consectetur.</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold '>
            Lorem  amet  </p>
            <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold ml-6 md:pl-4 pl-2'
            strings={[" BTN"," CSS", " TYPESCRIPT",'Lorem']}
            typeSpeed={220}
            backSpeed={140}
            loop
            />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-600 mt-3 py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nemo provident dicta consectetur animi, ducimus ratione incidunt consequuntur ea facilis!</p>
        <button className='bg-[#00df9a] w-[200px] mx-auto rounded-md py-3 text-black  hover:bg-[#067a46] hover:text-white'>Get starte</button>
    </div>
    </div>
  )
}

export default Hero;
