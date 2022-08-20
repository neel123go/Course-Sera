import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const SuccessfulStudents = () => {
    return (
        <div className="pb-20 md:px-10 px-2">
            <div className="md:px-10 px-2">
                <h1 className='md:text-4xl text-4xl font-bold text-primary'>Our Successful Students</h1>
                <div className="divider bg-secondary rounded-md h-1 w-1/3"></div>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                slidesPerGroup={3}
                breakpoints={{
                    100: {
                        slidesPerView: 1,
                        spaceBetween: 80,
                        slidesPerGroup: 1,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                        slidesPerGroup: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                        slidesPerGroup: 3,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="w-96 h-82 bg-base-100 border border-secondary shadow-xl">
                        <div className="card-body">
                            <div className="text-center">
                                <div className="avatar">
                                    <div className="w-[65px] h-[65px] rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                                        <img src="https://randomuser.me/api/portraits/men/59.jpg" />
                                    </div>
                                </div>
                                <h2 className="md:text-2xl text-lg">Pink Sweet$</h2>
                                <p className="text-primary">Freelancer</p>
                            </div>
                            <div>
                                <p className="text-primary text-md text-[16px] mt-5">This is a best course website i ever found in my life. Very easy to use. Best of luck, Course Sera. Go ahead..</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-96 h-82 bg-base-100 border border-secondary shadow-xl">
                        <div className="card-body">
                            <div className="text-center">
                                <div className="avatar">
                                    <div className="w-[65px] h-[65px] rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                                        <img src="https://randomuser.me/api/portraits/men/89.jpg" />
                                    </div>
                                </div>
                                <h2 className="md:text-2xl text-lg">Zip Hawo</h2>
                                <p className="text-primary">web developer</p>
                            </div>
                            <div>
                                <p className="text-primary text-md text-[16px] mt-5">If you want a serious web developer I recommended you to close your eye & enrolled into Course Sera course.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-96 h-82 bg-base-100 border border-secondary shadow-xl">
                        <div className="card-body">
                            <div className="text-center">
                                <div className="avatar">
                                    <div className="w-[65px] h-[65px] rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                                        <img src="https://randomuser.me/api/portraits/women/74.jpg" />
                                    </div>
                                </div>
                                <h2 className="md:text-2xl text-lg">Oliviya</h2>
                                <p className="text-primary">Web Designer</p>
                            </div>
                            <div>
                                <p className="text-primary text-md text-[16px] mt-5">Thank you Course Sera for introduced me this another world of web designing. Take love form me ❤️</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SuccessfulStudents;