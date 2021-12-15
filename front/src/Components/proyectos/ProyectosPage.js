import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import CrearProyecto from './crear/CrearProyecto';
import { ListarProyectos } from './listar/ListarProyectos';


const ProyectosPage = () => {
    const { action } = useParams();

    return (
        <>
            <section className="content mt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card card-primary card-outline">
                                <div className="card-header flex">
                                    <a class="navbar-brand">PROJECT TABLE </a>
                                    
                                        {/* action !== undefined ? */}
                                            <NavLink className="btn btn-outline-info" to={`/projects/create`}>+ New Project</NavLink>              
                                 </div>
                                <div className="card-body">
                                    {/* {action === '' || action === undefined ? <ListarProyectos /> : (action === 'listar') ? <ListarProyectos /> : <ListarProyectos />} */}
                                    {action === '' || action === undefined ? <ListarProyectos /> : (action === 'create') ? <CrearProyecto /> : <ListarProyectos />}
                                    {/* {action === '' || action === undefined ? <ListarUsuarios /> : (action === 'crear') ? <CrearUsuario /> : <EditarUsuario />} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProyectosPage
