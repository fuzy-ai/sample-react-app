import React from 'react';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { sendAnalyticsEvent } from "./fuzy-api";
import getUser from "./get-user";

export const HomeRoute = () => {
    const userId = getUser();
    sendAnalyticsEvent(userId, "/home");

    return (
        <Grid spacing={2} container direction="column" sx={{ alignContent: 'center', paddingTop: '36px' }}>
            <Grid item>
                <Typography variant="h3">Home</Typography>
            </Grid>
            <Grid item>
                <Button component={Link} to="/page2">
                    Go to Page 2
                </Button>
            </Grid>
        </Grid>
    );
};

export default HomeRoute;