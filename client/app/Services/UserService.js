import { ProxyState } from '../AppState.js';
import User from '../Models/User.js';
import Character from '../Models/Character.js';
import { api } from './AxiosService.js';
import { profileService } from './ProfileService.js';

class UserService {
	constructor() {
		console.log('user service');
	}
	getUserCharacters() {
		// ProxyState.characters = await api.get('characters').data;
		ProxyState.userCharacters = ProxyState.characters.filter((c) => c.profileName == ProxyState.profile.id);
		console.log(ProxyState.userCharacters);
		// let res = await api.get('characters');
		// console.log(res);
		// ProxyState.userCharacters = res.data.map((rawCharacterData) => new Character(rawCharacterData));
		// console.log(res);
	}
}

export const userService = new UserService();
