import React, {Fragment, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {routes} from "../router/Main";
import Header from "../component/Header/Header";
import "../style/Global.css";
import Player from "../container/Player/Player";
import {MusicContext, musics, currentMusic} from "../context/MusicContext";

const Main = () => {
    const [current, setCurrent] = useState(currentMusic);
    const [musicsContext, setMusicsContext] = useState(musics);

    const changePlaylist = newPlaylist => {
        setMusicsContext(newPlaylist);
    };

    const setCurrentMusic = id => {
        setCurrent(id);
    };

    const context = {
        musics: musicsContext,
        currentMusic: current,
        changePlaylist,
        setCurrentMusic,
    };

    return (
        <Router basename={"/"}>
            <MusicContext.Provider value={context}>
                <Fragment>
                    <div className={"main"}>
                        <Header />
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
                    </div>
                    <Player current={current} playlist={musicsContext} />
                </Fragment>
            </MusicContext.Provider>
        </Router>
    );
};

export default Main;
