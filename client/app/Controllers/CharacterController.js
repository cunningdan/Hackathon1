import { ProxyState } from '../AppState.js';
import { characterService } from '../Services/CharacterService.js';

//Private
function _draw() {
	// let template = '';
	ProxyState.characters.forEach((c) => {
		if (c.class == 'wizard') {
			// ProxyState.characters.forEach((c) => (template += c.WizardTemplate));
			document.getElementById('wizardCharacters').innerHTML += c.Template;
		}
		if (c.class == 'fighter') {
			// ProxyState.characters.forEach((c) => (template += c.WizardTemplate));
			document.getElementById('fighterCharacters').innerHTML += c.Template;
		}
		if (c.class == 'ranger') {
			// ProxyState.characters.forEach((c) => (template += c.WizardTemplate));
			document.getElementById('rangerCharacters').innerHTML += c.Template;
		}
		if (c.class == 'cleric') {
			// ProxyState.characters.forEach((c) => (template += c.WizardTemplate));
			document.getElementById('clericCharacters').innerHTML += c.Template;
		}
		if (c.class == 'druid') {
			// ProxyState.characters.forEach((c) => (template += c.WizardTemplate));
			document.getElementById('druidCharacters').innerHTML += c.Template;
		}
	});
}

// function _drawCharactersByUser(userId) {
// 	let template = ''
// 	ProxyState.characters.find(c => c.userId == userId)
// }

//Public
export default class CharacterController {
	constructor() {
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
			formData.reset();
		} catch (error) {
			console.error(error);
		}
	}

	viewCharacter(id) {
		ProxyState.selectedCharacter = ProxyState.characters.find((c) => c.id == id);
		document.getElementById('selectedCharacter').innerHTML = ProxyState.selectedCharacter.SelectedCharacterTemplate;
	}
}
