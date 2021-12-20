import { useMutation, useQuery } from '@apollo/client';
import React from 'react'
import { useForm } from 'react-hook-form';
import { NavLink, useParams } from 'react-router-dom';
import GET_PROJECT_BY_ID from '../../../Apollo/gql/getProjectById';



export const DetailsPage = ({projectid}) => {
    const { action } = useParams();
    const { loading, data, error } = useQuery(GET_PROJECT_BY_ID, { variables: { id: action } });
    
    
    const { handleSubmit } = useForm();
    
    return (
        <>
            {data &&
                <div class="card text-center">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Details</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#"><NavLink to={`/progress`}>Progress</NavLink></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#"><NavLink to={`/inscription`}>Inscriptions</NavLink></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#"><NavLink to={`/inscription`}>Obsers</NavLink></a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="card" >
                            <div class="card-header">
                                <a class="navbar-brand">PROJECT #{data.proyectoById.id_project}</a>
                            </div>

                            <div class="card-body">
                                <p class="font-weight-bold">Project: {data.proyectoById.project}</p>
                                <p class="font-weight-bold">Leader: {data.proyectoById.leader.name_user}</p>
                                <p class="font-weight-bold">General objectives:{data.proyectoById.general_objectives}</p>
                                <p class="font-weight-bold">Specific objectives: {data.proyectoById.project}</p>
                                <p class="font-weight-bold">Budget:{data.proyectoById.project}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default DetailsPage