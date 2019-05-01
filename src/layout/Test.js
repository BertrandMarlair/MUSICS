import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {routes} from "../router/Test";
import Header from "../component/Header/Header";
import "../style/Global.css";

const Test = () => (
    <Router basename={"/test"}>
        <Fragment>
            <Header />
            <Header />
            test
            <Switch>
                {routes.map(({component, name, path, exact}) => (
                    <Route
                        path={path}
                        component={component}
                        key={name}
                        exact={exact}
                    />
                ))}
            </Switch>
        </Fragment>
    </Router>
);

export default Test;
