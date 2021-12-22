import { gql } from '@apollo/client'

const GET_USUARIO_BY_ID = gql`
    query UserById($id: ID!){
        usuarioById(id: $id) {
            id
            id_user
            email
            name_user
            last_name_user
            password
        }
    }
`;

export default GET_USUARIO_BY_ID;