import BaseController from "../utils/BaseController";
import { commentService } from "../services/CommentService";
import { Auth0Provider } from "@bcwdev/auth0provider";


export class CommentController extends BaseController {
    constructor() {
        super("api/comments");
        this.router
            .get("", this.getAll)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
            .get("/:commentId", this.findOne)
            .get("", this.getVote)
            .put("/:commentId", this.upVote, this.downVote)

    }
    async getVote(req, res, next) {
        try {
            res.send(await commentService.getVote(req.params.commentId))
        } catch (err) {
            next(err)
        }
    }
    async upVote(req, res, next) {
        try {
            res.send(await commentService.upVote(req.params.commentId))
        } catch (err) {
            next(err)
        }
    }
    async downVote(req, res, next) {
        try {
            res.send(await commentService.upVote(req.params.commentId))
        } catch (err) {
            next(err)
        }
    }
    async getAll(req, res, next) {
        try {
            res.send(await commentService.getAll(req.query));
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            req.body.profile = req.userInfo.id;
            let data = await commentService.create(req.body)
            res.send(data);
        } catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            res.send(await commentService.delete(req.params.id))
        } catch (err) {
            next(err)
        }
    }
    async edit(req, res, next) {
        try {
            res.send(await commentService.edit(req.params.id, req.body))
        } catch (err) {
            next(err)
        }
    }
    async findOne(req, res, next) {
        try {
            res.send(await commentService.findById(req.params.commentId))
        } catch (err) {
            next(err)
        }
    }
}