import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import ButtonLoading from 'components/ButtonLoading';
import PrivateRoute from 'components/PrivateRoute';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import { useQuery, useMutation } from '@apollo/client';
import useFormData from 'hooks/useFormData';
import { UPDATE_STATE_PROJECT } from 'graphql/projects/mutationsA';
import { GET_PROJECTA } from 'graphql/projects/queriesA';
import DropDown from 'components/Dropdown';
import { Enum_EstadoProyecto } from 'utils/enums';

const UpdateStatusA = () => {
    const { _id } = useParams();
    const { form, formData, updateFormData } = useFormData(null);

    const {
        data: queryData,
        error: queryError,
        loading: queryLoading,
    } = useQuery(GET_PROJECTA, {
        variables: { _id },
    });

    console.log('proyecto', queryData)
    const [UpdateProjectStateAndSetDate, { data: mutationData, loading: mutationLoading, error: mutationError }] =
        useMutation(UPDATE_STATE_PROJECT);

    const submitForm = (e) => {
        e.preventDefault();
        UpdateProjectStateAndSetDate({
            variables: { _id, campos: formData, },
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
            toast.error('Error consultando el proyecto');
        }
    }, [queryError, mutationError]);

    if (queryLoading) return <div className="flex justify-center items-center">
        <ReactLoading type='spinningBubbles' color='#16baf9' height={200} width={150} />
    </div>

    return (
        <PrivateRoute roleList={['ADMINISTRADOR']}>
            <div className='w-full h-full items-center justify-center p-10'>
                <Link to='/projects/admin'>
                    <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
                </Link>
                <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Editar estado proyecto</h1>
                <form
                    onSubmit={submitForm}
                    onChange={updateFormData}
                    ref={form}
                    className='flex flex-col items-center justify-center'
                >
                    <DropDown
                        label='Estado del proyecto:'
                        name='estado'
                        defaultValue={queryData.Project.estado}
                        required={true}
                        options={Enum_EstadoProyecto}
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

export default UpdateStatusA
