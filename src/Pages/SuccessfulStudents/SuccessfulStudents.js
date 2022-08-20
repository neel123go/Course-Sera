import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const SuccessfulStudents = () => {
    return (
        <div className="py-20">
            <div className="px-10">
                <h1 className='text-4xl font-bold text-primary'>Our Successful Students</h1>
                <div className="divider bg-secondary rounded-md h-1 w-1/3"></div>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div class="w-96 bg-base-100 border border-secondary shadow-xl">
                        <div class="card-body">
                            <div className="flex items-center">
                                <div class="avatar">
                                    <div class="w-[65px] h-[65px] rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                                        <img src="https://randomuser.me/api/portraits/men/59.jpg" />
                                    </div>
                                </div>
                                <div className="ml-5">
                                    <h2 className="text-2xl">Pink Sweet$</h2>
                                    <p className="text-primary mr-12">Freelancer</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-primary text-md text-[16px] mt-5">This is a best course website i ever found in my life. Best of luck, Course Sera. Go ahead..</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="w-96 bg-base-100 border border-secondary shadow-xl">
                        <div class="card-body">
                            <div className="flex items-center">
                                <div class="avatar">
                                    <div class="w-[65px] h-[65px] rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                                        <img src="https://randomuser.me/api/portraits/men/89.jpg" />
                                    </div>
                                </div>
                                <div className="ml-5">
                                    <h2 className="text-2xl">Zip Hawola</h2>
                                    <p className="text-primary mr-[-20px]">Jr. Web Developer</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-primary text-md text-[16px] mt-5">If you want a serious web developer I recommended you to close your eye & enrolled into Course Sera course.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="w-96 bg-base-100 border border-secondary shadow-xl">
                        <div class="card-body">
                            <div className="flex items-center">
                                <div class="avatar">
                                    <div class="w-[65px] h-[65px] rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                                        <img src="https://randomuser.me/api/portraits/women/74.jpg" />
                                    </div>
                                </div>
                                <div className="ml-5">
                                    <h2 className="text-2xl">Oliviya Rondrogo</h2>
                                    <p className="text-primary mr-16">Web Designer</p>
                                </div>
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