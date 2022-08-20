import React from 'react';
import Mission from '../Mission/Mission';
import Services from '../Services/Services';
import SuccessfulStudents from '../SuccessfulStudents/SuccessfulStudents';

const Home = () => {
    return (
        <>
            <div className='px-20'>
                <Services />
            </div>
            <Mission />
            <div className='px-10'>
                <SuccessfulStudents />
            </div>
        </>
    )
}

export default Home;