import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import PrivateRoute from "components/PrivateRoute";
import ReactLoading from 'react-loading';
import { GET_PROJECTSE_PROGRESS } from 'graphql/projects/queriesE'
const IndexOneProgressE = () => {
    const { _id } = useParams();
    const { data, error, loading } = useQuery(GET_PROJECTSE_PROGRESS, {
        variables: { _id },
    });

    console.log('data E', data)

    useEffect(() => {
        if (error) {
            toast.error("Error consultando los avances del proyecto");
        }
    }, [error]);

    if (loading) return <div className="flex justify-center items-center">
        <ReactLoading type='spinningBubbles' color='#16baf9' height={250} width={150} />
    </div>
    return (
        <PrivateRoute roleList={['ESTUDIANTE']}>
            <div className="w-full h-full items-center justify-center p-10">
                <div>
                    <Link to="/progresses/student/">
                        <i className="fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900" />
                    </Link>
                    <h3 className="text-center text-2xl font-bold text-gray-900">
                        Avances
                    </h3>
                    <h5 className="pl-3 font-bold text-gray-900">
                        Avances del proyecto{" "}{_id}
                    </h5>
                </div>
                <table className="tabla">
                    <thead>
                        <tr>
                            <th>ID avance</th>
                            <th>Fecha</th>
                            <th>Descripcion</th>
                            {/* <th>Observaciones</th> */}
                            <th>Modificar Avance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.Project.avances.map((a) => {
                            return (
                                <tr key={a._id}>
                                    <td>{a._id.slice(20)}</td>
                                    <td>{a.fecha}</td>
                                    <td>{a.descripcion}</td>
                                    {/* <td>{a.observaciones.descripcion}</td> */}
                                    <td>
                                        <Link to={`/progresses/editOneProgressE/${a._id}`}>
                                            <i className='fas fa-edit text-green-600 hover:text-green-400 cursor-pointer' />
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="flex justify-center">
                    <span class="hidden sm:block">
                        <Link to={`/progresses/add/${_id}`}>
                            <button
                                type="button"
                                class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Registrar nuevo avance
                            </button>
                        </Link>
                    </span>
                </div>
            </div>
        </PrivateRoute>
    )
}

export default IndexOneProgressE
