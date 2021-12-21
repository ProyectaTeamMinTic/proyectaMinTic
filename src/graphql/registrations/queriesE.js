import { gql } from '@apollo/client';

const GET_REGISTRATIONSE = gql`
query User($_id: String!) {
  User(_id: $_id) {
    inscripciones {
      estado
      proyecto {
        _id
      }
    }
  }
}
`;

export { GET_REGISTRATIONSE };