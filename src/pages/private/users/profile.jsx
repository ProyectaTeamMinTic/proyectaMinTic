import React, { useEffect } from 'react'
import Input from 'components/Input';
import ButtonLoading from 'components/ButtonLoading';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GET_USUARIO } from 'graphql/usuarios/queries';
import { useQuery, useMutation } from "@apollo/client";
import { useUser } from "context/userContext";
import useFormData from 'hooks/useFormData';
import { EDITAR_USUARIO } from 'graphql/usuarios/mutations';

const Profile = () => {
    const { form, formData, updateFormData } = useFormData();
    const { userData } = useUser();
    const _id = userData._id;
    const [updateUserProfile, { data: mutationData, loading: mutationLoading, error: mutationError }] =
        useMutation(EDITAR_USUARIO);
    const {
        data: queryData,
        error: queryError,
        loading: queryLoading,
    } = useQuery(GET_USUARIO, {
        variables: {
            _id,
        },
    });

    const submitForm = (e) => {
        e.preventDefault();
        updateUserProfile({
            variables: { _id, ...formData },
        });
    };

    useEffect(() => {
        if (mutationData) {
            toast.success('Usuario modificado con exito');
        }
    }, [mutationData]);

    useEffect(() => {
        if (mutationError) {
            toast.error('Error modificando el usuario');
        }

        if (queryError) {
            toast.error('Error consultando el usuario');
        }
    }, [queryError, mutationError]);

    if (queryLoading) return <div className="flex w-full h-full justify-center items-center">
        <ReactLoading type='spinningBubbles' color='#16baf9' height={200} width={150} />
    </div>

    return (
        <div className='w-full h-full items-center justify-center p-10'>
            <Link to='/main'>
                <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
            </Link>
            <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Editar datos</h1>
            <form
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form}
                className='flex flex-col items-center justify-center'
            >
                <span>ID usuario</span>
                <span>{queryData.User._id}</span>
                <Input
                    label='Nombre'
                    type='text'
                    name='nombre'
                    defaultValue={queryData.User.nombre}
                    required={true}
                />
                <Input
                    label='Apellido'
                    type='text'
                    name='apellido'
                    defaultValue={queryData.User.apellido}
                    required={true}
                />
                <Input
                    label='Identificación de la persona:'
                    type='text'
                    name='identificacion'
                    defaultValue={queryData.User.identificacion}
                    required={true}
                />
                <Input
                    label='Correo'
                    type='email'
                    name='correo'
                    defaultValue={queryData.User.correo}
                    required={true}
                />
                <ButtonLoading
                    disabled={Object.keys(formData).length === 0}
                    loading={mutationLoading}
                    loading={false}
                    text='Editar'
                />
            </form>
        </div>
    )
}

export default Profile;
