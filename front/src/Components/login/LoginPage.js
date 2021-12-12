import React from 'react'
import { useNavigate } from 'react-router-dom';
import GET_login from '../../Apollo/gql/login';
import './login.css';
import { useQuery } from '@apollo/client';
const LoginPage = () => {

    const navigate = useNavigate();    
    //const [loginn]=useQuery(GET_login)
    const email="laura.lampream@gmail.com"
    const password= "admin1234"
    

    const handleLogin = (e) => {
        e.preventDefault();// agregar una nueva ruta al stack de navegacion        // navigate('/usuarios')
        console.log("prueba")
        //loginn({variables:{email,password}})
        // reemplazar el historial para no poder regresar a la ruta previa
        const rol = "leaer"
        if (rol == "leader") {
            navigate('/projects', {
                replace: true
            })
        }
        else {
            navigate('/users', {
                replace: true
            })
            console.log('login');
        }

    }

    return (
        <div className="login">
            <div className="row">
                <div className="col-md-6 login-form-1 login-container">
                    <h3>Log in to ProDevs</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name="lEmail"
                            />
                        </div>
                        <div className="form-group mt-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
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
