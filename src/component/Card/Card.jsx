import React from "react";
import {CardStyle} from "./CardStyle";
import {withStyles} from "@material-ui/core";
import useAnimation from "../../utils/animation/UseAnimation";

const Card = props => {
    const {classes} = props;
    const animation1 = useAnimation("elastic", 1000, 0);
    return (
        <div
            style={{top: animation1 * 20, position: "relative"}}
            className={classes.card}>
            {props.children}
        </div>
    );
};

export default withStyles(CardStyle)(Card);
