import { gql } from '@apollo/client';

const GET_USUARIOS = gql`
  query Users {
  Users {
  nombre
  _id
  apellido
  identificacion
  correo
  rol
  estado
  }
}
`;

const GET_USUARIO = gql`
  query User($_id: String!) {
  User(_id: $_id) {
    _id
    nombre
    apellido
    identificacion
    correo
    rol
    estado
  }
}
`;

export { GET_USUARIOS, GET_USUARIO };
