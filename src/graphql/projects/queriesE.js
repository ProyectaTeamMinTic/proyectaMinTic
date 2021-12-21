import { gql } from '@apollo/client';

const GET_PROJECTSE = gql`

query Projects {
  Projects {
    _id
    nombre
    fase
    estado
  }
}
`;

const GET_PROJECTSE_PROGRESS = gql`
query Project($_id: String!) {
  Project(_id: $_id) {
    avances {
      _id
      fecha
      descripcion
      observaciones {
        _id
        descripcion
      }
    }
  }
}
`;
export { GET_PROJECTSE, GET_PROJECTSE_PROGRESS }