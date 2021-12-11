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
        <div className="login">
            <div className="row">
                <div className="col-md-6 login-form-1 login-container">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="lEmail"
                            />
                        </div>
                        <div className="form-group mt-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <input
                                type="submit"
                                className="btnSubmit" 
                                value="Login"
                            />
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
