import React from "react";
import {HeaderStyle} from "../HeaderStyle";
import {withStyles, Avatar, Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Menu from "@material-ui/core/Menu";

const Account = props => {
    const {classes} = props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    function handleMenu(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    const avatar =
        "http://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/51ce6099e4b0d911b4489b79/5c1ea4ef40ec9abd16b081bd/1545692428118/johnny-depp-confirmed-not-to-return-as-jack-sparrow-in-disneys-pirates-of-the-caribbean-reboot-social.jpg?format=1500w";

    return (
        <div className={classes.account}>
            <Avatar className={classes.avatar} src={avatar} />
            <Typography variant={"subtitle1"}>Jack Sparrow</Typography>
            <IconButton
                aria-owns={open && "menu-appbar"}
                aria-haspopup={"true"}
                onClick={handleMenu}
                color={"inherit"}>
                <ArrowDropDownIcon />
            </IconButton>
            <Menu
                id={"menu-appbar"}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={open}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
        </div>
    );
};

export default withStyles(HeaderStyle)(Account);
