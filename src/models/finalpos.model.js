import mongoose from 'mongoose'

const FinalPos = mongoose.Schema({
    label : {
        type : String,
        required : true
    },
    coordinates : {
        type : Array,
        required : true
    },
    
})

export default mongoose.model("finalPos", FinalPos)
