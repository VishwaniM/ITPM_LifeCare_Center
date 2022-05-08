const router = require("express").Router();
let feeDet = require("../models/MakeAppointment");


const auth = (req, res, next) => {
    //verify x-auth-token via jwt
    const token = req.headers[process.env.AUTH_HEADER_NAME];

    if (!token) {
        res.status(401).json({ message: 'Unauthorized' })
    } else {
        try {
            const decoded = helpers.VerifyJWT(token);
            req.user = decoded;   //put decoded data into req.user to achieve authorization
            console.log(`user -> ${req.user.username} is authenticated with JWT token`);
            next();
        } catch (err) {
            res.status(401).json({ message: 'Unauthorized' })
        }
    }

}

//http://localhost:8090/AppDetails/add this is the use of route method
router.route("/add").post((req, res) => {

    const PatientID = req.body.PatientID;
    const Patientname = req.body.Patientname;
    const Phoneno = Number(req.body.Phoneno);
    const Email = req.body.Email;
    const Doctor = req.body.Doctor;
    const visited = req.body.visited;
    const SelectDate = req.body.SelectDate;
    const Time = req.body.Time;
    const Comment = req.body.Comment;
    const Username = req.body.Username;


    //console.log(PatientID,Patientname,Phoneno,Email,Amount)

    const newAppDetails = new feeDet({
        PatientID,
        Patientname,
        Phoneno,
        Email,
        Doctor,
        visited,
        SelectDate,
        Time,
        Comment,
        Username

    })

    //cheching if added or not
    newAppDetails.save().then(() => {
        res.json("Student addedd")
    }).catch((err) => {
        console.log(err.message);
    })

})

//data retrieving
router.route("/").get((req, res) => {
    //using .find() method we get all the results in the table
    feeDet.find().then((AppDetail) => {
        res.json(AppDetail)
    }).catch((err) => {
        console.log(err);
    })

})

//update data
router.route("/update/:id").put(async (req, res) => {
    //assigning the mongodb assigned id
    let userId = req.params.id;

    //assigning values
    //destructure method used
    const { PatientID, Patientname, Phoneno, Email, Doctor, visited, SelectDate, Time, Comment } = req.body;

    const updateAppDetails = {
        PatientID,
        Patientname,
        Phoneno,
        Email,
        Doctor,
        visited,
        SelectDate,
        Time,
        Comment,
        Username

    }
    //also we can use (userId,{PatientID,name,Phoneno,Email,Amount})
    const update = await feeDet.findByIdAndUpdate(userId, updateAppDetails)
        .then(() => {
            //res.status() means like error code given 404
            res.status(200).send({ status: "Details updated" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "error updating data", error: err.message });
        })

})

//delete
router.route("/delete/:id").delete(async (req, res) => {

    let userId = req.params.id;

    await feeDet.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({ status: "user deleted" });
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "error with deleting", error: err.message });
        })

})

//retrieve data by id

router.route("/get/:id").get(async (req, res) => {

    let userId = req.params.id;

    const user = await feeDet.findById(userId)
        .then((AppDetails) => {
            res.status(200).send({ status: "User fetched", AppDetails })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "error with get user", error: err.message });
        })

})

router.route("/:id").get((req, res) => {
    feeDet.findById(req.params.id)
        .then(AppDetails => res.json(AppDetails))
        .catch(err => res.status(400).json('Error: ' + err));
})







module.exports = router;





