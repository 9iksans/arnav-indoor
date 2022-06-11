
import mongoose from 'mongoose'
import Schema from "mongoose"

const Scores = mongoose.Schema({
    userId : {
        type : Schema.Types.ObjectId,
        required : true,
        ref: "user"
    },
    scores : {
        type : Number,
        required : true
    },
   
})

export default mongoose.model("scores", Scores)
