import { gql } from '@apollo/client'

const GET_INSCRIPTION = gql`
    query {
        Inscripciones{
            id_Dproject{id_project}
            student{name_user}
            state_inscription
            date_admission
            egress_date
        } 
    }
`;

export default GET_INSCRIPTION;