import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;
const Character = new Schema(
    {
        name: { type: String, required: true },
        class: { type: String, required: true },
        skills: { type: String },
        profile: { type: String, required: true },
        img: { type: String }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);
Character.virtual('creator', {
    localField: 'profile',
    ref: 'Profile',
    foreignField: '_id',
    justOne: true
});
export default Character;
