export default class Comment {
	constructor(data) {
		this.id = data.id;
		this.text = data.text;
		this.vote = data.vote;
		this.characterId = data.characterId;
		this.profileName = data.profile.name;
		this.profileId = data.profile.id;
	}
	// 	// <img src="${this.img}" class="d-block img-fluid" alt="...">

	get CommentTemplate() {
		return /*html*/ `
		<div class="col-4" offset="1">
			<h5>${this.profileName}</h5>
			<p>Likes: ${this.vote}</p>
			<button onclick="app.commentController.like('${this.id}')">Updoot</button>
			<button onclick="app.commentController.dislike('${this.id}')">Downtoot</button>
        </div>
        <div class="col-6">
            <p>${this.text}</p>
        </div>

        `;
	}
}
