import React from 'react';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { sendAnalyticsEvent } from "./fuzy-api";
import getUser from "./get-user";

export const Page2Route = () => {
    const userId = getUser();
    sendAnalyticsEvent(userId, "/page2");

    const onClick = () => {
        sendAnalyticsEvent(userId, "button_click/send_fuzy_event");
    };

    return (
        <Grid spacing={2} container direction="column" sx={{ alignContent: 'center', paddingTop: '36px' }}>
            <Grid item>
                <Typography variant="h3">Page 2</Typography>
            </Grid>
            <Grid item>
                <Grid container spacing={2}>
                    <Grid item>
                        <Button component={Link} to="/home">
                            Go to Home
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={onClick}>
                            Send Fuzy Event
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Page2Route;