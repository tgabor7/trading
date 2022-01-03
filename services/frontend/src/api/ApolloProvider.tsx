import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { APOLLO_ENDPOINT } from "../config/config"

const client = new ApolloClient({
    uri: APOLLO_ENDPOINT,
    cache: new InMemoryCache()
})

const MyApolloProvider = ({ children }: any): JSX.Element => {
    return (<ApolloProvider client={client} >
        {children}
    </ApolloProvider>)
}
export default MyApolloProvider