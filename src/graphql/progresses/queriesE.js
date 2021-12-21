import { gql } from '@apollo/client';

const GET_PROGRESSE = gql`
query Progress($_id: String!) {
  Progress(_id: $_id) {
    _id
    descripcion
    proyecto {
      _id
      nombre
    }
  }
}
`;

export { GET_PROGRESSE }