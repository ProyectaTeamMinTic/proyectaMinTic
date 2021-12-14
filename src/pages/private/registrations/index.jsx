import React from "react";
import { Link } from "react-router-dom";
import PrivateRoute from "components/PrivateRoute";

const IndexRegistrations = () => {
  return (
    <PrivateRoute roleList={["LIDER"]}>
      <div>
        <div>
          <h3 className="text-center text-2xl font-bold text-gray-900">
            Inscripciones
          </h3>
          <h5 className="pl-3 font-bold text-gray-900">
            Lista de inscripciones Lider{" "}
          </h5>
        </div>
        <table className="tabla">
          <thead>
            <tr>
              <th>ID</th>
              <th>ID Proyecto</th>
              <th>ID Estudiante</th>
              <th>Estado de Inscripción</th>
              <th>F. Ingreso</th>
              <th>F. Egreso</th>
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
            </tr>
          </tbody>
        </table>
      </div>
    </PrivateRoute>
  );
};

export default IndexRegistrations;
