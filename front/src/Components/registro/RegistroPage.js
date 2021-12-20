import { useMutation } from '@apollo/client'
import React, {useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import GET_USERS from '../../Apollo/gql/setUsuario';
import SET_USUARIO from '../../Apollo/gql/setUsuario'
import LogoProdevs from '../media/Logo_ProDevs.png'
import './Registro.css'

const RegistroPage = () => {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    
    const [addUser, { data, loading, error}] = useMutation(SET_USUARIO);

    useEffect(() => {
        if (data) {
            console.log('data', data);
            
            navigate('/users', {
                replace:true
            })
        }
    }, [data])

    const handleCreate = (args) => {
        console.log("crear");
        console.log(data);

        const { name_user, last_name_user, email, password, role, state_user } = args;

        addUser({ variables: { name_user, email, password, role, state_user } })

      
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
                    <input type="text"  class="input_field" className='form-control mb-3' placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    <input type="password"  class="input_field" className='form-control mb-3' placeholder="Password" {...register("password", { required: true })} />
                    <select placeholder=''  class="input_field" className='form-control mb-3' {...register("role", { required: true })}>
                        <option value="Administrador">Admin</option>
                        <option value="Leader">Lider</option>
                        <option value="Student">Estudiante</option>

                    </select>

                </div>
                <input type="submit" />

            </form>

        </div>

      
    )

}

export default RegistroPage
