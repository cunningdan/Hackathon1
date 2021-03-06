import mongoose from "mongoose";
const Schema = mongoose.Schema

const ObjectId = Schema.Types.ObjectId
const Comment = new Schema(
    {
        text: { type: String, required: true },
        characterId: { type: ObjectId, ref: "Character", required: true },
        vote: { type: Number },
        profile: { type: String, ref: "Profile", required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)
Comment.virtual('creator', {
    localField: 'profile',
    ref: 'Profile',
    foreignField: '_id',
    justOne: true
});
export default Comment