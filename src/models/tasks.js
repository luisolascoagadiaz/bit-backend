import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    date:{
        Type: String
    },

    priority:{
        Type: String
    },

    task:{
        Type: String
    },

    state:{
        Type: String
    },

},{versionKey:false, timestamps:true});

export default model('Task', taskSchema);