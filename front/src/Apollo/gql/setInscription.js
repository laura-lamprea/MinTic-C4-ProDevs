import { gql } from '@apollo/client'

const SET_INSCRIPTION = gql`
        mutation setInscription($student: ID!, $idproject: ID!) {            
            addInscription(inscription:{                
                student: $student,
                idproject: $idproject,                  
            }) {
                student{name_user}
                idproject{id_project}
                state_inscription	
                date_admission
                egress_date
            }
        }
    `;

export default SET_INSCRIPTION;