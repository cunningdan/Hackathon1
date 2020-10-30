import Character from './Models/Character.js';
import { EventEmitter } from './Utils/EventEmitter.js';
import { isValidProp } from './Utils/isValidProp.js';

class AppState extends EventEmitter {
	user = {};
	profile = {};
	/** @type {Character[]} */
	characters = [];

	userCharacters = [];
}

export const ProxyState = new Proxy(new AppState(), {
	get(target, prop) {
		isValidProp(target, prop);
		return target[prop];
	},
	set(target, prop, value) {
		isValidProp(target, prop);
		target[prop] = value;
		target.emit(prop, value);
		return true;
	}
});
