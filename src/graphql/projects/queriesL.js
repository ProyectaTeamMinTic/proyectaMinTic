import { gql } from '@apollo/client';

const GET_PROJECTSL = gql`
query User($id: String!) {
    User(_id: $id) {
      proyectos {
        _id
        nombre
        fase
        estado
        fechaInicio
        fechaFin
      }
    }
  }
`

export { GET_PROJECTSL }