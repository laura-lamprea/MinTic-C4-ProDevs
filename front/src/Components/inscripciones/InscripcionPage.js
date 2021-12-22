import React from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import ListarInscripciones from './listar/ListarInscripciones';
import EditarInscripcion from './editar/EditarInscripcion';



const InscripcionPage = () => {
    const { action } = useParams();



    return (
        <>
            <section className="content mt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card card-primary card-outline">
                                <div className="card-header flex">
                                    <a class="navbar-brand">INSCRIPTION TABLE </a>
                                    <Link to={`/projects`}>
                                        <a class="btn btn-primary btnPrevious" >&laquo; Back</a>
                                    </Link>



                                </div>
                                <div className="card-body">

                                    <ListarInscripciones />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InscripcionPage


