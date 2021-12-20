import React from 'react'
import { Routes, Route } from "react-router-dom";
import { AvancePage } from '../Components/avances/AvancePage';
import Navbar from '../Components/container/Navbar';

import InscripcionPage from '../Components/inscripciones/InscripcionPage';
import ProyectosPage from '../Components/proyectos/ProyectosPage';
import RegistroPage from '../Components/registro/RegistroPage';
import UsuarioPage from '../Components/usuarios/UsuarioPage';
import LoginPage from '../Components/login/LoginPage';
import DetailsPage from '../Components/proyectos/listar/DetailsPage';



const ContentRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Routes>
                        {/* <Route path="/users/:action" element={<EditarUsuario/>} /> */}
                        <Route path="/users" element={<UsuarioPage />} />
                        <Route path="/users/:action" element={<UsuarioPage />} />
                        <Route path="/projects/:action" element={<ProyectosPage />} />
                        <Route path="/projects" element={<ProyectosPage />} />
                        <Route path="/inscription" element={<InscripcionPage />} />
                        <Route path="/details" element={<DetailsPage/>} />
                        <Route path="/details/:action" element={<DetailsPage />} /> 
                        <Route path="/register" element={<RegistroPage />} />
                        <Route path="/progress" element={<AvancePage />} />
                        <Route path="/progress/:action" element={<AvancePage />} />
                        <Route path="/" element={< LoginPage />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default ContentRoutes