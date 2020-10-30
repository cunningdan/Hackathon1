import { ProxyState } from '../AppState.js';
import { userService } from '../Services/UserService.js';

//Private
function _drawCharactersByUser(userId) {
	let template = '';
	// ProxyState.characters.find(c => c.userId == userId)
	ProxyState.userCharacters.forEach((c) => (template += c.Template));
	document.getElementById('userTemplate').innerHTML = template;
}

//Public
export default class UserController {
	constructor() {
		ProxyState.on('userCharacters', _drawCharactersByUser);
	}

	getUserCharacters() {
		try {
			userService.getUserCharacters();
		} catch (error) {
			console.error(error);
		}
	}
}
