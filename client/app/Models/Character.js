export default class Character {
	constructor(data) {
		this.name = data.name;
		this.class = data.class;
		this.id = data._id;
		this.userId = data.userId;
		this.skills = data.skills;
		this.img = data.img;
		this.profileName = data.profile.username;
	}
	// <img src="${this.img}" class="d-block img-fluid" alt="...">

	get Template() {
		return /*html*/ `
		<div class="carousel-item active d-flex justify-content-center">
			<div class="border border-dark shadow-lg rounded text-center custom-height">
				<h1>${this.name}</h1>
				<h3>${this.class}</h3>
				<h3>${this.profileName}</h3>
		
		
			</div>
        </div>
        `;
	}
}
