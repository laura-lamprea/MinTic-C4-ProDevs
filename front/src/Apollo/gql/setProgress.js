import { gql } from '@apollo/client'

const SET_PROGRESS = gql`
        mutation setUsuario($date_progress: String!, $descript: String!, $obsers: String!) {            
            addProgress(progress:{                
                date_progress: $date_progress,
                descript: $date_progress,
                obsers: $obsers,                     
            }) {
                date_progress
                descript
                obsers
            }
        }
    `;

export default SET_PROGRESS;