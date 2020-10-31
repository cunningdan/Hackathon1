export default class Comment {
	constructor(data) {
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
        </div>
        <div class="col-6">
            <p>${this.text}</p>
        </div>

        `;
	}
}
