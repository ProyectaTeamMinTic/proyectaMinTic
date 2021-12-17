import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USUARIO } from 'graphql/usuarios/queries';
import Input from 'components/Input';
import ButtonLoading from 'components/ButtonLoading';
import useFormData from 'hooks/useFormData';
import { toast } from 'react-toastify';
import { EDITAR_USUARIO } from 'graphql/usuarios/mutations';
import DropDown from 'components/Dropdown';
import { Enum_EstadoUsuario } from 'utils/enums';
import { Enum_Rol } from 'utils/enums';
import PrivateComponent from 'components/PrivateComponent';
import PrivateRoute from 'components/PrivateRoute';
import ReactLoading from 'react-loading';


const EditAdmin = () => {
  const { form, formData, updateFormData } = useFormData(null);
  const { _id } = useParams();

  const {
    data: queryData,
    error: queryError,
    loading: queryLoading,
  } = useQuery(GET_USUARIO, {
    variables: { _id },
  });
  const [updateUser, { data: mutationData, loading: mutationLoading, error: mutationError }] =
    useMutation(EDITAR_USUARIO);

  const submitForm = (e) => {
    e.preventDefault();
    delete formData.rol;
    updateUser({
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
    <ReactLoading type='spinningBubbles' color='#16baf9' height={200} width={150} />
  </div>

  return (
    <PrivateRoute roleList={['ADMINISTRADOR', 'LIDER']}>
      <div className='flew flex-col w-full h-full items-center justify-center p-10'>
        <Link to='/users'>
          <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
        </Link>
        <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Editar Usuario</h1>
        <form
          onSubmit={submitForm}
          onChange={updateFormData}
          ref={form}
          className='flex flex-col items-center justify-center'
        >
          <PrivateComponent roleList={['ADMINISTRADOR']}>
            <Input
              label='Nombre de la persona:'
              type='text'
              name='nombre'
              defaultValue={queryData.User.nombre}
              required={true}
            />
          </PrivateComponent>
          <PrivateComponent roleList={['ADMINISTRADOR']}>
            <Input
              label='Apellido de la persona:'
              type='text'
              name='apellido'
              defaultValue={queryData.User.apellido}
              required={true}
            />
          </PrivateComponent>
          <PrivateComponent roleList={['ADMINISTRADOR']}>
            <Input
              label='Correo de la persona:'
              type='email'
              name='correo'
              defaultValue={queryData.User.correo}
              required={true}
            />
          </PrivateComponent>
          <PrivateComponent roleList={['ADMINISTRADOR']}>
            <Input
              label='Identificación de la persona:'
              type='text'
              name='identificacion'
              defaultValue={queryData.User.identificacion}
              required={true}
            />
          </PrivateComponent>
          <DropDown
            label='Estado de la persona:'
            name='estado'
            defaultValue={queryData.User.estado}
            required={true}
            options={Enum_EstadoUsuario}
          />
          <PrivateComponent roleList={['ADMINISTRADOR']}>
            <DropDown
              label='Rol de la persona:'
              name='rol'
              defaultValue={queryData.User.rol}
              required={false}
              options={Enum_Rol}
            />
          </PrivateComponent>
          <PrivateComponent roleList={['LIDER']}>
            <span className="font-bold text-center">Nombre del estudiante</span>
            <span className="text-center">{queryData.User.nombre}</span>
            <span className="font-bold text-center">Rol Usuario</span>
            <span className="text-center">{queryData.User.rol}</span>
          </PrivateComponent>
          <ButtonLoading
            disabled={Object.keys(formData).length === 0}
            loading={mutationLoading}
            text='Confirmar'
          />
        </form>
      </div>
    </PrivateRoute>
  );
};

export default EditAdmin;
