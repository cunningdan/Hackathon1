import { ProxyState } from '../AppState.js';
// import User from '../Models/User.js';
// import Character from '../Models/Character.js';
import { api } from './AxiosService.js';
import Comment from '../Models/Comment.js';
// import { profileService } from './ProfileService.js';

class CommentService {
	constructor() {}

	async getComments(charId) {
		let res = await api.get('/characters/' + charId + '/comments');
		ProxyState.comments = res.data.map((rawCommentData) => new Comment(rawCommentData));
	}
	async addComment(newComment) {
		let res = await api.post('comments', newComment);
		this.getComments(res.data.characterId);
		return res;
	}

	async like(commentId) {
		let res = await api.put('comments/' + commentId + '/vote?vote=1');
		let i = ProxyState.comments.findIndex((c) => c.id == commentId);
		ProxyState.comments.splice(i, 1, new Comment(res.data));
		ProxyState.comments = ProxyState.comments;
	}

	async dislike(commentId) {
		let res = await api.put('comments/' + commentId + '/vote?vote=-1');
		let i = ProxyState.comments.findIndex((c) => c.id == commentId);
		ProxyState.comments.splice(i, 1, new Comment(res.data));
		ProxyState.comments = ProxyState.comments;
	}
}
export const commentService = new CommentService();
