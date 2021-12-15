import { gql } from '@apollo/client';

const GET_REGISTRATIONSL = gql`
query User($id: String!) {
  User(_id: $id) {
    inscripciones {
      _id
      estado
      fechaIngreso
      fechaEgreso
      proyecto {
        _id
        nombre
      }
      estudiante {
        _id
        nombre
      }
    }
  }
}
`;