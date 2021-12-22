import { gql } from '@apollo/client'

const SET_PROJECT = gql`
    mutation setProject($id_project: String!, $project: String!,$leader: ID, $general_objectives: String, $budget: String) {            
        addProject(project : {
            id_project: $id_project,
            project: $project,
            leader:$leader,
            general_objectives: $general_objectives,
            # especificos
            budget: $budget,

        }) {
            id_project
            project
            general_objectives
            budget
            date_start
            date_finish
            state_project

        }               
    }
`;

export default SET_PROJECT;