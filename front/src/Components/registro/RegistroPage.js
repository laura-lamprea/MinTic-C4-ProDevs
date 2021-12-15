import { useMutation } from '@apollo/client'
import React from 'react'
import { useForm } from 'react-hook-form'
import SET_USUARIO from '../../Apollo/gql/setUsuario'
import LogoProdevs from '../media/Logo_ProDevs.png'
import './Registro.css'

const RegistroPage = () => {

    const { register, handleSubmit } = useForm();

    const [addUser] = useMutation(SET_USUARIO);

    const handleCreate = (data) => {
        console.log("crear");
        console.log(data);

        const { name_user, last_name_user, email, password, role, state_user } = data;

        addUser({ variables: { name_user, last_name_user, email, password, role, state_user } })


    }

    return (

        <div className='wrapper'>
            <div className="container">
                <img src={LogoProdevs} width="100%" />
            </div>
            <div class="title">
                Formulario de Registro
                /    </div>

            <form onSubmit={handleSubmit(handleCreate)}>

                <div className="form-group">
                    {/* <input type="text"  class="input_field" className='form-control mb-3' placeholder="ID_user" {...register("id_user", { required: true })} />     */}
                    <input type="text"  class="input_field" className='form-control mb-3' placeholder="Nombre" {...register("name_user", { required: true })} />
                    <input type="text"  class="input_field" className='form-control mb-3' placeholder="Apellido" {...register("last_name_user", { required: true })} />
                    <input type="text"  class="input_field" className='form-control mb-3' placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    <input type="password"  class="input_field" className='form-control mb-3' placeholder="Password" {...register("password", { required: true })} />
                    <select placeholder=''  class="input_field" className='form-control mb-3' {...register("role", { required: true })}>
                        <option value="Administrador">Administrador</option>
                        <option value="Lider">Lider</option>
                        <option value="Estudiante">Estudiante</option>

                    </select>

                </div>
                <input type="submit" />

            </form>

        </div>

      
    )

    // return (
    // <div className='wrapper'>
    //     <div className="container">
    //     <img src={LogoProdevs} width="100%"/>
    //     </div>
    //     <div class="title">
    //         Formulario de Registro
    //     </div>
    //     <div class="form">
    //         <div class="input_field">
    //             <label>Nombre</label>
    //             <input type="text" class="input"{...register("name_user",{required: true})}/>
    //         </div>
    //         <div class="input_field">
    //             <label>Apellido</label>
    //             <input type="text" class="input"{...register("last_name_user",{required: true})}/>
    //         </div>
    //         <div class="input_field">
    //             <label>Contraseña</label>
    //             <input type="password" class="input" {...register("password",{required: true})}/>
    //         </div>
    //         <div class="input_field">
    //             <label>Correo Electrónico</label>
    //             <input type="text" class="input"{...register("email",{required: true})}/>
    //         </div>
    //         <div class="input_field">
    //             <label>Tipo de usuario</label>
    //             <div class="custom_select" {...register("role",{required: true})}>
    //                 <select>
    //                     <option value=""></option>
    //                     <option value="Administrador">Administrador</option>
    //                     <option value="Lider">Lider</option>
    //                     <option value="Estudiante">Estudiante</option>
    //                 </select>
    //             </div>
    //         </div>
    //         <div class="input_field">
    //             <input type="submit" value="Registro" class="btn" onClick={handleSubmit(handleCreate)}/>
    //         </div>
    //         </div>
    //     </div>    

    // )
}

export default RegistroPage
