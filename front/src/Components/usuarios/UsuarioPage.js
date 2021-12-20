import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import '../usuarios/componentes.css';

import CrearUsuario from '../registro/RegistroPage'
import EditarUsuario from './editar/EditarUsuario';
import ListarUsuarios from './listar/ListarUsuarios';

const UsuariosPage = () => {

    const { action } = useParams();

    console.log(action);

    return (
        <>
        
            <section className="content mt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card card-primary card-outline">
                                <div className="card-header flex">
                                    <h5 className="m-0">USERS</h5>
                                    {
                                        action === 'create' ?

                                            <NavLink className="btn btn-danger mr-3" to={`/users`}>
                                                Cancelar
                                            </NavLink>
                                            :
                                            <NavLink className="btn btn-primary mr-3" to={`/users/create`}>
                                                Crear Usuario
                                            </NavLink>

                                    }
                                </div>
                                <div className="card-body">
                                    {action === '' || action === undefined ? <ListarUsuarios /> : (action === 'create') ? <CrearUsuario /> : <EditarUsuario userid={action} />}
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UsuariosPage

