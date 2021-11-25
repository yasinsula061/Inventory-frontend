import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import 'font-awesome/scss/font-awesome.scss';
import Loader from './view/layout/Loader'
import Aux from "./hoc/_Aux";
import ScrollToTop from './view/layout/ScrollToTop';
import routes from "./config/route";
import Dashboard from './components/Dashboard/Default.js';
import PrivateRoute from './config/PrivateRoute.js';


const PublicLayout = Loadable({
    loader: () => import('./view/layout/PublicLayout'),
    loading: Loader
});

class App extends Component {

    render() {
        const menu = routes.map((route, index) => {
            return (route.component) ? (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                        <route.component {...props} />
                    )} />
            ) : (null);
        });

        return (
            <Aux>
                <ScrollToTop>
                    <Suspense fallback={<Loader />}>
                        <Switch>
                            {menu}
                            <Route path="/" component={PublicLayout} />
                            <Route exact path="/" component={PublicLayout} />
                            <PrivateRoute path="/dashboard/default" component={Dashboard} />
                        </Switch>
                    </Suspense>
                </ScrollToTop>
            </Aux>
        );
    }
}

export default App;
