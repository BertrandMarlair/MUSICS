/* eslint-disable no-empty-function */
import {createContext} from "react";

export const musics = [
    "NTstZsPsFjc",
    "iZznpSMI-1E",
    "GoWKMNpoWZc",
    "16y4HNgjv34",
    "sAY9FMj4KaY",
    "qw2DPKOR1Pc",
    "xnS1Cbi9OSU",
    "AaLTaQ9wCxI",
];

export const currentMusic = musics[0];

export const MusicContext = createContext({
    musics,
    currentMusic,
    changePlaylist: () => {},
    setCurrentMusic: () => {},
});
