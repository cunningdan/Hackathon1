export default class Character {
	constructor(data) {
		this.name = data.name;
		this.class = data.class.toLowerCase();
		this.id = data._id;
		this.profileId = data.profile.id;
		this.skills = data.skills;
		this.img = data.img;
		this.profileName = data.profile.name;
	}
	// <img src="${this.img}" class="d-block img-fluid" alt="...">

	get Template() {
		return /*html*/ `
		<div class="carousel-item justify-content-center">
			<div class="border border-dark shadow-lg rounded text-center custom-height" onclick="app.characterController.viewCharacter()">
				<h1>${this.name}</h1>
				<h3>${this.class}</h3>
				<h3>${this.profileName}</h3>
			</div>
        </div>
        `;
	}
}
