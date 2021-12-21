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
    fase
  }
}
`;

const GET_PROJECTA_ALL = gql`
query Project($_id: String!) {
  Project(_id: $_id) {
    _id
    presupuesto
    fechaInicio
    fechaFin
    nombre
  lider {
    _id
    nombre
  }
  }
}
`;
export { GET_PROJECTSA, GET_PROJECTA, GET_PROJECTA_ALL }