// import { formatMs, Grid } from '@material-ui/core';
import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';


import Doctor from '../Doctors/Doctor/Doctor';
import useStyles from './styles';


const Doctors = ({ setCurrentId }) => {
    const doctors = useSelector((state) => state.doctors);
    const classes = useStyles();
    
    console.log(doctors);


    return(
       !doctors.length ? <CircularProgress /> : (
           <Grid className={classes.container} container alignItems="stretch" spacing={3}>
               {doctors.map((doctor) => (
                   <Grid key= {doctor._id} item xs= {12} sm={6} >
                       <Doctor doctor={doctor} setCurrentId={setCurrentId}/>

                   </Grid>
               ))}

           </Grid>
       )
    );
}

export default Doctors;