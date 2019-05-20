import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HTTPLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';

const uri = '';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // do something with graphql error
  }

  if (networkError) {
    // do something with network errors
  }
});

const httpLink = new HTTPLink({
  uri,
  headers: {
    
  }
});

const link = ApolloLink.from([errorLink, httpLink]);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache
});

export default client;