//escribiendo rafc se genera codigo
import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { Link, NavLink, useParams } from 'react-router-dom'
import GET_PROJECTS from '../../../Apollo/gql/getProjects';
import DELETE_PROJECT from '../../../Apollo/gql/deleteProject';
import UPDATE_PROJECT from '../../../Apollo/gql/updateProjects';
import EditarProyecto from '../editar/EditarProyecto';
import DetailsPage from './DetailsPage';


export const ListarProyectos = () => {

    const { action } = useParams();

    const { loading, data, error } = useQuery(GET_PROJECTS);
    const [deleteProject] = useMutation(DELETE_PROJECT);

    // const [deleteProject] = useMutation(DELETE_PROJECT, {
    //     refetchQueries: [{
    //         query: DELETE_PROJECT
    //     }]
    // });

    const handleDelete = (id) => {

        console.log(action);
        // const { id } = data;
        // deleteProject({ variables: { id } });
        // const { id } = data;
        deleteProject({ variables: { id } });
    }
  
  
   
    return (

        <>
            {loading && <p>Cargando ...</p>}
            {error && <p>Se ha producido un error</p>}
            {
                data &&

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th>Project</th>
                            <th>Leader</th>
                           
                            <th>Start</th>
                            <th>Finish</th>
                            <th>State</th>
                            <th>Phase</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.Proyectos.map((proyecto, index) => (

                                <tr key={proyecto.id}>
                                    {/* <th scope="row">{index + 1}</th> */}
                                    <td>{proyecto.id_project}</td>
                                    <td> {
                                        <Link to={`/details/${proyecto.id}`}>{proyecto.project}</Link>   }</td>                                                                     
                                
                                    {/* <td><button type="button" class="btn btn-link">{proyecto.project}</button> </td> */}
                                    <td>{proyecto.leader.name_user}</td>
                                    
                                    {/* {
                                        console.log(proyecto.specific_objectives.item)
                                     }
                                    */}
                                    <td>{proyecto.date_start}</td>
                                    <td>{proyecto.date_finish}</td>
                                    <td>{proyecto.state_project}</td>
                                    <td>{proyecto.phase}</td>
                                    <td>
                                        <ul class="list-inline m-0">
                                            {/* <NavLink className="btn btn-primary mr" to={`/inscription`}>Add me</NavLink> */}
                                            {/* <NavLink className="btn btn-success" to={`/proyecto/${proyecto.id}`}>Edit</NavLink> */}
                                            <li class="list-inline-item">
                                                <Link to={`/users`}>
                                                    <button class="btn btn-primary btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Add me"><i class="fa fa-table"></i></button>
                                                </Link>
                                            </li>
                                            <li class="list-inline-item">
                                                <Link to={`/projects/${proyecto.id}`}>
                                                    <button class="btn btn-success btn-sm rounded-0" type="button"  data-placement="top" title="Edit" ><i class="fa fa-edit"></i></button>
                                                </Link>
                                            </li>
                                            <li class="list-inline-item">
                                                {/* <Link to={`/users`}> */}
                                                <button class="btn btn-danger btn-sm rounded-0" type="button" onClick={() => handleDelete(proyecto.id)} data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>
                                                {/* </Link> */}
                                            </li>
                                            {/* <button type="button" className="btn btn btn-danger mr-3" onClick={() => handleDelete(proyecto.id)}>Delete</button> */}
                                        </ul>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>


            }

        </>

    )
}

export default ListarProyectos
