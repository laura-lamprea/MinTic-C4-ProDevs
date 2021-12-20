import { useQuery } from '@apollo/client';
import React from 'react'
import { useForm } from 'react-hook-form';
import GET_USUARIO_BY_ID from '../../../Apollo/gql/getUsuarioById';


const EditarUsuario = ({ userid }) => {

    console.log('userid', userid);

    const { register, handleSubmit } = useForm();

    const { loading, data, error } = useQuery(GET_USUARIO_BY_ID, { variables: { id: userid } });


    const handleUpdate = (args) => {
        console.log('prueba')
        const { name_user, last_name_user, email, password, role } = args;

        console.log(name_user, last_name_user, email, password, role);
    }

    return (
        <>
            {/* {data && <h1>datos</h1>} */}
            {error && <h1>error</h1>}
            {loading && <h1>datos</h1>}
            {data && <form onSubmit={handleSubmit(handleUpdate)}>
                <div className="form-group">
                    <input type="text" className='form-control mb-3' defaultValue={data.UsuarioById.name_user} placeholder="Nombre" {...register("name_user", { required: true })} />
                    <input type="text" className='form-control mb-3' defaultValue={data.UsuarioById.last_name_user} placeholder="Apellido" {...register("last_name_user", { required: true })} />
                    <input type="text" className='form-control mb-3' defaultValue={data.UsuarioById.email} placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    <input type="password" className='form-control mb-3' defaultValue={data.UsuarioById.password} placeholder="Password" {...register("password", { required: true })} />
                    <select className='form-control mb-3' {...register("rol", { required: true })}>
                        <option value="61b3da5944cb44958d979092">lider</option>
                        <option value="61b3da6a44cb44958d979097">estudiante</option>
                    </select>

                </div>
                <input className='btn btn-success' type="submit" />

            </form>}
        </>

    )
}

export default EditarUsuario
