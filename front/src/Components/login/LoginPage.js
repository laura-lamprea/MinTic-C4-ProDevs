import React from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css';

const LoginPage = () => {    

    const navigate = useNavigate();

    const handleLogin = (e) => {

        e.preventDefault();
        // agregar una nueva ruta al stack de navegacion
        // navigate('/usuarios')

        // reemplazar el historial para no poder regresar a la ruta previa
        navigate('/usuarios', {
            replace: true
        })
        console.log('login');
    }
    return (
        <main className="mainInicioSesion">
            <section className="section1NombreEmpresa sectionInicioSesion">
                <div>
                    <h1> PRODEVS
                    </h1>
                    <p className ="description">Gestión de Proyectos.<br />
                    Esta plataforma esta diseñada para que gestiones tus proyectos academicos de forma facil e intuitiva.
                    </p>
                </div>
            </section>
            <section className="section2 sectionInicioSesion" >
                <div className="section2ParteDos">
                    <h2>Iniciar sesión</h2>
                                     
                    <div className="input">
                        <i class="fas fa-users estilo"></i>
                        <h4>¡Bienvenido!</h4>
                        <i class="fas fa-user-check pad"></i><input type="text" id="user" placeholder="Usuario..." className="input_inicio" required />
                    </div>
                    <div className="input">
                        <i class="fas fa-unlock pad"></i>
                        <input className="input_inicio" type="password" placeholder="Contraseña..." id="password" required />
                    </div>
                   
                        <input type="button" value="¡Ingresar ahora!" onClick={handleLogin} className="boton boton_ingreso"  />
                    
                </div> 
            </section>
        </main>
    )
}

export default LoginPage
