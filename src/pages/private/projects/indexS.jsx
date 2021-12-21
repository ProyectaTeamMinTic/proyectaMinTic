import PrivateRoute from 'components/PrivateRoute'
import { GET_PROJECTSE } from "graphql/projects/queriesE";
import React, { useEffect } from 'react'
import { toast } from "react-toastify";
import ReactLoading from 'react-loading';
import { useQuery, useMutation } from "@apollo/client";
import { CREATE_REGISTRATION } from "graphql/registrations/mutationsE"
import { useUser } from "context/userContext";

const IndexProjectsStudent = () => {
    const { userData } = useUser();
    const estudiante = userData._id;

    const { data, error, loading } = useQuery(GET_PROJECTSE);

    const [createRegistration, { data: mutationData, loading: mutationLoading, error: mutationError, }] = useMutation(CREATE_REGISTRATION);

    const ejecutarMutacion = (_id) => {
        const proyecto = _id;
        createRegistration({
            variables: { proyecto, estudiante },
        });
    };

    useEffect(() => {
        if (mutationData) {
            toast.success('Solicitud de inscripcion creada con exito');
        }
        if (mutationError) {
            toast.error('Error creando la solicitud de inscripcion');
        }
    }, [mutationData, mutationError]);

    useEffect(() => {
        if (error) {
            toast.error("Error consultando los proyectos");
        }
    }, [error]);

    //FALTA FUNCIONALIDAD DEL BOTON INSCRIPCION

    if (loading) return <div className="flex justify-center items-center">
        <ReactLoading type='spinningBubbles' color='#16baf9' height={250} width={150} />
    </div>
    return (
        <PrivateRoute roleList={['ESTUDIANTE']}>
            <div>
                <div>
                    <div>
                        <h3 className="text-center text-2xl font-bold text-gray-900">
                            Proyectos
                        </h3>
                        <h5 className="pl-3 font-bold text-gray-900">
                            Listas de proyectos registrados{" "}
                        </h5>
                    </div>
                    <table className="tabla">
                        <thead>
                            <tr>
                                <th>Nombre Proyecto</th>
                                <th>Fase proyecto</th>
                                <th>Estado</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {data && data.Users ? ( */}
                            <>
                                {data.Projects.map((p) => {
                                    return (
                                        <tr key={p._id}>
                                            <td>{p.nombre}</td>
                                            <td>{p.fase}</td>
                                            <td>{p.estado}</td>
                                            <td>
                                                <button
                                                    onClick={() => ejecutarMutacion(p._id)}
                                                >Solicitar inscripcion</button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </>
                            {/* ) : (
              <div>No autorizado</div>
            )} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </PrivateRoute>
    )
}

export default IndexProjectsStudent
