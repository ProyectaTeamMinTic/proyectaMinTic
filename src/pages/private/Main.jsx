import { Link } from "@material-ui/core";
import React from "react";

const Index = () => {
  return (
    <div>
      <h1 className="text-center italic antialiased pl-3 font-bold text-gray-900 text-2xl">
        Sistema de gestión de Proyectos Principal
      </h1>
      <div className="grid gap-4 grid-cols-2 justify-items-stretch">
        <div className="pb-20 pt-10">
          <Link style={{ textDecoration: "none" }}>
            <center>
              <i className="fas fa-users fa-7x text-blue-500 hover:text-purple-500 no-underline" />
              <h1 className="text-blue-500 hover:text-purple-500 no-underline">
                Usuarios
              </h1>
            </center>
          </Link>
          <p className="text-center">
            Modulo para consultar, crear y editar usuarios
          </p>
        </div>
        <div className="pb-20 pt-10">
          <Link style={{ textDecoration: "none" }}>
            <center>
              <i className="fas fa-file-invoice fa-7x text-blue-500 hover:text-purple-500" />
              <h1 className="text-blue-500 hover:text-purple-500">Proyectos</h1>
            </center>
          </Link>
          <p className="text-center">
            Modulo para consultar, crear y editar proyectos
          </p>
        </div>
        <div className="pb-22 pt-10">
          <Link style={{ textDecoration: "none" }}>
            <center>
              <i className="fas fa-user-plus fa-7x text-blue-500 hover:text-purple-500" />
              <h1 className="text-center text-blue-500 hover:text-purple-500">
                Inscripciones
              </h1>
            </center>
          </Link>
          <p className="text-center">
            Modulo para consultar y autorizar inscripciones
          </p>
        </div>
        <div className="pb-20 pt-10">
          <Link style={{ textDecoration: "none" }}>
            <center>
              <i className="fa-tasks fas fa-list-check fa-7x text-blue-500 hover:text-purple-500" />
              <h1 className="text-center text-blue-500 hover:text-purple-500">
                Avances
              </h1>
            </center>
          </Link>
          <p className="text-center">
            Modulo para crear avances y agregar observaciones
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
