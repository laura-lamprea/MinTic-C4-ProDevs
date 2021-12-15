import React from 'react'
import { useNavigate } from 'react-router-dom';
import GET_login from '../../Apollo/gql/login';
import './login.css';
import { useQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm()


    const Loginn = ({ email, password }) => {
        const { loading, error, data } = useQuery(GET_login, { variables: { email, password }, });

        if (loading) return null;
        if (error) return `Error! ${error}`;

        return (
            console.log('entro2' + data.Login)
        );
    }



    const HandleLogin = (e) => {
        // agregar una nueva ruta al stack de navegacion        // navigate('/usuarios')
        const email=e.email
        const password=e.password
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
                    <form onSubmit={handleSubmit(HandleLogin)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                {...register("email", { required: true })}                                
                            />
                        </div>
                        <div className="form-group mt-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                {...register("password", { required: true })}
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
