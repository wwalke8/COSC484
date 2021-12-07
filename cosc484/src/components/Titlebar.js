import React from 'react';
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { blue } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
    item: {
        //display: "flex",
        align: 'center',
        color: blue[500]
    }
}));

export default function Titlebar() {
    const classes = useStyles();
    return (
        <Container>
            <Typography className={classes.item} variant="h3" >Welcome to Frequency</Typography>
        </Container>
    )
}
