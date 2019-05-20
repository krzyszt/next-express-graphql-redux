import App from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';

import client from '../apolloSetup';
import setupStore from '../reduxSetup';

const store = setupStore();

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Next, Express, GraphQL, Redux, RXJS</title>
          <meta charSet="utf-8" />
        </Head>
        
        <Provider store={store}>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Provider>
      </React.Fragment>
    )
  }
}

export default MyApp;