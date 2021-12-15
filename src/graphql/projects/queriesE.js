import { gql } from '@apollo/client';

const GET_PROJECTSE = gql`

query Projects {
  Projects {
    _id
    nombre
    fase
    estado
  }
}

`
export { GET_PROJECTSE }