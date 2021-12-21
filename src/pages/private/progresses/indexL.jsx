import React, { useEffect } from 'react'
import { GET_PROGRESSL } from 'graphql/progresses/queriesL'
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import PrivateRoute from 'components/PrivateRoute';
import ReactLoading from 'react-loading';
import { useUser } from "context/userContext";


const IndexProgressLeader = () => {
    const { userData } = useUser();
    const id = userData._id;
    const { data, error, loading } = useQuery(GET_PROGRESSL, {
        variables: { id },
    });
    console.log('datos proyectos', data)

    useEffect(() => {
        console.log('data servidor', data);
    }, [data]);
    useEffect(() => {
        if (error) {
            toast.error('Error consultando los proyectos');
        }
    }, [error]);
    if (loading) return <div className="flex justify-center items-center">
        <ReactLoading type='spinningBubbles' color='#16baf9' height={250} width={150} />
    </div>
    return (
        <PrivateRoute roleList={['LIDER']}>
            <div className="w-full h-full items-center justify-center p-10">
                <div>
                    <h3 className="text-center text-2xl font-bold text-gray-900">
                        Avances
                    </h3>
                    <h5 className="pl-3 font-bold text-gray-900">
                        Avances registrados en la plataforma{" "}
                    </h5>
                </div>
                <table className="tabla">
                    <thead>
                        <tr>
                            <th>ID proyecto</th>
                            <th>Nombre proyecto</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.User.proyectos.map((p) => {
                            return (
                                <tr key={p._id}>
                                    <td>{p._id}</td>
                                    <td>{p.nombre}</td>
                                    <td>
                                        <Link to={`/progresses/indexProgressL/${p._id}`}>
                                            Ver avances
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

export default IndexProgressLeader
