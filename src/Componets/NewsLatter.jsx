import React from 'react'

const NewsLatter = () => {
    return (
        <div className='w-full py-16 text-white'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>what is type & trick to optimize your flow?</h1>
                    <p>sing up to newsLater and stay up to data.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input  className='p-3 flex w-full rounded-md text-black' type="email" plasholder="enter your email" />
                        <button className='bg-[#134ce6] text-black rounded-md font-medium w-[200px] ml-4 px-5 my-6 py-3'>Notfy me </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewsLatter
