//escribiendo rafc se genera codigo

import { useQuery } from '@apollo/client';
import React from 'react'
import GET_PROJECTS from '../../../Apollo/gql/getProjects';
import { NavLink } from 'react-router-dom'

export const ListarProyectos = () => {

    const { loading, data, error } = useQuery(GET_PROJECTS);
    const handleDelete = (id) => {
        console.log('delete');
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
                            <th>General objectives</th>
                            <th>Specific objectives</th>
                            <th>Budget</th>
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
                                    <td><button type="button" class="btn btn-link">{proyecto.project}</button> </td>
                                    <td>{proyecto.id_project}</td>
                                    <td>{proyecto.general_objectives}</td>
                                    <td>{proyecto.specific_objectives.item}</td>
                                    <td>{proyecto.budget}</td>
                                    <td>{proyecto.date_start}</td>
                                    <td>{proyecto.date_finish}</td>
                                    <td>{proyecto.state_project}</td>
                                    <td>{proyecto.phase}</td>
                                    <td>
                                        <NavLink className="btn btn-primary mr" to={`/proyecto/${proyecto.id}`}>Add me</NavLink>
                                        <NavLink className="btn btn-success" to={`/proyecto/${proyecto.id}`}>Edit</NavLink>
                                        <button type="button" className="btn btn btn-danger mr-3" data="data de pruebas" onClick={() => handleDelete(proyecto.id)}>Delete</button>
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
