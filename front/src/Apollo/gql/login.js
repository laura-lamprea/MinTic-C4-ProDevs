import { gql } from '@apollo/client'

const GET_login = gql`
query loginp($email1: String, $password1:String){
    Login(email:$email1, password:$password1)
    }
    `;
export default GET_login;