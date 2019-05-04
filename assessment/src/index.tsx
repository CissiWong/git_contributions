import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './index.css';
import App from './App';
import { Hello } from "./components/Hello";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<App />,
=======
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  link: new HttpLink({ 
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: `bearer ${process.env.GIT_TOKEN}`,
    }
}),
  cache: new InMemoryCache(),
});

ReactDOM.render(
<ApolloProvider client={client}> 
<App />
</ApolloProvider>, 
>>>>>>> 760d7e722f1bd222a1e84443d49b1b0f0caa2b9b
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
