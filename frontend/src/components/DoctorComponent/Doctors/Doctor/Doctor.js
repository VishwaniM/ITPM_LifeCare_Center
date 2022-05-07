import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import GetAppIcon from '@material-ui/icons/GetApp';
import { useDispatch } from 'react-redux';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { deleteDoctor } from '../../actions/doctors';

import useStyles from './styles';


const Doctor = ({ doctor, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const pdfGenerate=({})=>{
        var doc=new jsPDF('portrait','px','a4','false'); 

    
        doc.setFontSize(28);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(0,0,128)
        doc.text(152, 60, "Doctor Profile");

        doc.addImage(doctor.selectedFile,'PNG',135,80,180,200);
                
        autoTable(doc, {html: '#my-table'})
        doc.autoTable({
            startY:290,
            margin:50,
            theme:'plain',     
            columnStyles: { 0: { halign: 'center' } },
            alternateRowStyles:{fontSize:18, fontStyle:'bold'},
            body:[
                
                [[doctor.fullName]],
            ],
        })
        
        var date=new Date().toLocaleDateString();
        
        
        doc.autoTable({
            startY:320,
            margin:50,
            columnStyles: { 1: { halign: 'right' } },
            head:[['','Doctor Details']],
            body:[
                ['Full Name',[doctor.fullName]],
                ['Age',[doctor.age]],
                ['Gender'  , [doctor.gender]],
                ['Date of Birth'  , [doctor.birthday]],
                ['SLMC Number'  , [doctor.slmcNo]],
                ['Doctor Speciality'  ,[doctor.speciality]],
                ['Email'  , [doctor.email]],
                ['Phone Number'  ,'0'+ [doctor.phoneNumber]],
                ['Current Working Hospital'  , [doctor.hospital]],
                
            ],
        })
        doc.autoTable({
            startY:560,
            margin:50,
            theme:'plain',            
            
            columnStyles: { 1: { halign: 'right' } },
            alternateRowStyles:{fontSize:8, fontStyle:'italic'},
            body:[
                
                ['Life Care Center', 'Generated on'+' '+[date]],
            ],
        })
        doc.save('Report.pdf');
    }
    
    return(
       <Card className={classes.card }raised elevation = {6}>
           <CardMedia className= {classes.media} image={doctor.selectedFile} title= {doctor.title}/>
           <div className={classes.overlay}>
               <Typography variant="h6"> {doctor.fullName} </Typography>
               

           </div>
           <div className={classes.overlay2}>
    {/* download report button */}
               <Button 
                    style={{color:'white'}} 
                    size="small"                     
                    onClick={pdfGenerate}>
                    <GetAppIcon fontSize="default"/>
               </Button>
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
                <CardActions className={classes.cardActions}>
                    <Button 
                        size="small" 
                        color="primary" 
                        onClick={() => setCurrentId(doctor._id)}>
                        <EditIcon fontSize="small"/>
                        Edit
                        
                    </Button>
                    <Button size="small" color="secondary" onClick={() => dispatch(deleteDoctor(doctor._id))}>
                        <DeleteIcon fontSize="small"/>
                        Delete
                    </Button>

                </CardActions>

       </Card>
    );
}

export default Doctor;
