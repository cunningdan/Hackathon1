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

	like(commentId) {
		try {
			commentService.like(commentId);
		} catch (error) {
			console.error(error);
		}
	}

	dislike(commentId) {
		try {
			commentService.dislike(commentId);
		} catch (error) {
			console.error(error);
		}
	}

	addComment(e, cId, pId) {
		e.preventDefault();
		let formData = e.target;
		let newComment = {
			text        : formData.commentText.value,
			characterId : cId,
			profileId   : pId
		};
		try {
			commentService.addComment(newComment);
			console.log(newComment);
			formData.reset();
		} catch (error) {
			console.error(error);
		}
	}
}
