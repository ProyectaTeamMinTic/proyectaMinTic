import PrivateRoute from 'components/PrivateRoute'
import React, { useEffect } from 'react'
import { GET_REGISTRATIONSE } from 'graphql/registrations/queriesE';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { useUser } from "context/userContext";
import { toast } from 'react-toastify';


const IndexProgressStudent = () => {
    const { userData } = useUser();
    const _id = userData._id;
    const { data, error, loading } = useQuery(GET_REGISTRATIONSE, {
        variables: { _id },
    });
    useEffect(() => {
        console.log('data servidor', data);
    }, [data]);
    useEffect(() => {
        if (error) {
            toast.error('Error consultando los proyectos')
        }
    }, [error]);
    if (loading) return <div className="flex justify-center items-center">
        <ReactLoading type='spinningBubbles' color='#16baf9' height={250} width={150} />
    </div>
    return (
        <PrivateRoute roleList={['ESTUDIANTE']}>
            <div className="w-full h-full items-center justify-center p-10">
                <div>
                    <h3 className="text-center text-2xl font-bold text-gray-900">
                        Avances
                    </h3>
                    <h5 className="pl-3 font-bold text-gray-900">
                        Proyectos Inscritos{" "}
                    </h5>
                </div>
                <tabla className="tabla">
                    <thead>
                        <tr>
                            <th>ID proyecto</th>
                            {/* <th>Nombre proyecto</th> */}
                            <th>Agregar o editar avances</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.User.inscripciones.map((i) => {
                            return (
                                <tr key={i._id}>
                                    <td>{i.proyecto._id.slice(20)}</td>
                                    {/* <td>{i.proyecto.nombre}</td> */}
                                    <td>
                                        <Link to={`/progresses/indexOneProgressE/${i.proyecto._id}`}>
                                            <i className='fas fa-tasks text-green-600 hover:text-green-400 cursor-pointer' />
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </tabla>
            </div>
        </PrivateRoute>
    )
}

export default IndexProgressStudent
