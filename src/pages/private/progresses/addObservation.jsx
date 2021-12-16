import React, { useEffect } from 'react'
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import useFormData from 'hooks/useFormData';
import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { GET_PROJECTSL_PROGRESS } from 'graphql/projects/queriesL'

const AddObservation = () => {
    const { form, formData, updateFormData } = useFormData(null);
    const { _id } = useParams();
    console.log('id del token', _id)
    const {
        data: queryData,
        error: queryError,
        loading: queryLoading,
    } = useQuery(GET_PROJECTSL_PROGRESS, {
        variables: { _id },
    });
    const [updateProgress, { data: mutationData, loading: mutationLoading, error: mutationError }] =
        useMutation();

    const submitForm = (e) => {
        e.preventDefault();
        delete formData.rol;
        updateProgress({
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

    if (queryLoading) return <div className="flex justify-center items-center">
        <ReactLoading type='spinningBubbles' color='#16baf9' height={200} width={150} />;
    </div>;
    return (
        <div>
            edit progreses
        </div>
    )
}

export default AddObservation
