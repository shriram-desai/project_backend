import mongoose, { Schema } from "mongoose";

const subsciptionSchema = new Schema({
    subscriber: {
        type: mongoose.Schema.Types.ObjectId, // one who is subscribing
        ref: "User"
    },
    channel: {
        type: mongoose.Schema.Types.ObjectId, // one to whom is subscribing
        ref: "User"
    }
}, {timestamps: true})


export default Subsciption = mongoose.model("Subsciption" , subsciptionSchema)