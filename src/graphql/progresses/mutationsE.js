import { gql } from '@apollo/client';


const CREAR_AVANCE = gql`
mutation CreateProgress($descripcion: String!, $proyecto: String!, $creadoPor: String!) {
  createProgress(descripcion: $descripcion, proyecto: $proyecto, creadoPor: $creadoPor) {
    _id
    descripcion
  }
}
`;

export { CREAR_AVANCE }