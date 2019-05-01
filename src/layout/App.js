import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {routes} from "../router/Router";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {main, secondary} from "../style/Constant";

const App = () => {
    const theme = createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main,
            },
            secondary: {
                main: secondary,
            },
        },
        primary: {
            main,
        },
        secondary: {
            main: secondary,
        },
        typography: {
            useNextVariants: true,
        },
        overrides: {
            MuiButton: {
                root: {
                    borderRadius: 30,
                    border: 0,
                    padding: "0 30px",
                },
            },
            MuiPaper: {
                elevation2: {
                    boxShadow: "0 4px 111px rgba(0,0,0,.2)",
                    borderRadius: 10,
                    border: "1px solid rgba(0,0,0,.1)",
                },
            },
            MuiTypography: {
                root: {
                    padding: "0 !important",
                    overflow: "hidden",
                },
            },
        },
    });

    return (
        <MuiThemeProvider theme={theme}>
            <Router>
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
            </Router>
        </MuiThemeProvider>
    );
};

export default App;
