import { gql } from '@apollo/client';

const CREATE_OBSERVATION = gql`
mutation CreateObservation($idAvance: String!, $descripcion: String!) {
  createObservation(idAvance: $idAvance, descripcion: $descripcion) {
    descripcion
  }
}
`;

export { CREATE_OBSERVATION }