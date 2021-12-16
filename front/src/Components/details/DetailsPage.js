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
                            <a class="nav-link" href="#"><NavLink  to={`/inscription`}>Inscription</NavLink></a> 
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
                        <a class="navbar-brand">PROJECT # ...</a>
                            <NavLink className="btn btn-outline-info" to={`/projects/create`}>+ Add me</NavLink>
                        </div>
                        
                        <div class="card-body">
                        <p class="font-weight-bold">Project:<input/></p>
                        <p class="font-weight-bold">Leader:</p>
                        <p class="font-weight-bold">General objectives:</p>
                        <p class="font-weight-bold">Specific objectives:</p>
                        <p class="font-weight-bold">Budget:</p>
                        </div>
                    </div>

                    <div class="card-header">
                    <a class="navbar-brand">PROGRESS</a>
                    </div>
                    
                        <div class="card-body">
                        <p class="font-weight-bold">Project:</p>
                        <p class="font-weight-bold">Leader:</p>
                        <p class="font-weight-bold">General objectives:</p>
                        <p class="font-weight-bold">Specific objectives:</p>
                        <p class="font-weight-bold">Budget:</p>
                        </div>
                    <input type="text" placeholder="avance" className='form-control mb-3' />

                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </>
    )
}

export default DetailsPage