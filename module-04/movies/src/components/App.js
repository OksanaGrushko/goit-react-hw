import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';

import routes from '../routes';

export default class App extends Component {
    state = {};
    render() {
        const appRoutes = routes.filter(
            route => route.label !== 'Cast' && route.label !== 'Revievs',
        );
        return (
            <Layout>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Switch>
                        {appRoutes.map(route => (
                            <Route
                                key={route.path}
                                exact={route.exact}
                                {...route}
                            />
                        ))}
                    </Switch>
                </Suspense>
            </Layout>
        );
    }
}
