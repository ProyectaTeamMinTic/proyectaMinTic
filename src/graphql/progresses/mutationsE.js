import { gql } from '@apollo/client';


const CREAR_AVANCE = gql`
mutation CreateProgress($descripcion: String!, $proyecto: String!, $creadoPor: String!) {
  createProgress(descripcion: $descripcion, proyecto: $proyecto, creadoPor: $creadoPor) {
    _id
    descripcion
  }
}
`;

const UPDATE_PROGRESS = gql`
mutation UpdateProgress($_id: String!, $descripcion: String!) {
  updateProgress(_id: $_id, descripcion: $descripcion) {
    descripcion
  }
}
`;

export { CREAR_AVANCE, UPDATE_PROGRESS }