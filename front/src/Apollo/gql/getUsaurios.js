import { gql } from '@apollo/client'

const GET_USUARIOS = gql`
        query {            
            usuarios {
                id
                nombre
                apellido
                email
            }               
        }
    `;

export default GET_USUARIOS;