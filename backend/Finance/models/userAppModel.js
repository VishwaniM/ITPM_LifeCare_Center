const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

//parameters are tableName,schema name
const UserSchema = mongoose.model("UserSchema", userSchema);

// export
module.exports = UserSchema;
