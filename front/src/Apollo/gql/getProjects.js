import { gql } from '@apollo/client'

const GET_PROJECTS = gql`
    query {
        Proyectos{
            id
            id_project
            project
            leader{id_user,name_user,last_name_user}
            general_objectives
            specific_objectives {item}
            budget
            date_start
            date_finish
            state_project
            phase
        } 
    }
`;

export default GET_PROJECTS;


