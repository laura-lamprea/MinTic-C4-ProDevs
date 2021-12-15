import { gql } from '@apollo/client'

const DELETE_PROJECT = gql`
  mutation deletePro($id: ID!) {            
    deleteProject(id : $id)
  }
`;

export default DELETE_PROJECT;
