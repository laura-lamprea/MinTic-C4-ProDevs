import { ApolloClient, HttpLink, InMemoryCache} from "@apollo/client"
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});
const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://localhost:4000/graphql'
    }),
    cache: new InMemoryCache()
});

export default client;