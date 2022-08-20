import React from 'react';
import Mission from '../Mission/Mission';
import Services from '../Services/Services';
import SuccessfulStudents from '../SuccessfulStudents/SuccessfulStudents';

const Home = () => {
    return (
        <>
            <div className='md:px-20 px-2'>
                <Services />
            </div>
            <Mission />
            <div className='md:px-10 px-2'>
                <SuccessfulStudents />
            </div>
        </>
    )
}

export default Home;