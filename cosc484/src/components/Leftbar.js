import { Container, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    item: {
        display: "flex"
    },
}));

export default function Leftbar() {
    const classes = useStyles();
    return (
        <Container>
            <div className={classes.item}>
                <HomeIcon className={classes.icon} />
                <Typography className={classes.text}>Home</Typography>
            </div>
        </Container>
    )
}
