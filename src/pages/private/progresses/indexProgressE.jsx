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
            <div>
                <div>
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
                            <th>Observaciones</th>
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
                                    <td>{a.observaciones.descripcion}</td>
                                    <td>
                                        <Link to={`/progresses/editOneProgress/${a._id}`}>
                                            <i className='fas fa-edit text-green-600 hover:text-green-400 cursor-pointer' />
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </PrivateRoute>
    )
}

export default IndexOneProgressE
