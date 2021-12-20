import React, { useEffect } from 'react'
import ButtonLoading from 'components/ButtonLoading';
import Input from 'components/Input';
import { Link, useParams } from 'react-router-dom';
import { EDIT_PROJECTL } from 'graphql/projects/mutationsL';
import { GET_PROJECTL } from 'graphql/projects/queriesL';
import PrivateRoute from 'components/PrivateRoute';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import { useQuery, useMutation } from '@apollo/client';
import useFormData from 'hooks/useFormData';



const UpdateL = () => {
    const { _id } = useParams();
    const { form, formData, updateFormData } = useFormData(null);

    const {
        data: queryData,
        error: queryError,
        loading: queryLoading,
    } = useQuery(GET_PROJECTL, {
        variables: { _id },
    });


    const [updateProject, { data: mutationData, loading: mutationLoading, error: mutationError }] =
        useMutation(EDIT_PROJECTL);

    console.log('datos projects', formData)

    const submitForm = (e) => {
        e.preventDefault();
        updateProject({
            variables: { _id, campos: formData, },
        });
    };

    useEffect(() => {
        if (mutationData) {
            toast.success('Proyecto modificado con exito');
        }
    }, [mutationData]);

    useEffect(() => {
        if (mutationError) {
            toast.error('Error modificando el proyecto');
        }

        if (queryError) {
            toast.error('Error consultando el proyecto');
        }
    }, [queryError, mutationError]);

    if (queryLoading) return <div className="flex justify-center items-center">
        <ReactLoading type='spinningBubbles' color='#16baf9' height={200} width={150} />
    </div>
    return (
        <PrivateRoute roleList={['LIDER', 'ADMINISTRADOR']}>
            <div className='flew flex-col w-full h-full items-center justify-center p-10'>
                <Link to='/projects/leader'>
                    <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
                </Link>
                <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Editar proyecto</h1>
                <form
                    onSubmit={submitForm}
                    onChange={updateFormData}
                    ref={form}
                    className='flex flex-col items-center justify-center'
                >
                    <Input
                        label='Nombre:'
                        type='text'
                        name='nombre'
                        defaultValue={queryData.Project.nombre}
                        required={true}
                    />
                    <Input
                        label='Presupuesto:'
                        type='number'
                        name='presupuesto'
                        defaultValue={queryData.Project.presupuesto}
                        required={true}
                    />
                    <Input
                        label='Objetivo general:'
                        type='text'
                        name='objetivoGeneral'
                        defaultValue={queryData.Project.objetivoGeneral}
                        required={true}
                    />
                    <Input
                        label='Objetivo especifico 1:'
                        type='text'
                        name='objetivoEspecifico1'
                        defaultValue={queryData.Project.objetivoEspecifico1}
                        required={true}
                    />
                    <Input
                        label='Objetivo especifico 2:'
                        type='text'
                        name='objetivoEspecifico2'
                        defaultValue={queryData.Project.objetivoEspecifico2}
                        required={true}
                    />
                    <Input
                        label='Objetivo especifico 3:'
                        type='text'
                        name='objetivoEspecifico3'
                        defaultValue={queryData.Project.objetivoEspecifico3}
                        required={true}
                    />
                    <ButtonLoading
                        disabled={Object.keys(formData).length === 0}
                        loading={mutationLoading}
                        text='Actualizar'
                    />
                </form>
            </div>
        </PrivateRoute>
    )
}

export default UpdateL
