import { gql } from '@apollo/client';

const GET_PROJECTSL = gql`
query User($id: String!) {
    User(_id: $id) {
      proyectos {
        _id
        nombre
        fase
        estado
        fechaInicio
        fechaFin
      }
    }
  }
`;

const GET_PROJECTSL_PROGRESS = gql`
query Project($_id: String!) {
  Project(_id: $_id) {
    avances {
      _id
      fecha
      descripcion
      observaciones {
        descripcion
      }
      creadoPor {
        _id
      }
    }
  }
}
`;

export { GET_PROJECTSL, GET_PROJECTSL_PROGRESS }