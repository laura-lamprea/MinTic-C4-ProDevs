import React from 'react'
import { Routes, Route } from "react-router-dom";
import { AvancePage } from '../Components/avances/AvancePage';
import Navbar from '../Components/container/Navbar';
import DetailsPage from '../Components/details/DetailsPage';
import InscripcionPage from '../Components/inscripciones/InscripcionPage';
import ProyectosPage from '../Components/proyectos/ProyectosPage';
import RegistroPage from '../Components/registro/RegistroPage';
import UsuarioPage from '../Components/usuarios/UsuarioPage'


const ContentRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Routes>
                        {/* <Route path="usuarios/:action" element={<UsuariosPage/>} /> */}
                        <Route path="/users" element={<UsuarioPage />} />
                        <Route path="/users/:action" element={<UsuarioPage />} />
                        <Route path="/projects/:action" element={<ProyectosPage />} />      
                        <Route path="/projects" element={<ProyectosPage />} />           
                        <Route path="/inscription" element={<InscripcionPage/>} />   
                        <Route path="/details" element={<DetailsPage/>} />              
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default ContentRoutes