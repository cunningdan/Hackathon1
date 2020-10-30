// import { BadRequest } from "../utils/Errors";
// import { dbContext } from "../db/DbContext";
// import User from "../models/User";

// class UserService {
//     async getAll(query = {}) {
//         return await dbContext.Users.find(query)
//     }
//     async create(body) {
//         return await dbContext.Users.create(body)
//     }
//     async delete(id) {
//         await dbContext.Users.findByIdAndDelete(id)
//         if (!User) {
//             throw new BadRequest("No found User")
//         } return this.getAll()
//     }
//     async edit(id, body) {
//         await dbContext.Users.findByIdAndUpdate(id, body, { new: true })
//         if (!User) {
//             throw new BadRequest("No found User")
//         } return this.getAll()
//     }
//     async findById(id) {
//         return await dbContext.Users.findById(id)
//     }
// }

// export const userService = new UserService()