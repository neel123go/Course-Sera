import React from 'react';
import Banner from '../Banner/Banner';
import Mission from '../Mission/Mission';
import Services from '../Services/Services';
import SuccessfulStudents from '../SuccessfulStudents/SuccessfulStudents';

const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <Mission />
            <SuccessfulStudents />
        </>
    )
}

export default Home;