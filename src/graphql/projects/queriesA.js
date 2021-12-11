import { gql } from '@apollo/client';

const GET_PROJECTSA = gql`

query Projects {
  Projects {
    _id
    nombre
    fase
    estado
  }
}

`
export {GET_PROJECTSA}