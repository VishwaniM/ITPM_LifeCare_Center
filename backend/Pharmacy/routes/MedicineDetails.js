const router=require("express").Router();
let medDet=require("../models/MedicineD");

//http://localhost:8090/MedDetails/add this is the use of route method
router.route("/add").post((req,res)=>{

    const Mname=req.body.Mname;
    const codeNum=req.body.codeNum;
    const section=req.body.section;
    const des=req.body.des;
    const quantity=Number(req.body.quantity);
    const price=Number(req.body.price);

    const newMedDetails=new medDet({
       Mname,
       codeNum,
       section,
       des,
       quantity,
       price,
    })

    //cheching if added or not
    newMedDetails.save().then(()=>{
        res.json("Medicine addedd")
    }).catch((err)=>{
        console.log(err);
    })

})

//data retrieving
router.route("/").get((req,res)=>{
    //using .find() method we get all the results in the table
    medDet.find().then((MedDetail)=>{
        res.json(MedDetail)
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
    const{Mname,codeNum,section,des,quantity,price}=req.body;

    const updateMedDetails={
        Mname,
        codeNum,
        section,
        des,
        quantity,
        price
    }
    //also we can use (userId,{TeacherId,name,subjectId,subjectName,Amount})
    const update=await medDet.findByIdAndUpdate(userId,updateMedDetails)
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

    await medDet.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status:"Medicine deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with deleting", error:err.message});
    })

})

//retrieve data by id

router.route("/get/:id").get(async (req,res)=>{

    let codeNum=req.params.id;

    const user=await medDet.findById(user)
    .then((MedDetails)=>{
        res.status(200).send({status:"Medicine fetched", MedDetails})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with get med", error:err.message});
    })
    
})

router.route("/:id").get((req, res) => {
    medDet.findById(req.params.id)
    .then( MedDetails=> res.json(MedDetails))
    .catch(err => res.status(400).json('Error: ' + err)); 
  })







module.exports=router;





