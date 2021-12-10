import { gql } from "@apollo/client";

const GET_PROJECTSL = gql`
  query User($id: String!) {
    User(_id: $id) {
      proyectos {
        nombre
        fase
        estado
        fechaInicio
        fechaFin
      }
    }
  }
`;

export { GET_PROJECTSL };
