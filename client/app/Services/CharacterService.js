import { ProxyState } from '../AppState.js';
import Character from '../Models/Character.js';
import { api } from './AxiosService.js';

class CharacterService {
	constructor() {
		console.log('character service');
	}
	async getCharacters() {
		// ProxyState.characters = await api.get('characters').data;
		let res = await api.get('characters');
		ProxyState.characters = res.data.map((rawCharacterData) => new Character(rawCharacterData));
		console.log(res);
	}

	async addCharacter(newCharacter) {
		return await api.post('characters', newCharacter);
		this.getCharacters();
	}
}

export const characterService = new CharacterService();
