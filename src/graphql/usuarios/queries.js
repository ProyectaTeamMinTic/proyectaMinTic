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
  query User($id: String!) {
  User(_id: $id) {
    nombre
    _id
    apellido
    identificacion
    correo
    rol
  }
}
`;

export { GET_USUARIOS, GET_USUARIO };
