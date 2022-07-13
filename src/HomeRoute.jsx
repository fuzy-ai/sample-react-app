import React from 'react';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { sendAnalyticsEvent } from "./fuzy-api";
import getUser from "./get-user";

export const HomeRoute = () => {
    const userId = getUser();
    sendAnalyticsEvent(userId, "/home");

    return (
        <Container>
            <Typography>
                Home Route
            </Typography>
            <Button component={Link} to="/page2">
                Go to Page 2
            </Button>
        </Container>
    );
};

export default HomeRoute;