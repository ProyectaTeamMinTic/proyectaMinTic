import React, { useEffect } from 'react'
import { useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { CREAR_AVANCE } from 'graphql/progresses/mutationsE'
import Input from 'components/Input';
import ButtonLoading from 'components/ButtonLoading';
import useFormData from 'hooks/useFormData';
import { toast } from 'react-toastify';
import PrivateRoute from 'components/PrivateRoute';
import ReactLoading from 'react-loading';
import { useUser } from "context/userContext";

const AddProgress = () => {
    const { form, formData, updateFormData } = useFormData(null);

    const { userData } = useUser();
    const id = userData._id;

    const { _id } = useParams();

    const [createProgress, { data: mutationData, error: mutationError, loading: mutationLoading }] = useMutation(CREAR_AVANCE);

    console.log('id proyecto', _id)
    console.log('id estudiante', id)
    const submitForm = (e) => {
        e.preventDefault();
        createProgress({
            variables: { _id, id, ...formData },
        });
    };

    useEffect(() => {
        if (mutationData) {
            toast.success('Avance creado con exito');
        }
        if (mutationError) {
            toast.error('Se ha producido un error Creando el avance');
        }
    }, [mutationData]);

    if (mutationLoading) return <div className="flex justify-center items-center">
        <ReactLoading type='spinningBubbles' color='#16baf9' height={200} width={150} />;
    </div>;
    return (
        <PrivateRoute roleList={['ESTUDIANTE']}>
            <div className='flew flex-col w-full h-full items-center justify-center p-10'>
                <Link to='/progresses/student'>
                    <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
                </Link>
                <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Crear Avance</h1>
                <form
                    onSubmit={submitForm}
                    onChange={updateFormData}
                    ref={form}
                    className='flex flex-col items-center justify-center'
                >
                    <Input
                        label='descripcion del avance:'
                        type='text'
                        name='descripcion'
                        required
                    />
                    <span>id proyecto</span>
                    <span>{_id}</span>
                    <span>id estudiante</span>
                    <span>{id}</span>
                    <ButtonLoading
                        disabled={Object.keys(formData).length === 0}
                        loading={mutationLoading}
                        text='Confirmar'
                    />
                </form>
            </div>
        </PrivateRoute>
    )
}

export default AddProgress
