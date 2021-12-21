import { gql } from '@apollo/client';

const GET_REGISTRATIONL = gql`
query Registration($_id: String!) {
  Registration(_id: $_id) {
    estado
  }
}
`;


const GET_REGISTRATIONS = gql`
query Registrations {
  Registrations {
    _id
    estado
    fechaIngreso
  fechaIngreso
    fechaEgreso
    proyecto {
      _id
      nombre
      lider {
        _id
      }
    }
    estudiante {
      _id
      nombre
    }
  }
}
`;

export { GET_REGISTRATIONL, GET_REGISTRATIONS }