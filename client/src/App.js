import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getConfessions } from './actions/confessions';
import Form from './components/Form/Form';
import Confessions from './components/Confessions/Confessions';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import useStyles from './styles';

function App() {

  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getConfessions());
  }, [currentId, dispatch])

  return (
    <>
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Dev Confessions</Typography>
        <Typography className={classes.heading2} variant="h5" align="center">Share your dev stories</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.main} container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Confessions setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    </>
  );
}

export default App;
