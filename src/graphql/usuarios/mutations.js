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

const EDITAR_USUARIOPROFILE = gql`
  mutation UpdateUserProfile(
   $_id: String!,
   $campos: CamposEditarPerfil!
   ){
  updateUserProfile(
    _id: $_id, 
    campos: $campos
    ) {
    _id
    nombre
    apellido
    correo
    password
    foto
  }
}
`;

export { EDITAR_USUARIO, EDITAR_USUARIOPROFILE };
