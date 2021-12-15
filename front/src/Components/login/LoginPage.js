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

    const HandleLogin2 = (e) => {
        
        navigate('/Register');

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
{/* 
                    {errors.email?.type === "required" && <div className="alert alert-danger mt-2" role="alert">
                            el correo es obligatorio
                        </div>}

                        {errors.email?.type === "pattern" && <div className="alert alert-danger mt-2" role="alert">
                            el correo no tiene el formto correcto
                        </div>} */}

                    <div className="input">
                        <i class="fas fa-unlock pad"></i>
                        <input className="input_inicio" type="password" placeholder="Contraseña..." id="password" required />
                    </div>

                  
                        {/* <div className="form-group mt-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="password"
                                {...register("password", { required: true })}
                            />
                        </div>

                        {errors.user && <div className="alert alert-danger mt-2" role="alert">
                            el password es obligatorio
                        </div>} */}
                   
                        <input type="button" value="¡Ingresar ahora!" onClick={HandleLogin} className="boton boton_ingreso"  />
                    <div>
                        <i class="fas fa-users estilo"></i>
                        <h5>¿No estas registrado?</h5>
                        <input type="button" value="Registrarme" onClick={HandleLogin2} className="boton boton_ingreso"  />
                    </div>


                </div> 
            </section>
        </main>
    )
}

export default LoginPage
