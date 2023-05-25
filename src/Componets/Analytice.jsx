import React from 'react'

const Analytice = () => {
    return (
        <div className='w-full flex bg-white  py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4'>
                <img className='w-[500px] mx-auto my-4' src="https://wallpapers.com/images/high/best-laptop-with-extended-keyboard-racax57ggyd667rn.webp" alt="" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#134ce6] font-bold'>Lorem ipsum dolor sit amet.</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Lorem, ipsum dolor.</h1>
                    <p  className='md:text-[20px] font-thin text-gray-600 mt-3 py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas enim tempore maxime velit distinctio obcaecati quasi. Maiores repellendus accusantium tempore hic nam tempora.</p>
                    <button className=' text-[#00df9a] w-[200px]  font-medium  my-6  mx-auto rounded-md md:ml-0 py-3 bg-black  hover:bg-[#00df9a] hover:text-black'>Get starte</button>
                </div>
            </div>
        </div>
    )
}

export default Analytice
