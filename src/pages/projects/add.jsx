import DropDown from 'components/Dropdown';
import Input from 'components/Input';
import React from 'react'
import { Link } from 'react-router-dom';
const AddProject = () => {
    return (
        <div>
            <Link to='/projects/leader'>
                <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900 pl-5 pt-5' />
            </Link>
            <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Registrar nuevo proyecto</h1>
            <div>
                <form className='grid grid-cols-4 gap-4 pl-3 pr-3'>
                    <div className='col-start-1 '>
                        <Input
                            label='Nombre'
                            type='text'
                            name='nombre'
                            defaultValue=''
                            required={true}
                        />
                    </div>
                    <div className='col-start-1 col-span-2'>
                        <Input
                            label='Objetivo generala'
                            type='text'
                            name='general'
                            defaultValue=''
                            required={true}
                        />
                    </div>
                    <div className='col-start-1 col-span-2'>
                        <Input
                            label='Objetivo especifico'
                            type='text'
                            name='especifico'
                            defaultValue=''
                            required={true}
                        />
                    </div>
                    <div>
                        <Input
                            label='Presupuesto'
                            type='number'
                            name='presupuesto'
                            defaultValue=''
                            required={true}
                        />
                    </div>
                    <div>
                        <Input
                            label='Fecha fin'
                            type='date'
                            name='fechaFin'
                            defaultValue=''
                            required={true}
                        />
                    </div>
                    <div>
                        <Input
                            label='Fecha inicio'
                            type='date'
                            name='fechaInicio'
                            defaultValue=''
                            required={true}
                        />
                    </div>
                    <DropDown
                        label=''
                        name='lider'
                        defaultValue=''
                        required={true}
                        options=''
                    />
                    <div>
                        <Input
                            label='Identificacion lider'
                            type='text'
                            name='identificacion'
                            defaultValue=''
                            required={true}
                        />
                    </div>
                    <div className='flex justify-around col-span-3'>
                        <span class="sm:block">
                            <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Crear
                            </button>
                        </span>
                        <span class="sm:block">
                            <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Cancelar
                            </button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProject
