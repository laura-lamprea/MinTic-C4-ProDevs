import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from '../Components/container/Navbar';
import ProyectosPage from '../Components/proyectos/ProyectosPage';
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
                        <Route path="/projects" element={<ProyectosPage />} />                       
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default ContentRoutes