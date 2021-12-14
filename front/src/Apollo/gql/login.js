import { gql } from '@apollo/client'

const GET_login = gql`
query loginIn($email: String!,$password: String!){ 
    Login(email: $email , password:$password)        
    }
    `;
export default GET_login;