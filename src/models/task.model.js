import mongoose from 'mongoose';
import moongose from 'mongoose';

const taskSchema = new moongose.Schema(
    {
    clase: {
        type:String,
        requied:true,
    },
    descripcion:{
        type: String,
        requied:true,
    },
    profesor:{
        type: String,
        requied:true,
    },    
    dia:{
        type: Date,
        requied:true,
    },
    hs: {
        type:String,
        requied:true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },

},{
    timestamps:true
});

export default moongose.model("Task", taskSchema);