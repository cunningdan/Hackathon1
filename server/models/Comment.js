import mongoose from "mongoose";
const Schema = mongoose.Schema

const ObjectId = Schema.Types.ObjectId
const Comment = new Schema(
    {
        text: { type: String, required: true },
        characterId: { type: ObjectId, required: true },
        vote: { type: Number }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)
export default Comment