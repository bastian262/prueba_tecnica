import React from 'react';
import {Router, Route, Switch, Redirect } from 'react-router-dom'
import {createBrowserHistory} from 'history';
import ProductPage from '../pages/product/productPage';
const history = createBrowserHistory();
const AppRouter = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" component={ProductPage} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}
 
export default AppRouter;