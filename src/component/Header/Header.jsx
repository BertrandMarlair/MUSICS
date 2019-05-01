import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {HeaderStyle} from "./HeaderStyle";
import {withStyles} from "@material-ui/core";
import Search from "./HeaderComp/Search";
import Account from "./HeaderComp/Account";

function Header(props) {
    const {classes} = props;
    return (
        <AppBar position={"static"} className={classes.AppBar}>
            <Toolbar className={classes.root}>
                <Typography variant={"h6"} className={classes.title}>
                    MUSICS
                </Typography>
                <Search />
                <div className={classes.grow} />
                <Account />
            </Toolbar>
        </AppBar>
    );
}

export default withStyles(HeaderStyle)(Header);
