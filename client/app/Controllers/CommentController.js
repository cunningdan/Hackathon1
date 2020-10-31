import { ProxyState } from '../AppState.js';
import { commentService } from '../Services/CommentService.js';

//Private
function _drawComments(id) {
	let template = '';

	document.getElementById('selectedCharacter').innerHTML = ProxyState.selectedCharacter.SelectedCharacterTemplate;
}

//Public
export class CommentController {
	constructor() {
		ProxyState.on('comments', _drawComments);
	}

	getCharacters() {
		try {
			commentService.getComments();
		} catch (error) {
			console.error(error);
		}
	}

	addComment(e, cId, pId) {
		e.preventDefault();
		let formData = e.target;
		let newComment = {
			text        : formData.text.value,
			characterId : cId,
			profileId   : pId
		};
		try {
			commentService.addComment(newComment);
			formData.reset();
		} catch (error) {
			console.error(error);
		}
	}
}
