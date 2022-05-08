const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const PayDetailsSchema=new Schema({
    
    PaymentID: {
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

    Sex:{
        type: String,

    },

    PaymentDate:{
        type: String,

    },

    PaymentType:{
        type: String,

    },

    Amount:{
        type: String,

    }

   

})

//parameters are tableName,schema name
const PaymentDetails=mongoose.model("PaymentDetail", PayDetailsSchema);

// export
module.exports=PaymentDetails;
