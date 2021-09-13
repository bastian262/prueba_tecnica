import React from 'react';
import {Router, Route, Switch, Redirect } from 'react-router-dom'
import {createBrowserHistory} from 'history';
import ProductPage from '../pages/product/productPage';
import ContactPage from '../pages/contact/contactPage';
import CartPage from '../pages/cart/cart';
const history = createBrowserHistory();
const AppRouter = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={ProductPage} />
                <Route exact path="/contact" component={ContactPage} />
                <Route exact path="/cart" component={CartPage} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}
 
export default AppRouter;