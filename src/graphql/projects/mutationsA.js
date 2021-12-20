import { gql } from "@apollo/client";

const UPDATE_STATE_PROJECT = gql`
mutation UpdateProjectStateAndSetDate($_id: String!, $campos: camposProyectoA!) {
  updateProjectStateAndSetDate(_id: $_id, campos: $campos) {
    estado
    fase
    fechaInicio
    fechaFin
  }
}
`;

export { UPDATE_STATE_PROJECT };
