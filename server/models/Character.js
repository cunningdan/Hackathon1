import mongoose from "mongoose";
const Schema = mongoose.Schema

const ObjectId = Schema.Types.ObjectId
const Character = new Schema(
    {
        name: { type: String, required: true },
        class: { type: String, required: true },
        skills: { type: String },
        user: { type: ObjectId, ref: "User", required: true },
        img: { type: String }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)
export default Character