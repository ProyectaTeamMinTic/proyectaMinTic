import { gql } from '@apollo/client';

//FALTA REVISAR BACKEND PARA TREAR NOMBRE DEL CREADOPOR
const GET_PROGRESSL = gql`

query User($id: String!) {
  User(_id: $id) {
    proyectos {
      _id
      nombre
      avances {
        _id
        fecha
        descripcion
        creadoPor {
          _id
        }
        observaciones {
          descripcion
        }
      }
    }
  }
}
`;

export { GET_PROGRESSL };