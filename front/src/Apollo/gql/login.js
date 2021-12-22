import { gql } from '@apollo/client'

const GET_login = gql`
query loginIn($email: String!,$password: String!){ 
    Login(email: $email , password:$password)
      { id
    token
    usuario
    role}      
    }
    `;
export default GET_login;