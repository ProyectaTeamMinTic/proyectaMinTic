import React, { useEffect } from 'react'
import { UPDATE_PROGRESS } from 'graphql/progresses/mutationsE';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Input from 'components/Input';
import useFormData from 'hooks/useFormData';
import PrivateRoute from 'components/PrivateRoute';
import ReactLoading from 'react-loading';

const EditProgressE = () => {
    const { form, formData, updateFormData } = useFormData(null);
    const { _id } = useParams();
    const {
        data: queryData,
        error: queryError,
        loading: queryLoading,
    } = useQuery(GET_USUARIO, {
        variables: { _id },
    });
    return (
        <div>
            editProgressE
        </div>
    )
}

export default EditProgressE
