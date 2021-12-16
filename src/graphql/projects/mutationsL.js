import { gql } from '@apollo/client';


const CREATE_PROJECT = gql`
mutation CreateProject($nombre: String!, $presupuesto: Float!, $lider: String!) {
  createProject(nombre: $nombre, presupuesto: $presupuesto, lider: $lider) {
    nombre
    presupuesto
    _id
  }
}
`;

export { CREATE_PROJECT }