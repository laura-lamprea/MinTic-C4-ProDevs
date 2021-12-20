import React from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import ListarAvances from './listar/ListarAvances';
import CrearAvance from './crear/CrearAvance';



export const AvancePage = () => {
    const { action } = useParams();

    return (
        <>
            <section className="content mt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card card-primary card-outline">
                                <div className="card-header flex">
                                    <Link to={`/details`}>
                                        <a class="btn btn-primary btnPrevious" >&laquo; Back</a>
                                    </Link>
                                    {/* <a class="navbar-brand">PROGRESS TABLE </a> */}
                                    {
                                    action === 'create' ?
                                        <NavLink className="btn btn-danger mr-3" to={`/progress`}>
                                            Cancel
                                        </NavLink>
                                        :
                                        <NavLink className="btn btn-outline-info" to={`/progress/create`}>+ New Progress</NavLink>
                                }
                                </div>
                                <div className="card-body">
                                {action === '' || action === undefined ? <ListarAvances /> : (action === 'create') ? <CrearAvance /> : <ListarAvances />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}


export default AvancePage