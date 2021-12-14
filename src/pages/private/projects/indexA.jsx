import DropDown from "components/Dropdown";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useQuery } from "@apollo/client";
import { GET_PROJECTSA } from "graphql/projects/queriesA";
import { Enum_EstadoProyecto } from "utils/enums";
import { UPDATE_STATE_PROJECT } from "graphql/projects/mutationsA";
import PrivateRoute from "components/PrivateRoute";

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

  if (loading) return <div>Cargando....</div>;

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
                      <td>{p.fase}</td>
                      {/* <td>{p.estado}</td> */}
                      <td>
                        {/* <DropDown
                            label=""
                            name="estado"
                            defaultValue={p.estado}
                            required={true}
                            options={Enum_EstadoProyecto}
                            /> */}
                      </td>
                      <td></td>
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
