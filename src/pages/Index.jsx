import { Link } from "@material-ui/core";
import React from "react";

const Index = () => {
  return (
    <div>
      <div className="grid gap-4 grid-cols-2 justify-items-stretch">
        <div className="pb-20 pt-10">
          <Link>
            <center>
              <i className="fas fa-users fa-7x text-blue-500 hover:text-purple-500 text-decoration:none" />
              <h1 className="text-blue-500 hover:text-purple-500 text-decoration:none">
                Usuarios
              </h1>
            </center>
          </Link>
        </div>
        <div className="pb-20 pt-10">
          <Link>
            <center>
              <i className="fas fa-file-invoice fa-7x text-blue-500 hover:text-purple-500" />
              <h1 className="text-blue-500 hover:text-purple-500">Proyectos</h1>
            </center>
          </Link>
        </div>
        <div className="pb-20 pt-10">
          <Link>
            <center>
              <i className="fas fa-user-plus fa-7x text-blue-500 hover:text-purple-500" />
              <h1 className="text-blue-500 hover:text-purple-500">
                Inscripciones
              </h1>
            </center>
          </Link>
        </div>
        <div className="pb-20 pt-10">
          <Link>
            <center>
              <i className="fa-tasks fas fa-list-check fa-7x text-blue-500 hover:text-purple-500" />
              <h1 className="text-blue-500 hover:text-purple-500">Avances</h1>
            </center>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
