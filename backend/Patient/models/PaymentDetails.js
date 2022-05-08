const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const FeeDetailsSchema=new Schema({
    
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

    Province:{
        type: String,

    },

    Sex:{
        type: String,

    },

    PaymentDate:{
        type: String,

    },

    BloodType:{
        type: String,

    },

    Phistory:{
        type: String,

    }

   

})

//parameters are tableName,schema name
const PaymentDetails=mongoose.model("FeeDetail", FeeDetailsSchema);

// export
module.exports=PaymentDetails;
