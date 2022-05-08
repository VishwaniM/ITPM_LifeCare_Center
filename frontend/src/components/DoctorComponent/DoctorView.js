import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Paper, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getDoctors, getDoctorsBySearch } from './actions/doctors';
import Pagination from './Pagination';
import Doctors from './DoctorView/Doctors';

import memories from './images/memories.png';
import useStyles from '../../styles';
import doctorUseStyles from './stComStyles';

function useQuery() {
   return new URLSearchParams(useLocation().search); 
}


const DoctorCom = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const stClasses = doctorUseStyles();
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(getDoctors());
    }, [ currentId, dispatch]);

    const searchDoctor = () => {
        if (search.trim()){
            dispatch(getDoctorsBySearch({ search }));
            history.push(`/doctorsdetails/search?searchQuery=${search || 'none'}`);
        }else {
            history.push('/doctorsdetails')
        }
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 13){
            searchDoctor();
        }
    };

    return(
        <Container maxidth = "lg">
        <AppBar className = {classes.appBar} position = "static" color = "inherit" style={{marginTop: '170px', marginBottom: '50px'}}>
        <Grid item xs={12} sm={4}>
            </Grid>
        <Grid item xs={12} sm={6}>
           <Typography className ={classes.heading} varient = "h2" align = "center">Doctors<img className = {classes.image} src={memories} alt= "memories" height="70" /></Typography>
           </Grid>
           <Grid item xs={12} sm={2}>
                        
                            <TextField  
                                name = "search"                                
                                variant="standard"
                                label = "Search Doctors"
                                size='small'
                                onKeyPress={handleKeyPress}
                                fullWidth
                                value = {search}
                                onChange ={(e) => setSearch(e.target.value)}
                            />                                                                 
                        
            </Grid>     
            <Grid item xs={12} sm={2}>       
                        <Button onClick={searchDoctor} className={stClasses.searchButton} variant= "contained" color = "primary">Search</Button>
            </Grid>
        </AppBar>


        <Grow in>
            <Container maxWidth = "xl">
                <Grid container justify="space-between" alignItems="stretch" spacing={3} className={stClasses.gridContainer}>
                    <Grid item xs={12} sm={12}>
                        <Doctors setCurrentId={setCurrentId}/>
                    </Grid>
                    
                    
                    {/* <Grid item xs={12} sm={5}>
                        
                        <Paper elevation= {6} style={{marginBottom: '100px'}}>
                            <Pagination />
                        </Paper>
                    </Grid> */}
                </Grid>
            </Container>
        </Grow>

    </Container>
    );

}

export default DoctorCom;