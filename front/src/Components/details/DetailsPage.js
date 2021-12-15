import React from 'react'
import { NavLink, useParams } from 'react-router-dom';



const DetailsPage = () => {
    const { action } = useParams();

    return (
        <>
            <a class="navbar-brand">PROJECT DETAILS </a>
            <div class="card text-center">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Details</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Inscriptions</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Progress</a>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li> */}
                    </ul>
                </div>
                <div class="card-body">
                    
                    <div class="card" >
                        <div class="card-header">
                            Project # ....
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Objetivos</li>
                            <li class="list-group-item">Dapibus ac facilisis in</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>

                    <p class="card-text">Enumeracion de los datos del proyecto y boton de inscribirme</p>
                    <input type="text" placeholder="avance" className='form-control mb-3' />

                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </>
    )
}

export default DetailsPage