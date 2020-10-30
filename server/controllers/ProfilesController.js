import { Auth0Provider } from "@bcwdev/auth0provider";
import { characterService } from "../services/CharacterService";
import { profilesService } from "../services/ProfilesService";
import BaseController from "../utils/BaseController";

export class ProfilesController extends BaseController {
  constructor() {
    super("api/profiles");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("/:id", this.getUserProfile)
      .get("/:id/characters", this.getCharactersByProfile)
      .put("/:id", this.editProfile)
  }
  async getUserProfile(req, res, next) {
    try {
      let profile = await profilesService.getProfile(req.params.id);
      res.send(profile);
    } catch (error) {
      next(error);
    }
  }
  async getCharactersByProfile(req, res, next) {
    try {
      res.send(await characterService.getCharactersById(req.params.id))
    } catch (err) {
      next(err)
    }
  }
  async editProfile(req, res, next) {
    try {
      res.send(await profilesService.updateProfile(req.params.id, req.body))
    } catch (err) {
      next(err)
    }
  }
}
