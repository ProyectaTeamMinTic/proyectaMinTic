<<<<<<< HEAD
import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_USUARIOS } from "graphql/usuarios/queries";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Enum_Rol, Enum_EstadoUsuario } from "utils/enums";
import PrivateRoute from "components/PrivateRoute";
=======
import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from 'graphql/usuarios/queries';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Enum_Rol, Enum_EstadoUsuario } from 'utils/enums';
import PrivateRoute from 'components/PrivateRoute';
import ReactLoading from 'react-loading';
>>>>>>> 024b380b764113d702465ef17557196d813d60a5

const IndexUsers = () => {
  const { data, error, loading } = useQuery(GET_USUARIOS);

  useEffect(() => {
    console.log("data servidor", data);
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error("Error consultando los usuarios");
    }
  }, [error]);

  if (loading) return <div className="flex justify-center items-center">
    <ReactLoading type='spinningBubbles' color='#16baf9' height={250} width={150} />
  </div>

  return (
    <PrivateRoute roleList={["ADMINISTRADOR", "LIDER"]}>
      <div>
        <div>
          <h3 className="text-center text-2xl font-bold text-gray-900">
            Usuarios
          </h3>
          <h5 className="pl-3 font-bold text-gray-900">
            Usuarios registrados en la plataforma{" "}
          </h5>
        </div>
        <table className="tabla">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Correo</th>
              <th>Identificación</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {data && data.Users ? (
              <>
                {data.Users.map((u) => {
                  return (
                    <tr key={u._id}>
                      <td>{u.nombre}</td>
                      <td>{u.apellido}</td>
                      <td>{u.correo}</td>
                      <td>{u.identificacion}</td>
                      <td>{Enum_Rol[u.rol]}</td>
                      <td>{Enum_EstadoUsuario[u.estado]}</td>
                      <td>
<<<<<<< HEAD
                        <Link to={`/users/profile/${u._id}`}>
                          <i className="fas fa-pen text-yellow-600 hover:text-yellow-400 cursor-pointer" />
=======
                        <Link to={`/users/editAdmin/${u._id}`}>
                          <i className='fas fa-pen text-yellow-600 hover:text-yellow-400 cursor-pointer' />
>>>>>>> 024b380b764113d702465ef17557196d813d60a5
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </>
            ) : (
              <div>No estas autorizado para ver esta pagina</div>
            )}
          </tbody>
        </table>
      </div>
    </PrivateRoute>
  );
};

export default IndexUsers;
