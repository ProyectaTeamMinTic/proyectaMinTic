import React, { useEffect } from 'react'
import PrivateRoute from 'components/PrivateRoute';
import { toast } from "react-toastify";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_REGISTRATIONS } from "graphql/registrations/queriesL";
import ReactLoading from 'react-loading';
const IndexL = () => {
    const { data, error, loading } = useQuery(GET_REGISTRATIONS);
    console.log('datos inscripciones lider', data)

    useEffect(() => {
        if (error) {
            toast.error("Error consultando las inscripciones");
        }
    }, [error]);

    if (loading) return <div className="flex justify-center items-center">
        <ReactLoading type='spinningBubbles' color='#16baf9' height={250} width={150} />
    </div>
    return (
        <PrivateRoute roleList={['LIDER']}>
            <div>
                <div><h3 className="text-center text-2xl font-bold text-gray-900">Inscripciones</h3>
                    <h5 className="pl-3 font-bold text-gray-900">
                        Inscripciones a cargo del lider{" "}
                    </h5>
                </div>
                <tabla className="tabla">
                    <thead>
                        <tr>
                            <th>ID inscripcion</th>
                            <th>ID proyecto</th>
                            <th>ID estudiante</th>
                            <th>Estado</th>
                            <th>Fecha Ingreso</th>
                            <th>Fecha Egreso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.Registrations.map((r) => {
                            return (
                                <tr key={r._id}>
                                    <td>{r._id}</td>
                                    <td>{r.proyecto._id}</td>
                                    <td>{r.estudiante._id}</td>
                                    <td>{r.estado}</td>
                                    <td>{r.fechaIngreso}</td>
                                    <td>{r.fechaEgreso}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </tabla>
            </div>
        </PrivateRoute>
    )
}

export default IndexL
