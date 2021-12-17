import PrivateRoute from 'components/PrivateRoute';
import { useUser } from "context/userContext";
import { toast } from "react-toastify";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_REGISTRATIONSL } from "graphql/registrations/queriesL";
import { GET_REGISTRATIONS } from "graphql/registrations/queriesL";
import ReactLoading from 'react-loading';
import React, { useEffect } from 'react';
//FALTA MIRAR BACKEND PARA
const IndexRegistrations = () => {
    // const { userData } = useUser();
    // const id = userData._id;

    // const { data, error, loading } = useQuery(GET_REGISTRATIONSL);
    const { data, error, loading } = useQuery(GET_REGISTRATIONS);
    console.log('datos inscripciones lider', data)

    useEffect(() => {
        if (error) {
            toast.error("Error consultando las inscripciones");
        }
    }, [error]);

    if (loading) return <div className="flex justify-center items-center">
        <ReactLoading type='spinningBubbles' color='#16baf9' height={250} width={150} />
    </div>
    return (
        <div>lider</div>
    );
};

export default IndexRegistrations
