import React, { Component } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import AppSync from './AppSync';
import AWSAppSyncClient from "aws-appsync";
import { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";
import { ApolloProvider } from 'react-apollo';


class App extends Component {

  static CLIENT = new AWSAppSyncClient({
    url:    AppSync.graphqlEndpoint,
    region: AppSync.region,
    auth:   {
      type:   AUTH_TYPE.API_KEY,
      apiKey: AppSync.apiKey
    }
  });

  render () {
    return (
      <ApolloProvider client={App.CLIENT}>
        <div className="App">
          <Header/>
          <Main/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
