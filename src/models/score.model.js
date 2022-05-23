
import mongoose from 'mongoose'

const Scores = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    scores : {
        type : String,
        required : true
    },
   
})

export default mongoose.model("scores", Scores)
