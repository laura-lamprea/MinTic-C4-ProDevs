import { gql } from '@apollo/client'

const UPDATE_USER = gql`
        mutation updateProfileUser($id: ID, $id_user: String,  $name_user: String, $last_name_user: String, $email: String, $password: String, $role: String, $state_user: String) {            
            updateProfileUser(user:{
            id: $id,
            id_user: $id_user
            name_user: $name_user,
            last_name_user: $last_name_user,
            email: $email,
            password:$password ,
            role: $role,
            state_user: $state_user
            
        }){
            id
            id_user
            name_user
            last_name_user
            email
            password
            role
            state_user
            }
        }`;

export default UPDATE_USER;