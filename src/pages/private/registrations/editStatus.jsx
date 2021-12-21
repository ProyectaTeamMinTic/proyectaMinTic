import React, { useEffect } from 'react'
import { UPDATE_STATE } from 'graphql/registrations/mutationsL';
import { GET_REGISTRATIONL } from 'graphql/registrations/queriesL';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import ButtonLoading from 'components/ButtonLoading';
import useFormData from 'hooks/useFormData';
import { toast } from 'react-toastify';
import DropDown from 'components/Dropdown';
import PrivateRoute from 'components/PrivateRoute';
import ReactLoading from 'react-loading';
import { Enum_EstadoInscripcion } from 'utils/enums';

const EditStatus = () => {
    const { form, formData, updateFormData } = useFormData(null);
    const { _id } = useParams();
    const {
        data: queryData,
        error: queryError,
        loading: queryLoading,
    } = useQuery(GET_REGISTRATIONL, {
        variables: { _id },
    });

    const [approveRegistration, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(UPDATE_STATE);

    const submitForm = (e) => {
        e.preventDefault();
        approveRegistration({
            variables: { _id, ...formData },
        });
    };
    useEffect(() => {
        if (mutationData) {
            toast.success('Estado modificado con exito');
        }
    }, [mutationData]);
    useEffect(() => {
        if (mutationError) {
            toast.error('Error modificando el estado');
        }

        if (queryError) {
            toast.error('Error consultando la inscripcion');
        }
    }, [queryError, mutationError]);

    if (queryLoading) return <div className="flex justify-center items-center">
        <ReactLoading type='spinningBubbles' color='#16baf9' height={200} width={150} />
    </div>
    return (
        <PrivateRoute roleList={['LIDER']}>
            <div>
                <Link to='/registrations/registrationsL'>
                    <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
                </Link>
                <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Editar estado</h1>
                <form
                    onSubmit={submitForm}
                    onChange={updateFormData}
                    ref={form}
                    className='flex flex-col items-center justify-center'
                >
                    <DropDown
                        label='Estado de la inscripcion:'
                        name='estado'
                        defaultValue={queryData.Registration.estado}
                        required={true}
                        options={Enum_EstadoInscripcion}
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

export default EditStatus
