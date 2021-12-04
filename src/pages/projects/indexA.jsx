import DropDown from 'components/Dropdown'
import React from 'react'
import { toast } from 'react-toastify';


const IndexProjectsAdmin = () => {
    return (
        <div>
            <div>
                <div>
                    <h3 className="text-center text-2xl font-bold text-gray-900">Proyectos</h3>
                    <h5 className="pl-3 font-bold text-gray-900">Listas de proyectos registrados </h5>
                </div>
                <table className="tabla">
                    <thead>
                        <tr>
                            <th>Nombre Proyecto</th>
                            <th>Fase proyecto</th>
                            <th>Estado</th>
                            <th>Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                                <DropDown
                                    label=""
                                    name="estado"
                                    defaultValue
                                    required={true}
                                    options />
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default IndexProjectsAdmin
