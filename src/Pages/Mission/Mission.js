import React from 'react'

const Mission = () => {
    return (
        <div className='flex justify-between mt-20 h-[80vh] bg-primary'>
            <div className='w-[50%] flex justify-center items-center flex-col'>
                <h1 className='text-secondary text-5xl font-bold'>Our Mission</h1>
                <p className='text-accent w-3/4 mt-10 text-center'>Hey! We are from Course Sera. We provides human best courses with best prices for update their skills. Top 50 leading universities is our partners. Our mission to offer a range of learning opportunities—from hands-on projects and courses to job-ready certificates and degree programs for humans.</p>
            </div>

            <div className='w-[50%] flex justify-center items-center'>
                <iframe className='w-full h-full py-28 px-16' src="https://www.youtube-nocookie.com/embed/HGSR3FDVkkQ">
                </iframe>
            </div>
        </div>
    )
}

export default Mission;