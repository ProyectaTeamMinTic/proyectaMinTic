import DropDown from "components/Dropdown";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useQuery } from "@apollo/client";
import { GET_PROJECTSA } from "graphql/projects/queriesA";
import { Enum_EstadoProyecto } from "utils/enums";
import { UPDATE_STATE_PROJECT } from "graphql/projects/mutationsA";
<<<<<<< HEAD
import PrivateRoute from "components/PrivateRoute";
=======
import PrivateRoute from 'components/PrivateRoute';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';


>>>>>>> 024b380b764113d702465ef17557196d813d60a5

const IndexProjectsAdmin = () => {
  const { data, error, loading } = useQuery(GET_PROJECTSA);

  useEffect(() => {
    console.log("data proyectos", data);
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error("Error consultando los proyectos");
    }
  }, [error]);

  //FALTA FUNCIONALIDAD LINKS(VER) Y DROPDOWN(estado)

  if (loading) return <div className="flex justify-center items-center">
    <ReactLoading type='spinningBubbles' color='#16baf9' height={250} width={150} />
  </div>

  return (
    <PrivateRoute roleList={["ADMINISTRADOR"]}>
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
                <th>Detalle</th>
              </tr>
            </thead>
            <tbody>
              {/* {data && data.Users ? ( */}
              <>
                {data.Projects.map((p) => {
                  return (
                    <tr key={p._id}>
                      <td>{p.nombre}</td>
                      <td>{p.fase}
                        <Link to={`/projects/updatePhaseA/${p._id}`}>
                          <i className='fas fa-pen text-green-600 hover:text-green-400 cursor-pointer' />
                        </Link>
                      </td>
                      <td>{p.estado}
                        <Link to={`/projects/updateStatusA/${p._id}`}>
                          <i className='fas fa-pen text-green-600 hover:text-green-400 cursor-pointer' />
                        </Link>
                      </td>
                      <td>
                        {/* <Link>ver</Link> */}
                        ver
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
  );
};

export default IndexProjectsAdmin;
