import React from 'react'

const Landing = () => {
    return (
        <div className="mt-4 ml-3 pl-3 flex justify-around w-full media">
            <div className="py-28">
                <h1 className="text-6xl text-gray-600 mb-2.5 font-serif">Somos<span className="text-blue-400">Proyecta</span></h1>
                <h3 className="text-blue-400 tracking-wide font-normal">REACT'S DEVELOPER</h3>
                <div className="">
                    <p className="text-black leading-6 mt-3 mb-5 lg:flex-col">
                        En los grupos de investigación de las diferentes universidades se desarrollan <br />diversos tipos de proyectos de investigación y se detectan dificultades en el cumplimiento <br />del plan de trabajo de dicha investigación Mediante los reportes de avance del proyecto se controlará <br />el progreso parcial del proyecto de investigación. Nos proponemos plantear un modelo de sistema de información<br /> que soporte la gestión de proyectos de investigación y mejore los procesos.
                    </p>
                </div>
                <div className="social">
                    <a href="https://github.com/ProyectaTeamMinTic" ><i className="fab fa-github"></i></a>
                </div>
            </div>
            <div className="py-32">
                <h2 className="text-6xl text-blue-400 mb-2.5 font-serif">Tec<span className="text-gray-600">nologias</span></h2>
                <p>Estas son las tecnologias usadas por el equipo proyecta</p>
                <h5 className="text-blue-400">MERN STACK</h5>
                <div className="social">
                    <a href="#">
                        <i className="fab fa-react"></i>
                    </a>
                    <a href="#">
                        <img src="https://img.icons8.com/color/16/000000/graphql.png" />
                    </a>
                    <a href="#">
                        <i className="fab fa-node"></i>
                    </a>
                    <a href="#">
                        <img src="https://img.icons8.com/color/16/000000/mongodb.png" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Landing
