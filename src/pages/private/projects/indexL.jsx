import ButtonLoading from "components/ButtonLoading";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// import { toast } from 'react-toastify';
import { GET_PROJECTSL } from "graphql/projects/queriesL";
import { useQuery, useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { useUser } from "context/userContext";

const IndexProjectsLeader = () => {
  const { userData } = useUser();
  const { userId, setUserId } = useState("");

  //   useEffect(() => {
  //     const userId = userData._id;
  //   }, [userData]);

  //   const { _id } = useParams()

  const { data, error, loading } = useQuery(GET_PROJECTSL, {
    userId: userData._id,
    variables: { _id: "61ae7ccd34a41349bf2a2b57" },
  });
  console.log("data servidor proyecta", userId);
  useEffect(() => {
    if (error) {
      toast.error("Error consultando los usuarios");
    }
  }, [error]);

  if (loading) return <div>Cargando....</div>;

  return (
    <div>
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
            <th>ID</th>
            <th>Nombre Proyecto</th>
            <th>Fase</th>
            <th>Estado</th>
            <th>Inicio</th>
            <th>Fin</th>
            <th>ID Proyecto</th>
            <th>Actualizar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              {/* <Link> */}
              {/* </Link> */}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center">
        <span class="hidden sm:block">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Registrar nuevo proyecto
          </button>
        </span>
      </div>
    </div>
  );
};

export default IndexProjectsLeader;
