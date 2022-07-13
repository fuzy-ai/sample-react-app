import React from 'react';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export const HomeRoute = () => {

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