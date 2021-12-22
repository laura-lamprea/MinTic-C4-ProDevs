import { useMutation, useQuery } from '@apollo/client';
import React from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import GET_USUARIOS from '../../../Apollo/gql/getUsers';
import DELETE_USER from '../../../Apollo/gql/deleteUser';

import '../../usuarios/componentes.css'

const ListarUsuarios = () => {

    const { action } = useParams();
    const { loading, data, error } = useQuery(GET_USUARIOS);
    const [deleteUser] = useMutation(DELETE_USER);

    const handleDelete = (id) => {
        console.log(action);
        deleteUser({ variables: {id}});
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
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            data.Usuarios.map((usuario, index) => (
                                <tr key={usuario.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{usuario.name_user} </td>
                                    <td>{usuario.email}</td>
                                    {/* <td>
                                        <ul class="list-inline m-0">
                                            <li class="list-inline-item">
                                                <Link to={`/users/${usuario.id}`}>
                                                    <button class="btn btn-success btn-sm rounded-0" type="button"  data-placement="top" title="Edit" ><i class="fa fa-edit"></i></button>
                                                </Link>
                                            </li>
                                            <li class="list-inline-item">
                                                <button class="btn btn-danger btn-sm rounded-0" type="button" onClick={() => handleDelete(usuario.id)} data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>
                                                        
                                            </li>
                                        
                                        </ul>
                                    </td> */}
                                    <td>
                                        <NavLink className="btn btn-primary mr" to={`/users/${usuario.id}`}>
                                            Editar
                                        </NavLink>
                                        <button type="button" className="btn btn btn-danger mr-3" data="data de pruebas" onClick={() => handleDelete(usuario.id)}>
                                            Eliminar
                                        </button>

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

export default ListarUsuarios
