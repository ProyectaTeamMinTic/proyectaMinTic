import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { GET_PROJECTSL_PROGRESS } from 'graphql/projects/queriesL';
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import PrivateRoute from "components/PrivateRoute";
import ReactLoading from 'react-loading';


const IndexProgressL = () => {
    const { _id } = useParams();
    const { data, error, loading } = useQuery(GET_PROJECTSL_PROGRESS, {
        variables: { _id },
    });
    console.log('datos proyectos con sus avances', data)
    useEffect(() => {
        if (error) {
            toast.error("Error consultando los avances del proyecto");
        }
    }, [error]);

    if (loading) return <div className="flex justify-center items-center">
        <ReactLoading type='spinningBubbles' color='#16baf9' height={250} width={150} />
    </div>
    return (
        <PrivateRoute roleList={['LIDER']}>
            <div className="w-full h-full items-center justify-center p-10">
                <div>
                    <Link to="/progresses/leader">
                        <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
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
                            <th>Creado por</th>
                            <th>Observaciones</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.Project.avances.map((a) => {
                            console.log('info observaciones', a.observaciones[0])
                            return (
                                <tr key={a._id}>
                                    <td>{a._id.slice(20)}</td>
                                    <td>{a.fecha}</td>
                                    <td>{a.descripcion}</td>
                                    <td>{a.creadoPor._id.slice(20)}</td>
                                    <td>{a.observaciones.map((o) => { return (<tr key={o._id}><span>{o.descripcion}</span></tr>) })}</td>
                                    {/* <td>{a.observaciones[0]}</td> */}
                                    <td>
                                        <Link to={`/progresses/addObservation/${a._id}`}>
                                            <i className='fas fa-plus text-green-600 hover:text-green-400 cursor-pointer' />
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </PrivateRoute>
    )
}

export default IndexProgressL
