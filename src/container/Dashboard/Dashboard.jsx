import React, {Fragment} from "react";
import {DashboardStyle} from "./DashboardStyle";
import {withStyles, Grid, Typography} from "@material-ui/core";
import Card from "../../component/Card/Card";
import {NavLink} from "react-router-dom";
import PlayList from "../../component/PlayList/PlayList";
import Visualizer from "../../component/Visualizer/Visualizer";

const Dashboard = props => {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} md={3}>
                    <Card>
                        <Visualizer />
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
                <Grid item xs={12} md={6}>
                    <Card>
                        <PlayList />
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default withStyles(DashboardStyle)(Dashboard);
