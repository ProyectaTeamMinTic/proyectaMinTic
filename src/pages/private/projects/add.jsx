import DropDown from 'components/Dropdown';
import Input from 'components/Input';
import React from 'react'
import ButtonLoading from 'components/ButtonLoading';
import { Link } from 'react-router-dom';
const AddProject = () => {
    return (
        <div>
            <Link to='/projects/leader'>
                <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900 pl-5 pt-5' />
            </Link>
            <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Registrar nuevo proyecto</h1>
            <div>
                <form className='flex flex-col items-center justify-center'>
                    <Input
                        label='Nombre'
                        type='text'
                        name='nombre'
                        defaultValue=''
                        required={true}
                    />
                    <Input
                        label='Objetivo generala'
                        type='text'
                        name='general'
                        defaultValue=''
                        required={true}
                    />
                    <Input
                        label='Objetivo especifico'
                        type='text'
                        name='especifico'
                        defaultValue=''
                        required={true}
                    />
                    <Input
                        label='Presupuesto'
                        type='number'
                        name='presupuesto'
                        defaultValue=''
                        required={true}
                    />
                    <Input
                        label='Fecha fin'
                        type='date'
                        name='fechaFin'
                        defaultValue=''
                        required={true}
                    />

                    <Input
                        label='Fecha inicio'
                        type='date'
                        name='fechaInicio'
                        defaultValue=''
                        required={true}
                    />
                    <DropDown
                        label=''
                        name='lider'
                        defaultValue=''
                        required={true}
                        options=''
                    />
                    <Input
                        label='Identificacion lider'
                        type='text'
                        name='identificacion'
                        defaultValue=''
                        required={true}
                    />
                    <div className='flex justify-around w-full'>
                        <ButtonLoading
                            disabled=''
                            text='Crear'
                        />
                        <ButtonLoading
                            disabled=''
                            text='Cancelar'
                        />
                    </div>
                </form>
            </div >
        </div >
    )
}

export default AddProject
