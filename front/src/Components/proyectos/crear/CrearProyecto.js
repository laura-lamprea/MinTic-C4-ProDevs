import { useMutation } from '@apollo/client';
import React, { useEffect } from 'react'
import { useForm, useNavigate } from 'react-hook-form';
import SET_PROJECT from '../../../Apollo/gql/setProject';
import GET_PROJECTS from '../../../Apollo/gql/getProjects';



const CrearProyecto = () => {

    const { register, handleSubmit } = useForm();

    const [addProject, { data, loading, error }] = useMutation(SET_PROJECT, {
        refetchQueries: [{
            query: GET_PROJECTS
        }]
    });

    

    const handleCreate = (data) => {
        console.log('crear');
        console.log(data);
        // const phase="Initiated"
        const { id_project, project, general_objectives, budget,leader } = data;
        // console.log(id_project, project, general_objectives, budget,leader );
        addProject({ variables: { id_project, project, leader, general_objectives, budget} })

    }

    return (
        <form onSubmit={handleSubmit(handleCreate)}>
            <div className="form-group">
                <input type="text" className='form-control mb-3' placeholder="ID project" {...register("id_project", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Project" {...register("project", { required: true })} />
                {/* <input type="text" className='form-control mb-3' placeholder="Leader1" {...register("leader1", { required: true })} /> */}

                <input type="text" className='form-control mb-3' placeholder="General objectives" {...register("general_objectives", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Budget" {...register("budget", { required: true })} />
                <select className='form-control mb-3' {...register("leader", { required: true })}>
                    <option value="61c10e211123f8c2d1be0b3c">lider</option>
                    <option value="61c10e211123f8c2d1be0b3c">estudiante</option>
                </select>

            </div>
            
            <input type="submit" />

        </form>
    )
}

export default CrearProyecto
