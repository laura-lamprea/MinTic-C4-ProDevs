import { gql } from '@apollo/client'

const SET_USUARIO = gql`
        mutation setUsuario($name_user: String!, $last_name_user: String!, $email: String!, $password: String!, $role: String!) {            
            addUser(user:{                
                name_user: $name_user,
                last_name_user: $last_name_user,
                email: $email,
                password: $password,
                role: $role                        
            }) {
                id
                name_user
                last_name_user
                email
                password
                role
            }
            }
    `;

export default SET_USUARIO;