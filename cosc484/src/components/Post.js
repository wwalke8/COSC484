import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles"
import { spacing } from "@mui/system";

const useStyles = makeStyles(theme => ({
    card: {
        height: 350
    },
    media: {
        height: 200
    }
}));

export default function Post (props) {
    const classes = useStyles();
    return (
       <Card className={classes.card}>
           <CardActionArea>
               <CardMedia
                   className={classes.media}
                   image={props.imageUrl}
                   title='post image'
                />
                <CardContent>
                    <Typography variant="h4">{props.title}</Typography>
                    <Typography variant="body">{props.body}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Like</Button>
                <Button size="small" color="primary">Comment</Button>
            </CardActions>
       </Card>
    )
}
