const router=require("express").Router();
let OrderMed=require("../models/OrderMed");

//http://localhost:8090/OrderMed/add this is the use of route method
router.route("/add").post((req,res)=>{

   
    const cusName=req.body.cusName;
    const address=req.body.address;
    const pNumber=Number(req.body.pNumber);
    const medList=req.body.medList;
    const timeP=req.body.timeP;
    const details=req.body.details;

    const newOrderMed=new OrderMed({
       cusName,
       address,
       pNumber,
       medList,
       timeP,
       details

    })

    newOrderMed.save().then(()=>{
        res.json("Submitted ")
    }).catch((err)=>{
        console.log(err)
    })

})


//retrieve data bulk
router.route("/").get((req,res)=>{

    OrderMed.find().then((pCash)=>{
        res.json(pCash);
    }).catch((err)=>{
        console.log(err);
    })

})

//retrieve on specific category
router.route("/get/:cusName").get(async (req,res)=>{

    //let category=req.params.Category;

    const pCash=await  OrderMed.findOne({"cusName": req.params.cusName})
    .then((OrderMed)=>{
        res.status(200).send({status: "Order details fetched", OrderMed})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error retrieving", error:err.message});

    })

})



module.exports=router;