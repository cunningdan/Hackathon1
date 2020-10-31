import { Auth0Provider } from "@bcwdev/auth0provider";
import { characterService } from "../services/CharacterService";
import { profilesService } from "../services/ProfilesService";
import BaseController from "../utils/BaseController";

export class ProfilesController extends BaseController {
  constructor() {
    super("api");
    this.router
      // the logged in user
      .use("/profile", Auth0Provider.getAuthorizedUserInfo)
      .get("/profile", this.getUserProfile) // leave me
      .put("/profile", this.editProfile)

      /// api for other people
      .use("/profiles", Auth0Provider.getAuthorizedUserInfo)
      .get("/profiles", this.getProfiles)
      .get("/profiles/:id/characters", this.getCharactersByProfile)
  }
  async getProfiles(req, res, next) {
    try {
      let profiles = await profilesService.getProfiles(req.query, req.userInfo.email)
      res.send(profiles)
    } catch (err) {
      next(err)
    }
  }
  async getUserProfile(req, res, next) {
    try {
      let profile = await profilesService.getProfile(req.userInfo.id);
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
