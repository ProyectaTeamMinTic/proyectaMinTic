import React from 'react'
import ButtonLoading from 'components/ButtonLoading';
import Input from 'components/Input';
import { Link } from 'react-router-dom';



const UpdateProject = () => {
    return (
        <div className='flew flex-col w-full h-full items-center justify-center p-10'>
            <Link to='/projects/leader'>
                <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
            </Link>
            <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Editar proyecto</h1>
            <form
                className='flex flex-col items-center justify-center'
            >
                <Input
                    label='Nombre:'
                    type='text'
                    name='nombre'
                    defaultValue=''
                    required={false}
                />
                <Input
                    label='Objetivo general:'
                    type='text'
                    name='general'
                    defaultValue=''
                    required={false}
                />
                <Input
                    label='Objetivo especifico:'
                    type='text'
                    name='especifico'
                    defaultValue=""
                    required={false}
                />
                <Input
                    label='Presupuesto:'
                    type='text'
                    name='presupuesto'
                    defaultValue=""
                    required={false}
                />

                <ButtonLoading
                    disabled=''
                    text='Actualizar'
                />
            </form>
        </div>
    )
}

export default UpdateProject
