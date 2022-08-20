import React from 'react';
import Img1 from '../../assets/web-development.jpg';
import Img2 from '../../assets/app-development.jpg';
import Img3 from '../../assets/game-development.jpg';
import Bounce from 'react-reveal/Bounce';

const Services = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-4xl font-bold text-primary'>Our Courses / Services</h1>
            <div className="divider bg-secondary rounded-md h-1 w-1/3"></div>
            <div className='mt-16 flex justify-between'>
                <div class="w-[60vh] bg-base-100 shadow-xl">
                    <Bounce bottom>
                        <figure><img src={Img1} className="w-[100%]" alt="Shoes" /></figure>
                        <div class="card-body p-8">
                            <h2 class="card-title">
                                Web Development course
                                <div class="badge badge-secondary">NEW</div>
                            </h2>
                            <p>In this course, you can learn all the things you need for Web Development. Dev-Ed is the instructor of this course.</p>
                            <div class="card-actions mt-5">
                                <div class="badge badge-outline">HTML</div>
                                <div class="badge badge-outline">CSS</div>
                                <div class="badge badge-outline">JavaScript</div>
                                <div class="badge badge-outline">ReactJS</div>
                                <div class="badge badge-outline">Firebase</div>
                                <div class="badge badge-outline">NodeJS</div>
                                <div class="badge badge-outline">MongoDB</div>
                            </div>
                            <div className='flex justify-end'>
                                <button className='bg-secondary px-5 text-lg rounded-lg py-1 mt-3'>Enroll Now</button>
                            </div>
                        </div>
                    </Bounce>
                </div>

                <div class="w-[60vh] bg-base-100 shadow-xl">
                    <Bounce bottom>
                        <figure><img src={Img2} className="w-[100%]" alt="Shoes" /></figure>
                        <div class="card-body p-8">
                            <h2 class="card-title">
                                Web Development course
                                <div class="badge badge-secondary">NEW</div>
                            </h2>
                            <p>In this course, you can learn all the things you need for Web Development. Dev-Ed is the instructor of this course.</p>
                            <div class="card-actions mt-5">
                                <div class="badge badge-outline">HTML</div>
                                <div class="badge badge-outline">CSS</div>
                                <div class="badge badge-outline">JavaScript</div>
                                <div class="badge badge-outline">ReactJS</div>
                                <div class="badge badge-outline">Firebase</div>
                                <div class="badge badge-outline">NodeJS</div>
                                <div class="badge badge-outline">MongoDB</div>
                            </div>
                            <div className='flex justify-end'>
                                <button className='bg-secondary px-5 text-lg rounded-lg py-1 mt-3'>Enroll Now</button>
                            </div>
                        </div>
                    </Bounce>
                </div>



                <div class="w-[60vh] bg-base-100 shadow-xl">
                    <Bounce bottom>
                        <figure><img src={Img3} className="w-[100%]" alt="Shoes" /></figure>
                        <div class="card-body p-8">
                            <h2 class="card-title">
                                Web Development course
                                <div class="badge badge-secondary">NEW</div>
                            </h2>
                            <p>In this course, you can learn all the things you need for Web Development. Dev-Ed is the instructor of this course.</p>
                            <div class="card-actions mt-5">
                                <div class="badge badge-outline">HTML</div>
                                <div class="badge badge-outline">CSS</div>
                                <div class="badge badge-outline">JavaScript</div>
                                <div class="badge badge-outline">ReactJS</div>
                                <div class="badge badge-outline">Firebase</div>
                                <div class="badge badge-outline">NodeJS</div>
                                <div class="badge badge-outline">MongoDB</div>
                            </div>
                            <div className='flex justify-end'>
                                <button className='bg-secondary px-5 text-lg rounded-lg py-1 mt-3'>Enroll Now</button>
                            </div>
                        </div>
                    </Bounce>
                </div>
            </div>
        </div>
    )
}

export default Services;