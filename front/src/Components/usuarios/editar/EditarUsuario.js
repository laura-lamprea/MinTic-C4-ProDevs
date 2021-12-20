import { useQuery } from '@apollo/client';
import React from 'react'
import { useForm } from 'react-hook-form';
import GET_USER_BY_ID from '../../../Apollo/gql/getUsuarioById';
import UPDATE_USER from '../../../Apollo/gql/'


const EditarUsuario = ({ userid }) => {

    //console.log('userid', userid);

    const { register, handleSubmit } = useForm();
    const { loading, data, error } = useQuery(GET_USER_BY_ID, { variables: { id: userid } });

    const handleUpdate = (args) => {
        const { id_user, name_user, last_name_user, email, password, role, state_user } = args;
        console.log(id_user, name_user, last_name_user, email, password, role, state_user);
        updateUsers({ variables: {id_user, name_user, last_name_user, email, password, role, state_user} })
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
                        <option>Admin</option>
                        <option >Leader</option>
                        <option >Student</option>
                    </select>
                </div>
                <input className='btn btn-success' type="submit" />

            </form>}
        </>

    )
}

export default EditarUsuario
