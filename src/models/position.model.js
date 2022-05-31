import mongoose from 'mongoose'
import Schema from "mongoose";

const Position = mongoose.Schema({
    userId : {
        type : Schema.Types.ObjectId,
        required : true,
        ref: "user"
    },
    initCoordinate : {
        type : Array,
        required : true
    },
    finalCoordinate : {
        type : Array,
        required : true
    },
    createdAt : {
        type : Date,
        required : true,
        default : Date.now
    }
    
})

export default mongoose.model("position", Position)
