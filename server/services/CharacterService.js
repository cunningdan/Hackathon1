import { BadRequest } from "../utils/Errors";
import { dbContext } from "../db/DbContext";
import Character from "../models/Character";

class CharacterService {
    async getAll(query = {}) {
        return await dbContext.Characters.find(query).populate('profile')
    }
    async create(body) {
        return await dbContext.Characters.create(body)
    }
    async delete(id) {
        await dbContext.Characters.findByIdAndDelete(id)
        if (!Character) {
            throw new BadRequest("No found Character")
        } return this.getAll()
    }
    async edit(id, body) {
        await dbContext.Characters.findByIdAndUpdate(id, body, { new: true })
        if (!Character) {
            throw new BadRequest("No found Character")
        } return this.getAll()
    }
    async findById(id) {
        return await dbContext.Characters.findById(id).populate("profile")
    }
    async getCharactersById(id) {
        return await dbContext.Characters.find({ profile: id })
    }
}

export const characterService = new CharacterService()