const router=require("express").Router();
let feeDet=require("../models/PaymentDetails");

//http://localhost:8090/PaymentDetails/add this is the use of route method
router.route("/add").post((req,res)=>{

    const PaymentID=req.body.PaymentID;
    const Patientname=req.body.Patientname;
    const Phoneno=Number(req.body.Phoneno);
    const Email=req.body.Email;
    const Doctor=req.body.Doctor;
    const Sex=req.body.Sex;
    const PaymentDate=req.body.PaymentDate;
    const PaymentType=req.body.PaymentType;
    const Amount=req.body.Amount;
   

 //console.log(PaymentID,Patientname,Phoneno,Email,Amount)

    const newPaymentDetails=new feeDet({
        PaymentID,
        Patientname,
        Phoneno,
        Email,
        Doctor,
        Sex,
        PaymentDate,
        PaymentType,
        Amount
       
    })

    //cheching if added or not
    newPaymentDetails.save().then(()=>{
        res.json("Payment addedd")
    }).catch((err)=>{
        console.log(err.message);
    })

})

//data retrieving
router.route("/").get((req,res)=>{
    //using .find() method we get all the results in the table
    feeDet.find().then((PaymentDetails)=>{
        res.json(PaymentDetails)
    }).catch((err)=>{
        console.log(err);
    })

})

//update data
router.route("/update/:id").put(async (req,res)=>{
    //assigning the mongodb assigned id
    let userId=req.params.id;

    //assigning values
    //destructure method used
    const{PaymentID,Patientname,Phoneno,Email,Doctor,Sex,PaymentDate,PaymentType,Amount}=req.body;

    const updatePaymentDetails={
        PaymentID,
        Patientname,
        Phoneno,
        Email,
        Doctor,
        Sex,
        PaymentDate,
        PaymentType,
        Amount
    
    }
    //also we can use (userId,{PaymentID,name,Phoneno,Email,Amount})
    const update=await feeDet.findByIdAndUpdate(userId,updatePaymentDetails)
    .then(()=>{
        //res.status() means like error code given 404
        res.status(200).send({status:"Details updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error updating data", error:err.message});
    })
    
})

//delete
router.route("/delete/:id").delete(async (req,res)=>{

    let userId=req.params.id;

    await feeDet.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status:"user deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with deleting", error:err.message});
    })

})

//retrieve data by id

router.route("/get/:id").get(async (req,res)=>{

    let userId=req.params.id;

    const user=await feeDet.findById(userId)
    .then((PaymentDetails)=>{
        res.status(200).send({status:"User fetched", PaymentDetails})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with get user", error:err.message});
    })
    
})

router.route("/:id").get((req, res) => {
    feeDet.findById(req.params.id)
    .then( PaymentDetails=> res.json(PaymentDetails))
    .catch(err => res.status(400).json('Error: ' + err)); 
  })







module.exports=router;





