import {mainLinear, radius, boxShadow, unit} from "../../style/Constant";

export const HeaderStyle = {
    AppBar: {
        background: mainLinear,
        borderRadius: radius,
        boxShadow,
        minHeight: 80,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: unit * 5,
        width: "auto",
    },
    root: {
        width: "100%",
    },
    title: {
        textTransform: "uppercase",
        letterSpacing: 4,
        padding: "0 70px !important",
        borderRight: "1px solid white",
    },
    search: {
        position: "relative",
        borderRadius: radius,
        marginLeft: unit,
        width: "auto",
    },
    searchIcon: {
        width: unit * 9,
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
        width: "100%",
    },
    inputInput: {
        paddingTop: unit,
        paddingRight: unit,
        paddingBottom: unit,
        paddingLeft: unit * 10,
    },
    grow: {
        flexGrow: 1,
    },
    account: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        margin: 10,
    },
};
