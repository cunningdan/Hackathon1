export default class Character {
	constructor(data) {
		this.name = data.name;
		this.class = data.class;
		this.id = data._id;
		this.userId = data.userId;
		this.skills = data.skills;
		this.img = data.img;
	}

	get Template() {
		return /*html*/ `
        <div class="carousel-item active d-flex justify-content-center">
            <img src="//placehold.it/400" class="d-block img-fluid  w-75" alt="...">
        </div>
        `;
	}
}
