import BaseController from "../utils/BaseController";
import { characterService } from "../services/CharacterService";

export class CharacterController extends BaseController {
    constructor() {
        super("api/characters");
        this.router
            .get("", this.getAll)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
            .get("/:characterId", this.findOne)

    }
    async getAll(req, res, next) {
        try {
            res.send(await characterService.getAll(req.query));
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            let data = await characterService.create(req.body)
            res.send(data);
        } catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            res.send(await characterService.delete(req.params.id))
        } catch (err) {
            next(err)
        }
    }
    async edit(req, res, next) {
        try {
            res.send(await characterService.edit(req.params.id, req.body))
        } catch (err) {
            next(err)
        }
    }
    async findOne(req, res, next) {
        try {
            res.send(await characterService.findById(req.params.galaxyId))
        } catch (err) {
            next(err)
        }
    }
}
