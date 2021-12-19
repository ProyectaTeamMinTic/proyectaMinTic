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
        objetivoGeneral
        objetivoEspecifico1
        objetivoEspecifico2
        objetivoEspecifico3
        presupuesto
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

const GET_PROJECTL = gql`
query Project($_id: String!) {
  Project(_id: $_id) {
    nombre
    presupuesto
    objetivoGeneral
    objetivoEspecifico1
    objetivoEspecifico2
    objetivoEspecifico3
    fase
    estado
  }
}
`;

export { GET_PROJECTSL, GET_PROJECTSL_PROGRESS, GET_PROJECTL }