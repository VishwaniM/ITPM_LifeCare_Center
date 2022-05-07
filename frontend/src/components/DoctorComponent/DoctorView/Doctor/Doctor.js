import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';


import useStyles from './styles';


const Doctor = ({ doctor, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    
    
    return(
       <Card className={classes.card }raised elevation = {6}>
           <CardMedia className= {classes.media} image={doctor.selectedFile} title= {doctor.title}/>
           <div className={classes.overlay}>
               <Typography variant="h6"> {doctor.fullName} </Typography>
               

           </div>
           
            <div>
                <Typography  className={classes.title} variant="h5" gutterBottom> {doctor.fullName} </Typography>
            </div>    
                <CardContent>
                    <div>    
                        <label>Age:</label>                
                        <Typography variant="p" color="primary" gutterBottom > {doctor.age} </Typography>
                    </div>

                    <div>
                        <label>Email:</label>
                        <Typography variant="p" color="primary" gutterBottom> {doctor.email} </Typography>
                    </div>

                    <div>
                        <label>Phone Number:</label>
                        <Typography variant="p" color="primary" gutterBottom> {doctor.phoneNumber} </Typography>
                    </div>

                    <div>
                        <label>Gender:</label>
                        <Typography variant="p" color="primary" gutterBottom> {doctor.gender} </Typography>
                    </div> 
                    
                    <div>
                        <label>Date of Birth:</label>
                        <Typography variant="p" color="primary" gutterBottom> {doctor.birthday} </Typography>
                    </div> 
                    
                    <div>
                        <label>SLMC number:</label>
                        <Typography variant="p" color="primary" gutterBottom> {doctor.slmcNo} </Typography>
                    </div>
                    
                    <div>
                        <label>Doctor Speciality:</label>
                        <Typography variant="p" color="primary" gutterBottom> {doctor.speciality} </Typography>
                    </div> 
                    
                    <div>
                        <label>Current Working Hospital:</label>
                        <Typography variant="p" color="primary" gutterBottom> {doctor.hospital} </Typography>
                    </div> 
                    
                    <div>
                        <label>Reg.No:</label>
                        <Typography variant="p" color="primary" gutterBottom> {doctor.createdAt} </Typography>
                    </div>       
                </CardContent>
                

       </Card>
    );
}

export default Doctor;
