import { gql } from '@apollo/client'

const DELETE_PROJECT = gql`
  mutation deletePro($id: ID!) {            
    deleteProject(id : $id){
      id
      project
    }
  }
`;

export default DELETE_PROJECT;
