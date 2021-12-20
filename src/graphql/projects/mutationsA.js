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

const UPDATE_PHASE_PROJECT = gql`
mutation UpdateProjectPhaseAndSetDate($_id: String!, $campos: camposProyectoA!) {
  updateProjectPhaseAndSetDate(_id: $_id, campos: $campos) {
    fase
  }
}
`;

export { UPDATE_STATE_PROJECT, UPDATE_PHASE_PROJECT };
