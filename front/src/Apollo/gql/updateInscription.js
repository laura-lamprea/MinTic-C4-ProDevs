import { gql } from '@apollo/client'

const UPDATE_INSCRIPTION = gql`
        mutation updateInscripcion($id: ID, $state_inscription: String) {            
            updateStateInscriptions(inscription : {
            id:$id
            state_inscription: $state_inscription
        }) {
            state_inscription
        }               
    }
`;

export default UPDATE_INSCRIPTION;