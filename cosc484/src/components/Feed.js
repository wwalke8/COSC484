import React, { Fragment } from 'react';
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles"
import InfiniteList from './infinitelist';
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
    }
}));

export default function Feed() {
    const classes = useStyles();
    return (
        <Fragment>
            <Container className={classes.container}>
                <Post />
                <Post />
            </Container>
            <InfiniteList />
        </Fragment>
    )
}
