// export default class Character {
// 	constructor(data) {
// 		this.name = data.name;
// 		this.class = data.class;
// 		this.id = data._id;
// 		this.userId = data.userId;
// 		this.skills = data.skills;
// 		this.img = data.img;
// 		this.profileName = data.profile.name;
// 	}
// 	// <img src="${this.img}" class="d-block img-fluid" alt="...">

	get CommentTemplate() {
		return /*html*/ `
        <div class="col-4" offset="1">
            <img src="user img" alt=""/>
            <h5>username of commenter</h5>
        </div>
        <div class="col-6">
            <p>comment body</p>
        </div>

        `;
	}
}