import React from 'react';
import BannerImg from '../../assets/Banner.jpg';

const Banner = () => {
    return (
        <div class="hero mt-5 bg-primary h-full w-full flex">
            <div class="hero-content flex-col lg:flex-row">
                <div>
                    <img src={BannerImg} className="w-4/5 mx-auto" />
                </div>
                <div>
                    <h1 class="text-5xl text-secondary font-bold">Start Your Career Now!</h1>
                    <p class="py-6 text-neutral">Learn Web Development, App Development & Game Development with Course Sera. Then earn your dream job or internship in any where in the world.</p>
                    <button class="btn btn-secondary">Enroll Now</button>
                </div>
            </div>
        </div>
    )
}

export default Banner;