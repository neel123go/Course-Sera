import React from 'react';
import Mission from '../Mission/Mission';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <div className='px-20'>
                <Services />
            </div>
            <Mission />
        </>
    )
}

export default Home;