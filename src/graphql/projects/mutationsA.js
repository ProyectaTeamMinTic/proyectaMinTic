import { gql } from "@apollo/client";

const UPDATE_STATE_PROJECT = gql`
  mutation UpdateProjectStateAndSetDate(
    $id: String!
    $campos: camposProyecto!
  ) {
    updateProjectStateAndSetDate(_id: $id, campos: $campos) {
      estado
    }
  }
`;

export { UPDATE_STATE_PROJECT };
