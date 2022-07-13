import React from 'react';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
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
        <Container>
            <Typography>
                Page 2 Route
            </Typography>
            <Button component={Link} to="/home">
                Go to Home
            </Button>
            <Button variant="contained" onClick={onClick}>
                Send Fuzy Event
            </Button>
        </Container>
    );
};

export default Page2Route;