import React, { useEffect } from 'react'
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import useFormData from 'hooks/useFormData';
import { useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { CREATE_OBSERVATION } from 'graphql/progresses/mutationsL';
import PrivateRoute from 'components/PrivateRoute';
import ButtonLoading from 'components/ButtonLoading';
import Input from 'components/Input';


const AddObservation = () => {
    const { form, formData, updateFormData } = useFormData(null);
    const { _id } = useParams();
    const idAvance = _id;
    const [createObservation, { data: mutationData, loading: mutationLoading, error: mutationError }] =
        useMutation(CREATE_OBSERVATION);

    const submitForm = (e) => {
        e.preventDefault();
        createObservation({
            variables: { idAvance, ...formData },
        });
    };

    useEffect(() => {
        if (mutationData) {
            toast.success('Observacion creada con exito');
        }
        if (mutationError) {
            toast.error('Error creando observacion');
        }
    }, [mutationData, mutationError]);

    if (mutationLoading) return <div className="flex justify-center items-center">
        <ReactLoading type='spinningBubbles' color='#16baf9' height={200} width={150} />
    </div>
    return (
        <PrivateRoute roleList={['LIDER']}>
            <div className='flew flex-col w-full h-full items-center justify-center p-10'>
                <Link to={`/progresses/leader`}>
                    <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
                </Link>
                <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Crear observacion</h1>
                <form
                    onSubmit={submitForm}
                    onChange={updateFormData}
                    ref={form}
                    className='flex flex-col items-center justify-center'
                >
                    <span>id avance</span>
                    <span>{_id}</span>
                    <Input
                        label='observacion del avance:'
                        type='text'
                        name='descripcion'
                        required
                    />
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

export default AddObservation
