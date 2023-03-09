// const mongoose = require("mongoose");
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        minLength: 4,
    },
    confirmPassword: {
        type: String,
        require: true,
        minLength: 4,
    },
});

// const userModel = mongoose.model('usermodel',userSchema);
// module.exports = userModel;

export default mongoose.model("usermodel", userSchema);