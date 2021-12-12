import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from '../Components/container/Navbar';
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
                        <Route path="usuarios" element={<UsuarioPage/>} />
                        <Route path="proyectos" element={<ProyectosPage/>} />
                        <Route path="Registro" element={<RegistroPage/>} />
                        
                        <Route path="/" element={< UsuarioPage />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default ContentRoutes