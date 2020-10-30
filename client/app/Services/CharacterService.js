import { ProxyState } from '../AppState.js';
import Character from '../Models/Character.js';

class CharacterService {
	constructor() {
		console.log('character service');
	}
	addValue() {
		ProxyState.characters = [
			...ProxyState.characters,
			new Character({ title: Math.random() })
		];
	}
}

export const characterService = new CharacterService();
