import { gql } from "@apollo/client";

const CREATE_REGISTRATION = gql`
mutation CreateRegistration($proyecto: String!, $estudiante: String!) {
  createRegistration(proyecto: $proyecto, estudiante: $estudiante) {
    proyecto {
      _id
    }
    estudiante {
      _id
    }
  }
}
`;

export { CREATE_REGISTRATION }