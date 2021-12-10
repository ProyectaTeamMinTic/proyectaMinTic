import { gql } from "@apollo/client";

const GET_PROJECTSL = gql`
  query User($_id: String!) {
    User(_id: $_id) {
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
