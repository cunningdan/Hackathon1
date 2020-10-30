import mongoose from "mongoose";
const Schema = mongoose.Schema

const ObjectId = Schema.Types.ObjectId
const Comment = new Schema(
    {
        text: { type: String, required: true },
        characterId: { type: ObjectId, ref: "Character", required: true },
        vote: { type: Number },
        userId: { type: ObjectId, ref: "User", required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)
export default Comment