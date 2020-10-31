import { ProxyState } from '../AppState.js';
// import User from '../Models/User.js';
// import Character from '../Models/Character.js';
// import { api } from './AxiosService.js';
// import { profileService } from './ProfileService.js';

class UserService {
	constructor() {}
	getUserCharacters() {
		// ProxyState.characters = await api.get('characters').data;
		// debugger;
		ProxyState.userCharacters = ProxyState.characters.filter((c) => c.profileId == ProxyState.profile.id);
		console.log(ProxyState.profile.id);
	}
}

export const userService = new UserService();
