import mongoose from 'mongoose'
import Schema from "mongoose";

const Coordinate = mongoose.Schema({
    
   
})

const Position = mongoose.Schema({
    userId : {
        type : Schema.Types.ObjectId,
        required : true,
        ref: "user"
    },
    initCoordinate : {
        room : {
            type : String,
            required : true,
        },
        coordinate :{
            x : {
                type : Number,
                required : true,
            },
            y : {
                type : Number,
                required : true,
            },
            z : {
                type : Number,
                required : true,
            }
        },
        
        
    },
    finalCoordinate : {
        room : {
            type : String,
            required : true,
        },
        coordinate :{
            x : {
                type : Number,
                required : true,
            },
            y : {
                type : Number,
                required : true,
            },
            z : {
                type : Number,
                required : true,
            }
        },
        
    },
    createdAt : {
        type : Date,
        required : true,
        default : Date.now
    }
    
})

export default mongoose.model("position", Position)
