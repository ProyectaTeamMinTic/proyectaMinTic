import PrivateRoute from 'components/PrivateRoute'
import React from 'react'

const IndexProjectsStudent = () => {
    return (
        <PrivateRoute roleList={['ESTUDIANTE']}>
            <div>
                IndexProjects - Principal Proyectos Estudiante
            </div>
        </PrivateRoute>
    )
}

export default IndexProjectsStudent
