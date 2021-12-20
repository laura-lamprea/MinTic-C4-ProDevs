import { useMutation } from '@apollo/client';
import React, { useEffect } from 'react'
import { useForm,  useNavigate  } from 'react-hook-form';
import SET_PROJECT from '../../../Apollo/gql/setProject';
import GET_PROJECTS from '../../../Apollo/gql/getProjects';

const CrearProyecto = () => {

    const { register, handleSubmit } = useForm();

    const [addProject, { data, loading, error }] = useMutation(SET_PROJECT, {
        refetchQueries: [{
            query: GET_PROJECTS
        }]
    });

    const IDprueba = '61c01439e46e74fb1ec51136';
    

    // useEffect(() => {
    //     if (data) {
    //         console.log('data', data);
    //         navigate('/projects', {
    //             replace: true
    //         })
    //     }
    // }, [data])

    const handleCreate = (data) => {
        console.log('crear');
        console.log(data);
        const { id_project, project, leader, general_objectives, budget, phase } = data;
        addProject({ variables: { id_project, project, leader, general_objectives, budget, phase } })

    }

    return (
        <form onSubmit={handleSubmit(handleCreate)}>
            <div className="form-group">
                <input type="text" className='form-control mb-3' placeholder="ID project" {...register("id_project", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Project" {...register("project", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Leader" {...register("leader", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="General objectives" {...register("general_objectives", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Budget" {...register("budget", { required: true })} />
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
