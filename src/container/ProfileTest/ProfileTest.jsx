import React, {Fragment} from "react";
import {ProfileStyle} from "./ProfileStyle";
import {withStyles, Grid, Typography} from "@material-ui/core";
import Card from "../../component/Card/Card";
import {NavLink} from "react-router-dom";

const ProfileTest = props => {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Card>
                        <Fragment>
                            <Typography>Main dashboard</Typography>
                            <NavLink to={"/"}>Main dashboard</NavLink>
                        </Fragment>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <Fragment>
                            <Typography>Main profile</Typography>
                            <NavLink to={"/profile"}>Main profile</NavLink>
                        </Fragment>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <Fragment>
                            <Typography>Test profile</Typography>
                            <NavLink to={"/test/profile"}>Test profile</NavLink>
                        </Fragment>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default withStyles(ProfileStyle)(ProfileTest);
