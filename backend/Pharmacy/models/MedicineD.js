const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const MedDetailsSchema=new Schema({
    
    Mname: {
        type: String,
        required:true
    },
    codeNum: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    des:{
        type: String,

    },
    quantity: {
        type:Number,
        required: true
    },
    price: {
        type:Number,
        required: true
    }

})

//parameters are tableName,schema name
const MedDetails=mongoose.model("MedDetail", MedDetailsSchema);

// export
module.exports=MedDetails;
