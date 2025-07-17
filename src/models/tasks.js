import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    date:{
        type: String
    },
    priority:{
        type: String
    },
     task:{
        type: String
    },
    state:{
        type: String
    },
},{versionKey:false, timestamps:true});

export default model('Task', taskSchema);