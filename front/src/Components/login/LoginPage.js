import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import GET_login from '../../Apollo/gql/login';
import './login.css';
import { useLazyQuery, useQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import notie from 'notie';
import 'notie/dist/notie.css';

const LoginPage = () => {

    const auth = useAuth();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    // const { loading, error, data } = useQuery(GET_login, { variables: { email, password }, });
    const [Login, { data, loading, error }] = useLazyQuery(GET_login);


    useEffect(() => {
        console.log(data)
        if (data) {
            if (data.Login){
            auth.setToken(data.Login.token);
            auth.setUser({ usuario: data.Login.usuario, rol: data.Login.role, id: data.Login.id });
            if (data.Login.role == "Leader") {
                navigate('/users');
            }
            if (data.Login.role == "Student") {
                navigate('/projects');
            }
            if (data.Login.role == "Admin") {
                navigate('/users');
            }
            }else{
                navigate('/login');
            notie.alert({
                type: 'error',
                text: "contraseña incorrecta",
            });
            }
        } 
    }, [data, navigate, auth]);


    const HandleLogin = (e) => {
        // agregar una nueva ruta al stack de navegacion        // navigate('/usuarios')
        const { email, password } = e;
        // reemplazar el historial para no poder regresar a la ruta previa
        Login({ variables: { email, password } });
        console.log("token")
    }

    const HandleLogin2 = (e) => {

        navigate('/register');

    }

    return (
        <form onSubmit={handleSubmit(HandleLogin)}>
            <main className="mainInicioSesion">
                <section className="section1NombreEmpresa sectionInicioSesion">
                    <div>
                        <h1> PRODEVS
                        </h1>
                        <p className="description"><br />
                            This platform is designed for you to manage your academic projects in an easy and intuitive way.
                        </p>

                    </div>
                </section>
                <section className="section2 sectionInicioSesion" >
                    <div className="section2ParteDos">
                        <h2>Log in to Prodevs</h2>

                        <div className="input">
                            <i class="fas fa-users estilo"></i>
                            <h4>¡Welcome!</h4>
                            <i class="fas fa-user-check pad"></i>
                            <input
                                type="text"
                                id="user"
                                className="input_inicio"
                                placeholder="Email"
                                name="password"
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            />

                        </div>

                        <div className="input">
                            <i class="fas fa-unlock pad"></i>
                            <input
                                type="password"
                                className="input_inicio"
                                id="password"
                                placeholder="Password"
                                name="password"
                                {...register("password", { required: true })}
                            />

                        </div>

                        {errors.password && <div className="alert alert-danger mt-2" role="alert">
                            el password es obligatorio
                        </div>}

                        <div className="form-group mt-3">
                            {!loading && <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />}
                            {loading && <button className="btnSubmit" type="button" disabled>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Loading...
                            </button>}
                        </div>

                        <i class="fas fa-users estilo"></i>
                        <h5>¿No estas registrado?</h5>
                        <input type="button" value="Registrarme" onClick={HandleLogin2} className="boton boton_ingreso" />
                    </div>
                    {error && <div className="alert alert-danger" role="alert">
                        Usuario o contraseña incorrectos
                    </div>}

                </section>
                
            </main>
        </form>
        
    )
}

export default LoginPage
