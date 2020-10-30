export default class User {
	constructor(data) {
		this.id = data._id;
		this.email = data.email;
		this.name = data.name;
		this.image = data.picture;
	}
	// 	// <img src="${this.img}" class="d-block img-fluid" alt="...">

	get UserTemplate() {
		return /*html*/ `
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">username</h5>
            <img src="user img" alt="">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <h5>Characters</h5>
            <ul id="characterList">
                ${CharacterNameTemplate()}
            </ul>
        </div>
        `;
	}

	get CharacterNameTemplate() {
		return /*html*/ `
        <li>character name</li>
        `;
	}
}
