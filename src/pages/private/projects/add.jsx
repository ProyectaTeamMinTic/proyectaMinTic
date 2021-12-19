import Input from 'components/Input';
import React, { useEffect } from 'react'
import ButtonLoading from 'components/ButtonLoading';
import { Link } from 'react-router-dom';
import { CREATE_PROJECT } from 'graphql/projects/mutationsL';
import { useUser } from "context/userContext";
import ReactLoading from 'react-loading';
import PrivateRoute from 'components/PrivateRoute';
import { toast } from 'react-toastify';
import useFormData from 'hooks/useFormData';
import { useMutation } from '@apollo/client';

const AddProject = () => {
    const { form, formData, updateFormData } = useFormData(null);
    const { userData } = useUser();
    const lider = userData._id;

    const [createProject, { data: mutationData, loading: mutationLoading, error: mutationError, }] = useMutation(CREATE_PROJECT);
    const submitForm = (e) => {
        e.preventDefault();
        const presupuesto = parseFloat(formData.presupuesto);
        const nombre = formData.nombre;
        const objetivoGeneral = formData.general;
        const objetivoEspecifico2 = formData.especifico2;
        const objetivoEspecifico1 = formData.especifico1;
        const objetivoEspecifico3 = formData.especifico3;
        createProject({
            variables: { lider, nombre, presupuesto, objetivoGeneral, objetivoEspecifico1, objetivoEspecifico2, objetivoEspecifico3 },
        });
    };
    console.log(formData)
    useEffect(() => {
        if (mutationData) {
            toast.success('proyecto creado con exito');
        }
        if (mutationError) {
            toast.error('Se ha producido un error Creando el proyecto');
        }
    }, [mutationData, mutationError]);

    if (mutationLoading) return <div className="flex justify-center items-center">
        <ReactLoading type='spinningBubbles' color='#16baf9' height={200} width={150} />
    </div>
    return (
        <PrivateRoute roleList={['LIDER']}>
            <div>
                <Link to='/projects/leader'>
                    <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900 pl-5 pt-5' />
                </Link>
                <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Registrar nuevo proyecto</h1>
                <div>
                    <form
                        onSubmit={submitForm}
                        onChange={updateFormData}
                        ref={form}
                        className='flex flex-col items-center justify-center'
                    >
                        <Input
                            label='Nombre'
                            type='text'
                            name='nombre'
                            required={true}
                        />
                        <Input
                            label='Presupuesto'
                            type='number'
                            name='presupuesto'
                            required={true}
                        />
                        <Input
                            label='Objetivo general'
                            type='text'
                            name='general'
                            required={true}
                        />
                        <Input
                            label='Objetivo especifico 1'
                            type='text'
                            name='especifico1'
                            required={true}
                        />
                        <Input
                            label='Objetivo especifico 2'
                            type='text'
                            name='especifico2'
                            required={true}
                        />
                        <Input
                            label='Objetivo especifico 3'
                            type='text'
                            name='especifico3'
                            required={true}
                        />
                        <span>lider</span>
                        <span>{lider}</span>
                        <ButtonLoading
                            disabled={Object.keys(formData).length === 0}
                            loading={mutationLoading}
                            text='Crear Proyecto'
                        />
                    </form>
                </div >
            </div >
        </PrivateRoute>
    )
}

export default AddProject
