import { gql } from '@apollo/client';

const EDITAR_USUARIO = gql`
  mutation UpdateUser(
   $_id: String!,
   $nombre: String, 
   $apellido: String, 
   $identificacion: String,
   $correo: String, 
   $estado: Enum_EstadoUsuario
   ){
  updateUser(
    _id: $_id, 
    nombre: $nombre, 
    apellido: $apellido, 
    identificacion: $identificacion, 
    correo: $correo, 
    estado: $estado
    ) {
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



export { EDITAR_USUARIO };
