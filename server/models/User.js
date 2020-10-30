import mongoose from "mongoose";
const Schema = mongoose.Schema

const ObjectId = Schema.Types.ObjectId
const User = new Schema(
    {
        username: { type: String, required: true },
        vote: { type: Number }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)
export default User