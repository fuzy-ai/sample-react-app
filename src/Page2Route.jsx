import React from 'react';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export const Page2Route = () => {
    return (
        <Container>
            <Typography>
                Page 2 Route
            </Typography>
            <Button component={Link} to="/home">
                Go to Home
            </Button>
        </Container>
    );
};

export default Page2Route;