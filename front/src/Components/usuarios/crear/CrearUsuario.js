import { useMutation } from '@apollo/client';
import React from 'react'
import { useForm } from 'react-hook-form';
import SET_USUARIO from '../../../Apollo/gql/setUsuario';

const CrearUsuario = () => {

    const { register, handleSubmit } = useForm();

    const [crearUsuario] = useMutation(SET_USUARIO);

    const handleCreate = (data) => {
        console.log('crear');
        console.log(data);

        const { nombre, apellido, email, password, rol } = data;

        crearUsuario({ variables: { nombre, apellido, email, password, rol } })

    }

    return (
        <form onSubmit={handleSubmit(handleCreate)}>
            <div className="form-group">
                <input type="text" className='form-control mb-3' placeholder="Nombre" {...register("nombre", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Apellido" {...register("apellido", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input type="password" className='form-control mb-3' placeholder="Password" {...register("password", { required: true })} />
                <select className='form-control mb-3' {...register("rol", { required: true })}>
                    <option value="61b3da5944cb44958d979092">lider</option>
                    <option value="61b3da6a44cb44958d979097">estudiante</option>
                </select>

            </div>
            <input type="submit" />

        </form>
    )
}

export default CrearUsuario
