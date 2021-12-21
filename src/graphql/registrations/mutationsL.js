import { gql } from "@apollo/client";

const UPDATE_STATE = gql`
mutation ApproveRegistration(
  $_id: String!, 
  $estado: Enum_EstadoInscripcion!
  ) {
  approveRegistration(
    _id: $_id, 
    estado: $estado
    ) {
    estado
    fechaIngreso
  }
}
`;

export { UPDATE_STATE }