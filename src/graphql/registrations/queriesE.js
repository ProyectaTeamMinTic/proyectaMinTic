import { gql } from '@apollo/client';

const GET_REGISTRATIONSE = gql`
query User($id: String!) {
  User(_id: $id) {
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