import React, { Fragment } from 'react';
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles"
import InfiniteList from './infinitelist';
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
    container: {
        
    }
}));

export default function Feed() {
    const classes = useStyles();
    return (
        <Fragment>
            <Container className={classes.container}>
                <Post />
            </Container>
            <InfiniteList />
        </Fragment>
    )
}
