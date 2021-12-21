const Enum_Rol = {
  ADMINISTRADOR: 'Administrador',
  ESTUDIANTE: 'Estudiante',
  LIDER: 'Líder',
};

const Enum_EstadoUsuario = {
  PENDIENTE: 'Pendiente',
  AUTORIZADO: 'Autorizado',
  NO_AUTORIZADO: 'No autorizado',
};

const Enum_EstadoProyecto = {
  INACTIVO: 'Inactivo',
  ACTIVO: 'Activo',
};

const Enum_EstadoInscripcion = {
  PENDIENTE: 'Pendiente',
  ACEPTADA: 'Aceptada',
  RECHAZADA: 'Rechazada',
};

const Enum_FaseProyecto = {
  TERMINADO: 'Terminado',
}

export { Enum_Rol, Enum_EstadoUsuario, Enum_EstadoProyecto, Enum_EstadoInscripcion, Enum_FaseProyecto };
