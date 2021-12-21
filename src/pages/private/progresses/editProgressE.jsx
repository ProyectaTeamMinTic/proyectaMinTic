import React, { useEffect } from "react";
import { UPDATE_PROGRESS } from "graphql/progresses/mutationsE";
import { GET_PROGRESSE } from "graphql/progresses/queriesE";
import { toast } from "react-toastify";
import { useParams, Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import Input from "components/Input";
import useFormData from "hooks/useFormData";
import PrivateRoute from "components/PrivateRoute";
import ReactLoading from "react-loading";
import ButtonLoading from "components/ButtonLoading";

const EditProgressE = () => {
  const { form, formData, updateFormData } = useFormData(null);
  const { _id } = useParams();
  const {
    data: queryData,
    error: queryError,
    loading: queryLoading,
  } = useQuery(GET_PROGRESSE, {
    variables: { _id },
  });

  const [
    updateProgress,
    { data: mutationData, loading: mutationLoading, error: mutationError },
  ] = useMutation(UPDATE_PROGRESS);

  const submitForm = (e) => {
    e.preventDefault();
    delete formData.rol;
    updateProgress({
      variables: { _id, ...formData },
    });
  };

  useEffect(() => {
    if (mutationData) {
      toast.success("Avance modificado con exito");
    }
  }, [mutationData]);

  useEffect(() => {
    if (mutationError) {
      toast.error("Error modificando el avance");
    }

    if (queryError) {
      toast.error("Error consultando el avance");
    }
  }, [queryError, mutationError]);

  if (queryLoading)
    return (
      <div className="flex justify-center items-center">
        <ReactLoading
          type="spinningBubbles"
          color="#16baf9"
          height={200}
          width={150}
        />
      </div>
    );

  return (
    <PrivateRoute roleList={["ESTUDIANTE"]}>
      <div className="w-full h-full items-center justify-center p-10">
        <Link to={`/progresses/indexOneProgressE/${queryData.Progress.proyecto._id}`}>
          <i className="fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900" />
        </Link>
        <h1 className="m-4 text-3xl text-gray-800 font-bold text-center">
          Editar avance
        </h1>
        <form
          onSubmit={submitForm}
          onChange={updateFormData}
          ref={form}
          className="flex flex-col items-center justify-center"
        >
          <span className="font-bold text-center">ID proyecto</span>
          <span className="text-center">{queryData.Progress.proyecto._id}</span>
          <span className="font-bold text-center">Nombre proyecto</span>
          <span className="text-center">
            {queryData.Progress.proyecto.nombre}
          </span>
          <Input
            label="descripcion del avance:"
            type="text"
            name="descripcion"
            defaultValue={queryData.Progress.descripcion}
            required={true}
          />
          <ButtonLoading
            disabled={Object.keys(formData).length === 0}
            loading={mutationLoading}
            text="Confirmar"
          />
        </form>
      </div>
    </PrivateRoute>
  );
};

export default EditProgressE;
