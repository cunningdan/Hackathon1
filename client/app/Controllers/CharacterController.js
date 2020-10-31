import { ProxyState } from '../AppState.js';
import { characterService } from '../Services/CharacterService.js';

//Private
function _draw() {
	console.log(ProxyState.characters);
	// let template = '';
	ProxyState.characters.forEach((c) => {
		if (c.class == 'wizard') {
			console.log(c);
			// ProxyState.characters.forEach((c) => (template += c.WizardTemplate));
			document.getElementById('wizardCharacters').innerHTML += c.Template;
		}
		if (c.class == 'fighter') {
			console.log(c);
			// ProxyState.characters.forEach((c) => (template += c.WizardTemplate));
			document.getElementById('fighterCharacters').innerHTML += c.Template;
		}
		if (c.class == 'ranger') {
			console.log(c);
			// ProxyState.characters.forEach((c) => (template += c.WizardTemplate));
			document.getElementById('rangerCharacters').innerHTML += c.Template;
		}
		if (c.class == 'cleric') {
			console.log(c);
			// ProxyState.characters.forEach((c) => (template += c.WizardTemplate));
			document.getElementById('clericCharacters').innerHTML += c.Template;
		}
		if (c.class == 'druid') {
			console.log(c);
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

	viewCharacter(id) {
		ProxyState.selectedCharacter = ProxyState.characters.find((c) => c.id == id);
		console.log(ProxyState.selectedCharacter);
		document.getElementById('selectedCharacter').innerHTML = ProxyState.selectedCharacter.SelectedCharacterTemplate;
	}
}
