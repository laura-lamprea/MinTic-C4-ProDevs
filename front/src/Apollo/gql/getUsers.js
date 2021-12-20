import { gql } from '@apollo/client'

const GET_USUARIOS = gql`
        query {            
            Usuarios {
                id
                name_user
                email
            }               
        }
    `;

export default GET_USUARIOS;