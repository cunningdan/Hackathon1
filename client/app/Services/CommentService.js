import { ProxyState } from '../AppState.js';
// import User from '../Models/User.js';
// import Character from '../Models/Character.js';
import { api } from './AxiosService.js';
// import { profileService } from './ProfileService.js';

class CommentService {
	constructor() {}

	async getComments() {
		let res = await api.get('comments');
		ProxyState.comments = res.data.map((rawCommentData) => new Comment(rawCommentData));
	}
	async addComment(newComment) {
		let res = await api.post('comments', newComment);
		this.getComments();
		return res;

		ProxyState.selectedComments.push(comments);
	}
}
export const commentService = new CommentService();
