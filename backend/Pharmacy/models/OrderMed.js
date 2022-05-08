const mongoose=require('mongoose');

const Schema=mongoose.Schema;



const OrderMedSchema=new Schema({

  
    cusName: {
        type:String,
        required: true
    },
    address: {
        type:String,
        required: true
    },
    pNumber: {
        type:Number,
        required: true
    },
    medList: {
        type:String,
        required: true
    },
    timeP: {
        type:String,
        required: true
    },
    details: {
        type:String,
        required: true
    }

})

const OrderMed=mongoose.model("OrderMed", OrderMedSchema);

module.exports=OrderMed;