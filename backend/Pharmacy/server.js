//const express=require("express");
const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
//const dotenv=require("dotenv");
const app=express();
require("dotenv").config();

const PORT=process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL=process.env.MONGODB_URL;

mongoose.connect(URL, {

    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false

});

const connection=mongoose.connection;
connection.once("open", ()=>{
    console.log("mongo DB Connection success");
})
//Medicine
const MedDetails=require("./routes/MedicineDetails.js");
app.use("/MedDetails",MedDetails);
//Order
const OrderMed=require("./routes/OrderMed.js");
app.use("/OrderMed", OrderMed);





app.listen(PORT, ()=>{
    console.log('Serve is up and running ${PORT}')
})
