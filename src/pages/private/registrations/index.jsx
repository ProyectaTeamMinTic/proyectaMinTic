import PrivateRoute from 'components/PrivateRoute'
import React from 'react'
//FALTA MIRAR BACKEND PARA
const IndexRegistrations = () => {
    return (
        <PrivateRoute roleList={['LIDER']}>
            <div>

            </div>
        </PrivateRoute>
    )
}

export default IndexRegistrations
