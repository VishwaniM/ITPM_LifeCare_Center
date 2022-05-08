import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Grid, FormLabel, FormControl, InputLabel, Select } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createDoctor, updateDoctor } from '../actions/doctors';


const Form = ({ currentId, setCurrentId }) => {
    const [doctorData, setDoctorData] = useState({ fullName: '', age: '', email: '', phoneNumber: '', slmcNo: '', speciality: '', gender: '', hospital: '', birthday: '', selectedFile: '' });
    const doctor = useSelector((state) => (currentId ? state.doctors.find((p) => p._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (doctor) setDoctorData(doctor);
    }, [doctor])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updateDoctor(currentId, doctorData));
        } else {
            dispatch(createDoctor(doctorData));
        }
        clear();


    }
    const clear = () => {
        setCurrentId(null);
        setDoctorData({ fullName: '', age: '', email: '', phoneNumber: '', slmcNo: '', speciality: '', gender: '', hospital: '', birthday: '', selectedFile: '' });
    }



    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

                <Typography className={classes.typography} variant="h4" >{currentId ? 'Edit Doctor' : 'Add New Doctor'} </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TextField 
                        required = {true}                    
                        type='text' 
                        name="Full Name" 
                        variant="standard" 
                        label="Doctor Full Name" 
                        fullWidth 
                        
                        value={doctorData.fullName} 
                        onChange={(e) => setDoctorData({ ...doctorData, fullName: e.target.value })} />
                    </Grid>

                    <Grid item xs={12} >
                        <TextField required type='tel' name="Age" inputProps={{ maxLength: 2, pattern: '[0-9]{2}', title:" Ex. 24"}} variant="standard" label="Doctor Age (Format: XX)" fullWidth value={doctorData.age} onChange={(e) => setDoctorData({ ...doctorData, age: e.target.value })} />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField type="email" required name="Email" variant="standard" label="Email" fullWidth value={doctorData.email}  
                        onChange={(e) => setDoctorData({...doctorData, email: e.target.value})}/><br />
                        
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            type="text"
                            required
                            name="Phone Number"
                            variant="standard"
                            label="Phone Number (Format: +94 XX XXX XXXX)"                            
                            inputProps={{  pattern:'[\+][0-9]{2} [0-9]{2} [0-9]{3} [0-9]{4}',title:" Ex. +94 70 123 1234" }}
                            fullWidth                        
                            value={doctorData.phoneNumber}
                            onChange={(e) => setDoctorData({ ...doctorData, phoneNumber: e.target.value })} />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField 
                        type="tel" 
                        required                        
                        name="SLMC" 
                        variant="standard" 
                        label="SLMC Number" 
                        fullWidth 
                        value={doctorData.slmcNo}
                        inputProps={{ maxLength: 5, pattern: '[0-9]{5}', title:" You must enter 5 digit"}}
                        onChange={(e) => setDoctorData({ ...doctorData, slmcNo: e.target.value })} /><br />
                    </Grid>

                    

                    {/* Speciality picker */}

                    <Grid item xs={12}>

                        <FormControl variant="standard" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Doctor Speciality</InputLabel>
                            <Select
                                required
                                native
                                value={doctorData.speciality}
                                onChange={(e) => setDoctorData({ ...doctorData, speciality: e.target.value })}
                                label="Doctor Speciality"
                                inputProps={{
                                    name: 'Doctor Speciality',
                                    id: 'outlined-age-native-simple',
                                }}>
                                <option aria-label="" value="" />
                                <option value={'Accupuncture Physician'}>Accupuncture Physician</option>
                                <option value={'Cancer Surgeon'}>Cancer Surgeon</option>
                                <option value={'Dental Surgeon'}>Dental Surgeon</option>
                                <option value={'Diabetic Specialist'}>Diabetic Specialist</option>
                                <option value={'Hair Transplant Surgeon'}>Hair Transplant Surgeon</option>
                                <option value={'Massage Therapist'}>Massage Therapist</option>
                                <option value={'Nuro physician'}>Nuro physician</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    {/* gender picker */}
                    <Grid item xs={12} sm={6}>
                        <FormControl variant="standard" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
                            <Select
                                required
                                native
                                value={doctorData.gender}
                                onChange={(e) => setDoctorData({ ...doctorData, gender: e.target.value })}
                                label="Gender"
                                inputProps={{
                                    name: 'Gender',
                                    id: 'outlined-age-native-simple',
                                }}>

                                <option aria-label="" value="" />
                                <option value={'Male'}>Male</option>
                                <option value={'Female'}>Female</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    {/* Birthday picker */}
                    <Grid item xs={12} sm={6}>
                        <form className={classes.container} noValidate>
                            <TextField required
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue="YYYY-MM-DD"
                                value={doctorData.birthday}
                                onChange={(e) => setDoctorData({ ...doctorData, birthday: e.target.value })}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                        </form>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField required className={classes.textField}
                            id="Hospital"
                            label="Current Working Hospital"

                            value={doctorData.hospital}
                            onChange={(e) => setDoctorData({ ...doctorData, hospital: e.target.value })}
                            variant="standard"
                        />
                    </Grid>

                    

                    <Grid item xs={12}>
                        <div className={classes.fileInput}>
                            <FormLabel className={classes.formLabel}>Upload Image</FormLabel>
                            <FileBase required type="file" multiple={false} onDone={({ base64 }) => setDoctorData({ ...doctorData, selectedFile: base64 })} />
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                        <Button className={classes.buttonClear} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                    </Grid>
                </Grid>
            </form>

        </Paper>
    );
};

export default Form;