const router=require("express").Router();
let feeDet=require("../models/PaymentDetails");

//http://localhost:8090/feeDetails/add this is the use of route method
router.route("/add").post((req,res)=>{

    const PatientID=req.body.PatientID;
    const Patientname=req.body.Patientname;
    const Phoneno=Number(req.body.Phoneno);
    const Email=req.body.Email;
    const Province=req.body.Province;
    const Sex=req.body.Sex;
    const Birthday=req.body.Birthday;
    const BloodType=req.body.BloodType;
    const Phistory=req.body.Phistory;
   

 //console.log(PatientID,Patientname,Phoneno,Email,Phistory)

    const newFeeDetails=new feeDet({
        PatientID,
        Patientname,
        Phoneno,
        Email,
        Province,
        Sex,
        Birthday,
        BloodType,
        Phistory
       
    })

    //cheching if added or not
    newFeeDetails.save().then(()=>{
        res.json("Student addedd")
    }).catch((err)=>{
        console.log(err.message);
    })

})

//data retrieving
router.route("/").get((req,res)=>{
    //using .find() method we get all the results in the table
    feeDet.find().then((feeDetail)=>{
        res.json(feeDetail)
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
    const{PatientID,Patientname,Phoneno,Email,Province,Sex,Birthday,BloodType,Phistory}=req.body;

    const updateFeeDetails={
        PatientID,
        Patientname,
        Phoneno,
        Email,
        Province,
        Sex,
        Birthday,
        BloodType,
        Phistory
    
    }
    //also we can use (userId,{PatientID,name,Phoneno,Email,Phistory})
    const update=await feeDet.findByIdAndUpdate(userId,updateFeeDetails)
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
    .then((FeeDetails)=>{
        res.status(200).send({status:"User fetched", FeeDetails})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with get user", error:err.message});
    })
    
})

router.route("/:id").get((req, res) => {
    feeDet.findById(req.params.id)
    .then( FeeDetails=> res.json(FeeDetails))
    .catch(err => res.status(400).json('Error: ' + err)); 
  })







module.exports=router;





