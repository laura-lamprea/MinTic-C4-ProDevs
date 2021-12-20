import { gql } from '@apollo/client'

const UPDATE_PROJECT = gql`
        mutation updateProyecto($id: ID, $project: String, $general_objectives: String, $budget: String, $state_project: String, $phase: String) {            
            updateProject(project : {
            id:$id
            project: $project,
            general_objectives: $general_objectives,
            # especificos
            budget: $budget,
            state_project: $state_project,
            phase: $phase
        }) {
            id
            project
            general_objectives
            budget
            state_project
            phase
        }               
    }
`;

export default UPDATE_PROJECT;