const router = require("express").Router();
let UserModel = require("../models/userAppModel");
const { route } = require("./AppDetails");
const jwt = require("jsonwebtoken");

router.get('/', (req, res) => {
    res.send('root')
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const result = await UserModel.find({ username: username, password: password });
    if (result.length > 0) {
        res.send({
            username: username,
            token: jwt.sign({
                username: username,         
            }, process.env.JWT_SECRET, { expiresIn: "1h" }),
            message: "Login Successful",
        });
    } else {
        res.status(400).send({
            message: "Login Failed"
        });
    }


});
/*
 setTimeout( async () => {
    //create dummy user and save
    const user = new UserModel({
        username: "005",
        password: "005"
    });
    await user.save();

}); */


module.exports = router;
