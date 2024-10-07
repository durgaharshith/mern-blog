import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        requied:true,
        uniqe:true,
    },
    email:{
        type:String,
        requied:true,
        unique:true,
    },
    password:{
        type:String,
        requied:true,
    },
    profilePicture:{
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAd5avdba8EiOZH8lmV3XshrXx7dKRZvhx-A&s",
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    },{timestamps:true}
);

const User = mongoose.model('User', userSchema);

export default User;
