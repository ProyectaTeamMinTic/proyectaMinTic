import React from 'react'
import logo from 'media/logo_blue.png'

const About = () => {
    return (
        <div className='grid grid-cols-4 grid-rows-4 gap-5 py-10'>
            <figure className="col-start-1 col-end-4 col-span-3 md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={logo} alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4 ">
                    <figcaption className="font-medium">
                        <div className="text-sky-500">
                            Franklin Zapata
                        </div>
                        <div className="text-gray-700">
                            Software Engineer, Medellín
                        </div>
                        <div className='social'>
                            <a href="https://github.com/FranklinZ12">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="www.linkedin.com/in/franklin-zapata">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </figcaption>
                </div>
            </figure>
            <figure className="col-end-5 col-span-3 md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={logo} alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <figcaption className="font-medium">
                        <div className="text-sky-500">
                            Mabel Diaz
                        </div>
                        <div className="text-gray-700">
                            STACK MERN & GRAPHQL, Medellín
                        </div>
                        <div className='social'>
                            <a href="https://github.com/mabeldiaz">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/mabel-diaz-beltran-pmp%C2%AE-bab3489/">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </figcaption>
                </div>
            </figure>
            <figure className="col-start-1 col-end-4 col-span-3 md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={logo} alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <figcaption className="font-medium">
                        <div className="text-sky-500">
                            Mauricio Cendales
                        </div>
                        <div className="text-gray-700">
                            STACK MERN & GRAPHQL, Colombia
                        </div>
                        <div className='social'>
                            <a href="https://github.com/malexcdl">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/mauricio-cendales-b0b82569/">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </figcaption>
                </div>
            </figure>
            <figure className="col-end-5 col-span-3 md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={logo} alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <figcaption className="font-medium">
                        <div className="text-sky-500">
                            Dahiana
                        </div>
                        <div className="text-gray-700">
                            STACK MERN GRAPHQL Medellin
                        </div>
                        <div className='social'>
                            <a href="https://github.com/DahianaP11">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/dahiana-pel%C3%A1ez-g%C3%B3mez-42a144158/">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </figcaption>
                </div>
            </figure>
            <figure className="col-start-1 col-end-4 col-span-3 md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={logo} alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <figcaption className="font-medium">
                        <div className="text-sky-500">
                            Carlos
                        </div>
                        <div className="text-gray-700">
                            STACK MERN & GRAPHQL, Medellin
                        </div>
                        <div className='social'>
                            <a href="https://github.com/ccamargo8">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/ccamargo8/">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}

export default About
