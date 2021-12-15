import { gql } from '@apollo/client'

const SET_PROJECT = gql`
    mutation setProject($id_project: String!, $project: String!, $general_objectives: String!, $budget: String!, $phase: String!) {            
        addProject(project : {
            id_project: $id_project,
            project: $project,
            # leader
            general_objectives: $general_objectives,
            # especificos
            budget: $budget,
            phase: $phase
        }) {
            id_project
            project
            general_objectives
            budget
            # date_start
            # date_finish
            # state_project
            phase
        }               
    }
`;

export default SET_PROJECT;