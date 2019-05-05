import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { gql } from 'apollo-boost';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
        authorization: `Bearer ${process.env.REACT_APP_GIT_TOKEN}`,
    },
    cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
    {
        __type:user(login: "CissiWong") {
          name
        }
      }`
  })
  .then(result => console.log(result));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();