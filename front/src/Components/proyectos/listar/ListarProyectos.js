//escribiendo rafc se genera codigo
import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { Link, NavLink, useParams } from 'react-router-dom'
import GET_PROJECTS from '../../../Apollo/gql/getProjects';
import DELETE_PROJECT from '../../../Apollo/gql/deleteProject';
import Modal from 'react-modal';

export const ListarProyectos = () => {

    const { action } = useParams();

    const { loading, data, error } = useQuery(GET_PROJECTS);
    const [deleteProject] = useMutation(DELETE_PROJECT);

    const handleDelete = (id) => {
        console.log(action);
        deleteProject({ variables: { id } });
    }



    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };


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
                                        <Link to={`/details/${proyecto.id}`}>{proyecto.project}</Link>}</td>

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
                                            <li class="list-inline-item">
                                                <button class="btn btn-primary btn-sm rounded-0" onClick={openModal} type="button" data-toggle="tooltip" data-placement="top" title="Add me"><i class="fa fa-table"></i></button>
                                            </li>
                                            <li class="list-inline-item">
                                                <Link to={`/projects/${proyecto.id}`}>
                                                    <button class="btn btn-success btn-sm rounded-0" type="button" data-placement="top" title="Edit" ><i class="fa fa-edit"></i></button>
                                                </Link>
                                            </li>
                                            <li class="list-inline-item">
                                                <button class="btn btn-danger btn-sm rounded-0" type="button" onClick={() => handleDelete(proyecto.id)} data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>


            }


            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h4>Hello Student!</h4>
                <h5>Would you like to join this project?</h5>

                <ul class="list-inline m-0">
                    <li class="list-inline-item">
                        <button type="button" class="btn btn-success">Add me!</button>
                    </li>
                    <li class="list-inline-item">
                        <button type="button" class="btn btn-danger" onClick={closeModal} >close</button>
                    </li>
                </ul>

            </Modal>

        </>


    )
}

export default ListarProyectos