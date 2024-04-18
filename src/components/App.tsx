import React from 'react';
import {createBrowserHistory, RouteComponent, Router} from "react-resource-router";
import {appRoutes} from "../appRoutes";
import BasePage from "../pages/BasePage";

const App: React.FC = () => {
    const history = createBrowserHistory();
    return (
        <Router history={history} routes={appRoutes} plugins={[]}>
            <BasePage>
                <RouteComponent/>
            </BasePage>
        </Router>
    )
}

export default App;
