import mongoose from 'mongoose'

const InitPos = mongoose.Schema({
    label : {
        type : String,
        required : true
    },
    coordinates : {
        type : Array,
        required : true
    },
    
})

export default mongoose.model("initalPos", InitPos)
