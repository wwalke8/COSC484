import React from 'react';
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
    return (
        <Container>
            <div className={classes.item}>
                <HomeIcon />
                <Link to='/' variant='inherit' pointer='none' underline='hover'>Home</Link>
            </div>
        </Container>
    )
}
