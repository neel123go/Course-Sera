import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="bg-primary h-auto grid md:grid-cols-2 grid-cols-1 p-0 md:p-10 text-accent">
                <div className='w-[100%] md:p-20 p-5'>
                    <h2 className='text-3xl'>Course Sera</h2>
                    <p>Grow your skill with course sera</p>
                    <h1 className='text-5xl mt-20'>Join The Success!</h1>
                    <p className='border-2 border-accent mt-5 py-5 text-xl cursor-pointer text-center px-10'>Enroll Now</p>
                </div>
                <div className="border-l-4 border-accent w-[100%] text-accent p-20 md:p-10">
                    <h3 className='text-2xl ml-[-10px]'>Info</h3>
                    <p className='text-lg mt-1'>course@sera.com</p>
                    <p className='text-lg'>01723937293</p>

                    <h3 className='text-2xl ml-[-10px] mt-10'>Address</h3>
                    <p className='text-lg mt-1'>Meghna C-31, Dariapara</p>
                    <p className='text-lg'>Sylhet, Bangladesh</p>

                    <h3 className='text-2xl ml-[-10px] mt-10'>Follow</h3>
                    <p className='text-lg mt-1'>Facebook</p>
                    <p className='text-lg'>Instagram</p>
                    <p className='text-lg'>Twitter</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;