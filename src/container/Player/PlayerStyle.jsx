import {mainLinear, white, unit} from "../../style/Constant";

export const PlayerStyle = {
    root: {
        flexGrow: 1,
    },
    playerVideo: {
        display: "none",
    },
    player: {
        position: "fixed",
        width: "100%",
        bottom: 0,
        height: 80,
        background: mainLinear,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
    },
    iconPlayer: {
        margin: 10,
        color: white,
        fontSize: "2rem",
    },
    rootSlider: {
        width: "100%",
    },
    slider: {
        padding: "0 22px",
    },
    duration: {
        width: 200,
        textAlign: "center",
    },
    rootVolume: {
        width: 200,
        marginRight: 10,
    },
    soungName: {
        fontSize: "0.7rem",
        color: "#e8e7e7",
        marginBottom: 4,
    },
    icon: {
        margin: 10,
        color: white,
        fontSize: "1.1rem",
    },
    avatar: {
        margin: 10,
        width: 60,
        height: 60,
        borderRadius: 3,
    },
    progress: {
        margin: unit * 2,
        marginRight: 20,
    },
};
