
import mongoose from "mongoose";


const cricStar = new mongoose.Schema({
    name:{
         type:String,
         required:true,
         minlength:4
    },
    country:{
        type:String ,
        required:true
    },
    ranking:{
        type:Number,
        required:true

    },
    dob:{
        type:Date,
        required:true
    },
    inningPlayed:{
        type:Number,
        required:true
    },
    bestScore:{
        type:Number,
        required:true
    },
    team:{
        type:String,
        required:true,
        minlength:5
    }
});


const cricStars = new mongoose.model("CricStarInfo", cricStar);

export default cricStars;
