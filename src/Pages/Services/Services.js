import React from 'react';
import Img1 from '../../assets/web-development.jpg';
import Img2 from '../../assets/app-development.jpg';
import Img3 from '../../assets/game-development.jpg';
import Img4 from '../../assets/dsfd.jpg';

const Services = () => {
    return (
        <div className='my-20 md:px-20 px-2'>
            <h1 className='text-4xl font-bold text-primary'>Our Courses / Services</h1>
            <div className="divider bg-secondary rounded-md h-1 w-1/3"></div>
            <div className='mt-16 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between gap-5'>

                <div className="bg-base-100 shadow-xl">
                    <figure><img src={Img1} className="w-[100%]" alt="Shoes" /></figure>
                    <div className="card-body p-8">
                        <h2 className="card-title">
                            Web Development course
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>In this course, you can learn all the things you need for Web Development. Dev-Ed is the instructor of this course.</p>
                        <div className="card-actions mt-5">
                            <div className="badge badge-outline">HTML</div>
                            <div className="badge badge-outline">CSS</div>
                            <div className="badge badge-outline">JavaScript</div>
                            <div className="badge badge-outline">ReactJS</div>
                            <div className="badge badge-outline">Firebase</div>
                            <div className="badge badge-outline">NodeJS</div>
                            <div className="badge badge-outline">MongoDB</div>
                        </div>
                        <div className='flex justify-end'>
                            <button className='bg-secondary px-5 text-lg rounded-lg py-1 mt-3'>Enroll Now</button>
                        </div>
                    </div>
                </div>

                <div className="bg-base-100 shadow-xl">
                    <figure><img src={Img2} className="w-[100%]" alt="Shoes" /></figure>
                    <div className="card-body p-8">
                        <h2 className="card-title">
                            App Development course
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>In this course, you can learn all the things you need for App Development. MR. Rick is the instructor of this course.</p>
                        <div className="card-actions mt-5">
                            <div className="badge badge-outline">Swift</div>
                            <div className="badge badge-outline">UIKit</div>
                            <div className="badge badge-outline">AutoLayout</div>
                            <div className="badge badge-outline">Storyboard</div>
                            <div className="badge badge-outline">Xcode</div>
                            <div className="badge badge-outline">MVC</div>
                            <div className="badge badge-outline">RESTfull API</div>
                        </div>
                        <div className='flex justify-end'>
                            <button className='bg-secondary px-5 text-lg rounded-lg py-1 mt-3'>Enroll Now</button>
                        </div>
                    </div>
                </div>



                <div className="bg-base-100 shadow-xl">
                    <figure><img src={Img3} className="w-[100%]" alt="Shoes" /></figure>
                    <div className="card-body p-8">
                        <h2 className="card-title">
                            Game Development course
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>In this course, you can learn all the things you need for Game Development. Neel Paul is the instructor of this course.</p>
                        <div className="card-actions mt-5">
                            <div className="badge badge-outline">C</div>
                            <div className="badge badge-outline">C++</div>
                            <div className="badge badge-outline">Java</div>
                            <div className="badge badge-outline">Unity</div>
                            <div className="badge badge-outline">Game Maker</div>
                            <div className="badge badge-outline">GMP</div>
                            <div className="badge badge-outline">Git</div>
                            <div className="badge badge-outline">GODOT</div>
                        </div>
                        <div className='flex justify-end'>
                            <button className='bg-secondary px-5 text-lg rounded-lg py-1 mt-3'>Enroll Now</button>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 shadow-xl">
                    <figure><img src={Img4} className="w-[100%]" alt="Shoes" /></figure>
                    <div className="card-body p-8">
                        <h2 className="card-title">
                            Web Design course 2022
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>In this course, you can learn all the things you need for Web Design. Ayoun Paul Neel is the instructor of this course.</p>
                        <div className="card-actions mt-5">
                            <div className="badge badge-outline">HTML</div>
                            <div className="badge badge-outline">CSS</div>
                            <div className="badge badge-outline">JavaScript</div>
                            <div className="badge badge-outline">Figma</div>
                            <div className="badge badge-outline">Bootstrap</div>
                            <div className="badge badge-outline">Tailwind CSS</div>
                            <div className="badge badge-outline">Responsive Design</div>
                        </div>
                        <div className='flex justify-end'>
                            <button className='bg-secondary px-5 text-lg rounded-lg py-1 mt-3'>Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;