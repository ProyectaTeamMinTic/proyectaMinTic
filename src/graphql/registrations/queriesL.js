import { gql } from '@apollo/client';

const GET_REGISTRATIONSL = gql`
query InscripcionesConProyectoYEstudiante {
  inscripcionesConProyectoYEstudiante {
    _id
    estado
    fechaIngreso
    fechaEgreso
    proyecto {
      _id
      nombre
      lider {
        _id
      }
    }
    estudiante {
      _id
      nombre
    }
  }
}
`;

const GET_REGISTRATIONS = gql`
query Registrations {
  Registrations {
    estado
    _id
    fechaIngreso
    fechaEgreso
    proyecto {
      _id
      nombre
      lider {
        _id
      }
    }
    estudiante {
      _id
      nombre
    }
  }
}
`;

export { GET_REGISTRATIONSL, GET_REGISTRATIONS }