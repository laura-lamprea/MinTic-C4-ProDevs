import { gql } from '@apollo/client'

const SET_INSCRIPTION = gql`
        mutation setInscription($student: ID!, $id_Dproject: ID!, $state_inscription:String, $date_admission:String, $egress_date:String) {            
            addInscription(inscription:{  
                # id_inscription:$id_inscription,              
                student: $student,
                id_Dproject: $id_Dproject,   
                state_inscription:$state_inscription,
                date_admission:$date_admission,
                egress_date:$egress_date             
            }) {
                student{name_user}
                id_Dproject{id_project}
                state_inscription	
                date_admission
                egress_date
            }
        }
    `;

export default SET_INSCRIPTION;