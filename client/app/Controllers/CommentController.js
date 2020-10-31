import { ProxyState } from '../AppState.js';
import { commentService } from '../Services/CommentService.js';

//Private
function _drawComments() {
	let template = '';
	ProxyState.comments.forEach((c) => (template += c.CommentTemplate));
	document.getElementById('comments').innerHTML = template;
}

//Public
export class CommentController {
	constructor() {
		ProxyState.on('comments', _drawComments);
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
