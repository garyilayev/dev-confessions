import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Confession from './Confession/Confession';
import useStyles from './styles';

const Confessions = ({ setCurrentId }) => {
    const confessions = useSelector((state) => state.confessions);   
    const classes = useStyles();

    return ( 
    !confessions.length ? <CircularProgress /> : (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {confessions.map( (confession) => (
            <Grid key={confession._id} item xs={12} sm={6}>
                <Confession confession={confession} setCurrentId={setCurrentId}/>
            </Grid>
        ))}        
    </Grid>)
    );
}
 
export default Confessions;