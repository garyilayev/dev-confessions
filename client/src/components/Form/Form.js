import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

import useStyles from './styles';
import { createConfession, updateConfession } from '../../actions/confessions';

const Form = ({ currentId, setCurrentId }) => {

    const classes = useStyles();
    const confession = useSelector((state) => currentId ? state.confessions.find((c) => c._id === currentId) : null);   
    const [confessionData, setConfessionData] = useState({
        name: '',
        content: ''
    });
    const dispatch = useDispatch();

    useEffect(() => {
        if (confession) setConfessionData({ name: confession.name, content: confession.content })
    }, [confession])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updateConfession(currentId, confessionData));
        }
        else {
            dispatch(createConfession(confessionData));
        }
        
        clear();
    }

    const clear = () => {
        setCurrentId(() => null);
        setConfessionData({ name: '', content: ''})
    }

    return ( 
    <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ? 'Edit' : 'Write'} a confession</Typography>
            <TextField 
            name="name" 
            variant="outlined" 
            label="Name" 
            fullWidth
            value={confessionData.name}
            onChange={(e) => setConfessionData({ ...confessionData, name: e.target.value })}
            
            />
            <TextField 
            name="message" 
            variant="outlined" 
            label="Message" 
            fullWidth
            value={confessionData.content}
            onChange={(e) => setConfessionData({ ...confessionData, content: e.target.value })}
            />
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth onSubmit={(e) => handleSubmit(e)}>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={() => clear()} fullWidth>Clear</Button>
        </form>
    </Paper>
    );
}
 
export default Form;