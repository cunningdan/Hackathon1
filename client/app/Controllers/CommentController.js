import { ProxyState } from '../AppState.js';
import { commentService } from '../Services/CommentService.js';

//Private
function _drawCharactersByComment(commentId) {
	let template = '';
	ProxyState.commentCharacters.forEach((c) => (template += c.CommentTemplate));
	document.getElementById('commentTemplate').innerHTML = template;
}

//Public
export class CommentController {
	constructor() {
		ProxyState.on('commentCharacters', _drawCharactersByComment);
	}

	getCommentCharacters() {
		commentService.getCommentCharacters();
	}
}
