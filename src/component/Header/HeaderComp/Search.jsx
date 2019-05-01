import React from "react";
import {HeaderStyle} from "../HeaderStyle";
import {withStyles} from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const Search = props => {
    const {classes} = props;
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder={"Search…"}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
            />
        </div>
    );
};

export default withStyles(HeaderStyle)(Search);
