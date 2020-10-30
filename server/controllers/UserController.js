import BaseController from "../utils/BaseController";
import { userService } from "../services/UserService";

export class UserController extends BaseController {
    constructor() {
        super("api/users");
        this.router
            .get("", this.getAll)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
            .get("/:userId", this.findOne)

    }
    async getAll(req, res, next) {
        try {
            res.send(await userService.getAll(req.query));
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            let data = await userService.create(req.body)
            res.send(data);
        } catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            res.send(await userService.delete(req.params.id))
        } catch (err) {
            next(err)
        }
    }
    async edit(req, res, next) {
        try {
            res.send(await userService.edit(req.params.id, req.body))
        } catch (err) {
            next(err)
        }
    }
    async findOne(req, res, next) {
        try {
            res.send(await userService.findById(req.params.userId))
        } catch (err) {
            next(err)
        }
    }
}