import React, { useContext } from 'react'
import { TimerContext } from "../contexts/TimerProvider";


import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        margin: '4px 8px',
        width: 100
    },
});

export const Control = () => {
    const { startWatch, resetWatch, waitWatch, start } = useContext(TimerContext)
    const classes = useStyles();
    return (
        <div className="control">
            <Button variant="contained" color="primary" onClick={() => { startWatch() }} className={classes.root}>
                {start ? "Stop" : "Start"}
            </Button>
            <Button variant="contained" color="secondary" onClick={() => { resetWatch() }} className={classes.root}>
                Reset
            </Button>
            <Button variant="contained" onClick={() => { waitWatch() }} className={classes.root}>
                Wait
            </Button>

        </div>
    )
}


