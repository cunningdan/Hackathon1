import { BadRequest } from "../utils/Errors";
import { dbContext } from "../db/DbContext";
import Comment from "../models/Comment";

class CommentService {
    async getAll(query = {}) {
        return await dbContext.Comments.find(query).populate("userId")
    }
    async create(body) {
        return await dbContext.Comments.create(body)
    }
    async getCommentbyCharacter(id) {
        let data = await dbContext.Comments.find({ characterId: id }).populate('profile')
        console.log(data);
        return data
    }
    async delete(id, userId) {
        let commentsProfile = await dbContext.Comments.findById(id)
        //@ts-ignore
        if (userId == commentsProfile.profile && userId == commentsProfile.characterId) {
            await dbContext.Comments.findByIdAndDelete(id)
        }
        await dbContext.Comments.findByIdAndDelete(id)
        if (!Comment) {
            throw new BadRequest("No found Comment")
        } return this.getAll()
    }
    async edit(id, body) {
        await dbContext.Comments.findByIdAndUpdate(id, body, { new: true })
        if (!Comment) {
            throw new BadRequest("No found Comment")
        } return this.getAll()
    }
    async findById(id) {
        return await dbContext.Comments.findById(id).populate("userId")
    }
}

export const commentService = new CommentService()