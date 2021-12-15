import { useMutation } from '@apollo/client';
import React from 'react'
import { useForm } from 'react-hook-form';
import SET_PROJECT from '../../../Apollo/gql/setProject';

const CrearProyecto = () => {

    const { register, handleSubmit } = useForm();

    const [addProject] = useMutation(SET_PROJECT);

    const handleCreate = (data) => {
        console.log('crear');
        console.log(data);
        const { id_project, project,  general_objectives, budget, phase } = data;
        addProject({ variables: { id_project, project,  general_objectives, budget , phase } })

    }

    return (
        <form onSubmit={handleSubmit(handleCreate)}>
            <div className="form-group">
                <input type="text" className='form-control mb-3' placeholder="id_project" {...register("id_project", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="project" {...register("project", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="general_objectives" {...register("general_objectives", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="budget" {...register("budget", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="phase" {...register("phase", { required: true })} />
                {/* <select className='form-control mb-3' {...register("rol", { required: true })}>
                    <option value="61b3da5944cb44958d979092">lider</option>
                    <option value="61b3da6a44cb44958d979097">estudiante</option>
                </select> */}

            </div>
            <input type="submit" />

        </form>
    )
}

export default CrearProyecto
