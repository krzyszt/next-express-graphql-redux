import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';

import client from '../src/apolloSetup';
import setupStore from '../src/reduxSetup';
import getPageContext from '../src/getPageContext';

const store = setupStore();

class MyApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  renderReduxApolloWrapper = (Component, pageProps) => (
    <Provider store={store}>
          <ApolloProvider client={client}>
            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server-side. */}
            <Component pageContext={this.pageContext} {...pageProps} />
          </ApolloProvider>
        </Provider>
  );

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>Next, Express, GraphQL, Redux, RXJS</title>
          <meta charSet="utf-8" />
        </Head>
         {/* Wrap every page in Jss and Theme providers */}
         <JssProvider registry={this.pageContext.sheetsRegistry} generateClassName={this.pageContext.generateClassName}>
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
              {this.renderReduxApolloWrapper(Component, pageProps)}
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    )
  }
}

export default MyApp;