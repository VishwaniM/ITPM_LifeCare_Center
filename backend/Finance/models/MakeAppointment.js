const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const AppDetailsSchema=new Schema({
    
    PatientID: {
        type: String,
        required:true
    },
    Patientname: {
        type: String,
        required: true
    },
    Phoneno: {
        type: Number,
        required: true
    },
    Email:{
        type: String,

    },

    Doctor:{
        type: String,

    },

    visited:{
        type: String,

    },

    SelectDate:{
        type: String,

    },

    Time:{
        type: String,

    },

    Comment:{
        type: String,

    },
    Username:{
        type: String
    }

   

})

//parameters are tableName,schema name
const MakeAppointment=mongoose.model("AppDetail", AppDetailsSchema);

// export
module.exports=MakeAppointment;
