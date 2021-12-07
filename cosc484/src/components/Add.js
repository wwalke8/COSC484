import { Fab, Tooltip } from '@mui/material';
import { makeStyles } from "@mui/styles"
import { Add as AddIcon } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({}));

export default function Add() {
    const classes = useStyles();
    return (
        <Tooltip title="Add your new post" aria-label="add">
            <Fab color="secondary" className={classes.absolute}>
                <AddIcon />
            </Fab>
        </Tooltip>
    )
}
