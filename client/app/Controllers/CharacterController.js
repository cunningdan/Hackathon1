import { ProxyState } from '../AppState.js';
import { characterService } from '../Services/CharacterService.js';

//Private
function _draw() {
	let template = '';
	ProxyState.characters.forEach((c) => (template += c.Template));
	if (ProxyState.characters.find((c) => c.class == 'wizard')) {
		document.getElementById('wizardCharacters').innerHTML = template;
	} else if (ProxyState.characters.find((c) => c.class == 'fighter')) {
		document.getElementById('fighterCharacters').innerHTML = template;
	} else if (ProxyState.characters.find((c) => c.class == 'ranger')) {
		document.getElementById('rangerCharacters').innerHTML = template;
	} else if (ProxyState.characters.find((c) => c.class == 'cleric')) {
		document.getElementById('clericCharacters').innerHTML = template;
	} else if (ProxyState.characters.find((c) => c.class == 'druid')) {
		document.getElementById('druidCharacters').innerHTML = template;
	}
}

//Public
export default class CharacterController {
	constructor() {
		console.log('character controller');
		ProxyState.on('characters', _draw);
	}

	getCharacters() {
		characterService.getCharacters();
	}

	addCharacter() {
		characterService.addCharacter();
	}
}
