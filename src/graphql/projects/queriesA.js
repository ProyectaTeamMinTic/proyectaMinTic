import { gql } from '@apollo/client';

const GET_PROJECTSA = gql`
query Projects {
  Projects {
    _id
    nombre
    fase
    estado
  }
}
`;

const GET_PROJECTA = gql`
query Project($_id: String!) {
  Project(_id: $_id) {
    estado
  }
}
`;
export { GET_PROJECTSA, GET_PROJECTA }