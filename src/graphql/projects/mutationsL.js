import { gql } from '@apollo/client';


const CREATE_PROJECT = gql`
# mutation CreateProject($nombre: String!, $presupuesto: Float!, $lider: String!) {
#   createProject(nombre: $nombre, presupuesto: $presupuesto, lider: $lider) {
#     nombre
#     presupuesto
#     _id
#   }
# }
mutation CreateProject($nombre: String!, $presupuesto: Float!, $lider: String!, $objetivoGeneral: String!, $objetivoEspecifico1: String!, $objetivoEspecifico2: String!, $objetivoEspecifico3: String!) {
  createProject(nombre: $nombre, presupuesto: $presupuesto, lider: $lider, objetivoGeneral: $objetivoGeneral, objetivoEspecifico1: $objetivoEspecifico1, objetivoEspecifico2: $objetivoEspecifico2, objetivoEspecifico3: $objetivoEspecifico3) {
    _id
    nombre
    presupuesto
    objetivoGeneral
    objetivoEspecifico1
    objetivoEspecifico2
    objetivoEspecifico3
  }
}
`;

export { CREATE_PROJECT }