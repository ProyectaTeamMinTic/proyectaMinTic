import React from 'react'
import Input from 'components/Input';
import ButtonLoading from 'components/ButtonLoading';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const Profile = () => {
    return (
        <div className='flew flex-col w-full h-full items-center justify-center p-10'>
            <Link to='/users'>
                <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
            </Link>
            <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Editar Usuario</h1>
            <form
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form}
                className='flex flex-col items-center justify-center'
            >
                <Input
                    label='Nombre de la persona:'
                    type='text'
                    name='nombre'
                    defaultValue={queryData.User.nombre}
                    required={true}
                />
                <Input
                    label='Apellido de la persona:'
                    type='text'
                    name='apellido'
                    defaultValue={queryData.User.apellido}
                    required={true}
                />

                <Input
                    label='Correo de la persona:'
                    type='email'
                    name='correo'
                    defaultValue={queryData.User.correo}
                    required={true}
                />
                <Input
                    label='password'
                    type='text'
                    name='password'
                    defaultValue={queryData.User.password}
                    required={true}
                />
                <ButtonLoading
                    disabled={Object.keys(formData).length === 0}
                    loading={mutationLoading}
                    text='Confirmar'
                />
            </form>
        </div>
    )
}

export default Profile;
