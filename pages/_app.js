import App from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from 'react-apollo';

import client from '../apolloSetup';

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>CUB Hub</title>
          <meta charSet="utf-8" />

        </Head>
        
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </React.Fragment>
    )
  }
}

export default MyApp;