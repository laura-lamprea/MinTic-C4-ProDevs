import React from 'react'
import { Routes, Route } from "react-router-dom";
import { AvancePage } from '../Components/avances/AvancePage';
import Navbar from '../Components/container/Navbar';
import { InscripcionesPage } from '../Components/inscripciones/InscripcionesPage';
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
                        {/* <Route path="users/:action" element={<UsuarioPage/>} /> */}
                        <Route path="users" element={<UsuarioPage/>} />
                        <Route path="projects" element={<ProyectosPage/>} />
                        <Route path="Registro" element={<RegistroPage/>} />
                        <Route path="inscripciones" element={<InscripcionesPage/>} />
                        <Route path="avances" element={<AvancePage/>} />
                        
                        <Route path="/" element={< UsuarioPage />} />
                        {/* <Route path="/users" element={<UsuarioPage />} />
                        <Route path="/projects/:action" element={<ProyectosPage />} />      
                        <Route path="/projects" element={<ProyectosPage />} />                      */}
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default ContentRoutes