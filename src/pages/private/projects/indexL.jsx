import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { GET_PROJECTSL } from "graphql/projects/queriesL";
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { useUser } from "context/userContext";
import PrivateRoute from "components/PrivateRoute";
import ReactLoading from 'react-loading';


const IndexProjectsLeader = () => {
  const { userData } = useUser();
  const id = userData._id;

  console.log("data servidor proyecta", id);
  const { data, error, loading } = useQuery(GET_PROJECTSL, {
    variables: { id },
  });
  console.log(data)
  useEffect(() => {
    if (error) {
      toast.error("Error consultando los Proyectos");
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
            Proyectos
          </h3>
          <h5 className="pl-3 font-bold text-gray-900">
            Proyectos a cargo del lider{" "}
          </h5>
        </div>
        <table className="tabla">
          <thead>
            <tr>
              <th>ID proyecto</th>
              <th>Nombre Proyecto</th>
              <th>Fase</th>
              <th>Estado</th>
              <th>Obj General</th>
              <th>Obj esp1</th>
              <th>Obj esp2</th>
              <th>Obj esp3</th>
              <th>Fecha inicio</th>
              <th>Fecha fin</th>
              <th>Presupuesto</th>
              <th>Actualizar</th>
            </tr>
          </thead>
          <tbody>
            {data.User.proyectos.map((p) => {
              return (
                < tr key={p._id}>
                  <td>{p._id.slice(20)}</td>
                  <td>{p.nombre}</td>
                  <td>{p.fase}</td>
                  <td>{p.estado}</td>
                  <td>{p.objetivoGeneral}</td>
                  <td>{p.objetivoEspecifico1}</td>
                  <td>{p.objetivoEspecifico2}</td>
                  <td>{p.objetivoEspecifico3}</td>
                  <td>{p.fechaInicio}</td>
                  <td>{p.fechaFin}</td>
                  <td>{p.presupuesto}</td>
                  <td>
                    <Link className='text-decoration: underline' to={`/projects/updateL/${p._id}`}>
                      actualizar
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-center">
          <span class="hidden sm:block">
            <Link to="/projects/add/">
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Registrar nuevo proyecto
              </button>
            </Link>
          </span>
        </div>
      </div>
    </PrivateRoute >
  );
};

export default IndexProjectsLeader;
