import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles"
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
    container: {
        
    }
}));

export default function Feed() {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Post />
        </Container>
    )
}
