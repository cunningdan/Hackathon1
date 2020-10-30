import { ProxyState } from '../AppState.js';
import { characterService } from '../Services/CharacterService.js';

//Private
function _draw() {
	console.log(ProxyState.characters);
	let template = '';
	ProxyState.characters.forEach((c) => (template += c.Template));
	if (ProxyState.characters.find((c) => c.class == 'wizard')) {
		document.getElementById('wizardCharacters').innerHTML = template;
	}
	if (ProxyState.characters.find((c) => c.class == 'fighter')) {
		document.getElementById('fighterCharacters').innerHTML = template;
	}
	if (ProxyState.characters.find((c) => c.class == 'ranger')) {
		document.getElementById('rangerCharacters').innerHTML = template;
	}
	if (ProxyState.characters.find((c) => c.class == 'cleric')) {
		document.getElementById('clericCharacters').innerHTML = template;
	}
	if (ProxyState.characters.find((c) => c.class == 'druid')) {
		document.getElementById('druidCharacters').innerHTML = template;
	}
}

// function _drawCharactersByUser(userId) {
// 	let template = ''
// 	ProxyState.characters.find(c => c.userId == userId)
// }

//Public
export default class CharacterController {
	constructor() {
		console.log('character controller');
		ProxyState.on('characters', _draw);
		this.getCharacters();
	}

	getCharacters() {
		try {
			characterService.getCharacters();
		} catch (error) {
			console.error(error);
		}
	}

	addCharacter(e) {
		e.preventDefault();
		let formData = e.target;
		let newCharacter = {
			name  : formData.name.value,
			class : formData.class.value
		};
		try {
			characterService.addCharacter(newCharacter);
		} catch (error) {
			console.error(error);
		}
	}
}
