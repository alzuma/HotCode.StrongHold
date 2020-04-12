import "./index.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {ApolloProvider as ApolloHooksProvider} from 'react-apollo-hooks';
import * as serviceWorker from './serviceWorker';
import Admin from "./layouts/Admin";
import { Router, Route, Switch, Redirect} from "react-router-dom";
import {createBrowserHistory} from "history";
import {CssBaseline} from "@material-ui/core";

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
});

const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <ApolloHooksProvider client={client}>
                <CssBaseline />
                <Router history={history}>
                    <Switch>
                        <Route path="/admin" component={Admin} />
                        <Redirect from="/" to="/admin/dashboard" />
                    </Switch>
                </Router>
            </ApolloHooksProvider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
