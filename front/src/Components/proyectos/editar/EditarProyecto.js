//escribiendo rafc se genera codigo
import React from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { NavLink, useParams } from 'react-router-dom'
//import UPDATE_PROJECT from '../../../Apollo/gql/updateProjects';
import { useForm } from 'react-hook-form';
import GET_PROJECT_BY_ID from '../../../Apollo/gql/getProjectById';
import UPDATE_PROJECT from '../../../Apollo/gql/updateProjects';

export const EditarProyecto = ({ projectid }) => {

    // console.log('projectid', projectid);

    const { register, handleSubmit } = useForm();
    const { loading, data, error } = useQuery(GET_PROJECT_BY_ID, { variables: { id: projectid } });
    const [updateProject] = useMutation(UPDATE_PROJECT,{ variables: { id: projectid } } );

    const handleUpdate = (data1) => {
        const { id_project, project, general_objectives, budget, phase } = data1;
        console.log(id_project, project, general_objectives, budget, phase )
        updateProject({ variables: { id_project, project, general_objectives, budget, phase } })
    }

    return (
        <>
             {/* {data && <h1>datos</h1>} */}
             {error && <h1>error</h1>}
            {loading && <h1>datos</h1>}
            {data && <form onSubmit={handleSubmit(handleUpdate)}>
                <div className="form-group">
                    <a class="navbar-brand">UPDATE PROJECT</a>
                    <input type="text" className='form-control mb-3' defaultValue={data.proyectoById.project} placeholder="Project" {...register("project")} />
                    <input type="text" className='form-control mb-3' defaultValue={data.proyectoById.general_objectives} placeholder="General objective" {...register("general_objectives")} />
                    <input type="text" className='form-control mb-3' defaultValue={data.proyectoById.budget} placeholder="Budget" {...register("budget")} />
                    <input type="text" className='form-control mb-3' defaultValue={data.proyectoById.state_project} placeholder="State project" {...register("state_project")} />
                    <input type="text" className='form-control mb-3' defaultValue={data.proyectoById.phase} placeholder="Phase" {...register("phase")} />
                </div>
                <input className='btn btn-success' type="submit" />

            </form>}
            
        </>
    )
}

export default EditarProyecto