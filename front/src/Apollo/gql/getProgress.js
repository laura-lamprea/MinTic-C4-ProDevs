import { gql } from '@apollo/client'

const GET_PROGRESS = gql`
    query {
        Avances{
        n_project{project}
        date_progress
        descript
        obsers
  }
    }
`;

export default GET_PROGRESS;