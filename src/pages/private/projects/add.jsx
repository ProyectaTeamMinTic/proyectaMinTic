import Input from 'components/Input';
import React, { useEffect, useState } from 'react'
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
    // const [_id] = useState("")
    const { form, formData, updateFormData } = useFormData(null);
    const { userData } = useUser();
    const lider = userData._id;

    const [createProject, { data: mutationData, loading: mutationLoading, error: mutationError, }] = useMutation(CREATE_PROJECT);
    //(refetch) mirar mas adelante
    const submitForm = (e) => {
        e.preventDefault();
        const presupuesto = parseFloat(formData.presupuesto);
        const nombre = formData.nombre;
        createProject({
            variables: { lider, nombre, presupuesto },
        });
    };
    console.log(formData)
    useEffect(() => {
        if (mutationData) {
            toast.success('proyecto creado con exito');
            // setId(mutationData)
        }
        if (mutationError) {
            toast.error('Se ha producido un error Creando el proyecto');
        }
    }, [mutationData, mutationError]);
    // console.log('datos proyectos lider', _id._id)

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
                        <span>lider</span>
                        <span>{lider}</span>
                        <div className='flex justify-around w-full'>
                            <ButtonLoading
                                disabled={Object.keys(formData).length === 0}
                                loading={mutationLoading}
                                text='Crear'
                            />
                            {/* falta crear objetivos */}
                            {/* <Link to={`/projects/addObjective/${_id}`}> */}
                            <ButtonLoading
                                disabled={Object.keys(formData).length === 0}
                                text='Siguiente'
                            />
                            {/* </Link> */}
                        </div>
                    </form>
                </div >
            </div >
        </PrivateRoute>
    )
}

export default AddProject
