import { gql } from '@apollo/client'

const GET_PROJECT_BY_ID = gql`
    query ProjectById($id: ID!){
        proyectoById(id: $id) {
            id
            id_project
            leader{id_user,name_user,last_name_user}
            project
            general_objectives
            budget
            state_project
            phase
        }
    }
`;

export default GET_PROJECT_BY_ID;