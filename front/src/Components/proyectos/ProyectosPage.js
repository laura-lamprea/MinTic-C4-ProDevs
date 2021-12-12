import React from 'react'
//import { useNavigate } from 'react-router-dom';
import './proyecto.css';
import Navbar from '../container/Navbar'

const ProyectosPage = () => {


    return (
        <main>
            <body>
                <div className="container">

                    <nav class="navbar navbar-light bg-light">
                        <div class="container-fluid">
                            
                            <button type="button" class="btn btn-outline-info">+ New Project</button>
                            <a class="navbar-brand">PROJECT TABLE </a>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>

                    <table class="table table-hover">
                        <thead >
                            <tr>
                                <th>ID</th>
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
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr>
                        
                    </tbody>
                    </table>
                </div>
            </body>
        </main>
    )
}

export default ProyectosPage
