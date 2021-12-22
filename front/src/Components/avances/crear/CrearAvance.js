import { useMutation } from '@apollo/client';
import React, { useEffect } from 'react'
import { useForm,  useNavigate  } from 'react-hook-form';
import SET_PROJECT from '../../../Apollo/gql/setProject';
import GET_PROJECTS from '../../../Apollo/gql/getProjects';

const CrearAvance = () => {

    const { register, handleSubmit } = useForm();

    const [addProject, { data, loading, error }] = useMutation(SET_PROJECT, {
        refetchQueries: [{
            query: GET_PROJECTS
        }]
    });

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
        const { id_project, project, general_objectives, budget, phase } = data;
        addProject({ variables: { id_project, project, general_objectives, budget, phase } })

    }

    return (
        <form onSubmit={handleSubmit(handleCreate)}>
            <div className="form-group">
            <input type="text" className='form-control mb-3' placeholder="Date progress" {...register("id_project", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Descript" {...register("project", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Obsers" {...register("general_objectives", { required: true })} />
            </div>
            <input type="submit" />

        </form>
    )
}

export default CrearAvance



