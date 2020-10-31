import BaseController from '../utils/BaseController';
import { characterService } from '../services/CharacterService';
import { Auth0Provider } from '@bcwdev/auth0provider';

export class CharacterController extends BaseController {
    constructor() {
        super('api/characters');
        this.router
            .get('', this.getAll)
            .get('/:characterId', this.findOne)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.create)
            .put('/:id', this.edit)
            .delete('/:id', this.delete);
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
            req.body.profile = req.userInfo.id;
            res.send(await characterService.create(req.body))

        } catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            res.send(await characterService.delete(req.params.id, req.userInfo.id))
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
            res.send(await characterService.findById(req.params.characterId))
        } catch (err) {
            next(err)
        }
    }
}

