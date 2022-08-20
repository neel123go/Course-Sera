import React from 'react'

const Mission = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 mt-20 bg-primary lg:pt-0 pt-20'>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='text-secondary text-5xl font-bold'>Our Mission</h1>
                <p className='text-accent w-3/4 mt-10 text-center'>Hey! We are from Course Sera. We provides human best courses with best prices for update their skills. Top 50 leading universities is our partners. Our mission to offer a range of learning opportunities—from hands-on projects and courses to job-ready certificates and degree programs for humans.</p>
            </div>

            <div className='flex justify-center items-center'>
                <iframe className='w-full md:h-[600px] h-[300px] lg:py-28 md:py-20 py-10 lg:px-16 md:px-16 px-2' src="https://www.youtube-nocookie.com/embed/HGSR3FDVkkQ">
                </iframe>
            </div>
        </div>
    )
}

export default Mission;