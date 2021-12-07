import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Link } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { makeStyles } from "@mui/styles";
import { blue } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
    item: {
        display: "flex",
        color: blue[500]
    }
}));

export default function Leftbar() {
    const classes = useStyles();
    let navigate = useNavigate();

    return (
        <Container>
            <div className={classes.item}>
                <HomeIcon />
                <Link component="button"  variant="body2" onClick={() => navigate("/")}>
                    Home
                </Link>
            </div>
        </Container>
    )
}
