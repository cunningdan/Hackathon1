import { ProxyState } from '../AppState.js';
import { userService } from '../Services/UserService.js';

//Private
function _drawCharactersByUser(userId) {
	let template = '';
	ProxyState.userCharacters.forEach((c) => (template += c.UserTemplate));
	document.getElementById('userTemplate').innerHTML = template;
	document.getElementById('username').innerHTML = ProxyState.profile.name;
}

//Public
export class UserController {
	constructor() {
		ProxyState.on('userCharacters', _drawCharactersByUser);
	}

	getUserCharacters() {
		userService.getUserCharacters();
	}
}
