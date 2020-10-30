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

	get Template() {
		return /*html*/ `
		<div id="characterSheet" class="container-fluid">
           <div class="row">
                <div class="col-12">
                    <h1>Character Name</h1>
                    <h3>Character Class</h3>
                    <h5>Creator</h5>
                </div>
           </div>
           <div class="row">
               <div class="col-4">
                   <img src="//placehold.it/200" alt="">
               </div>
               <div class="col-4">
                   <h4>STR: <span>character strength</span></h4>
                   <h4>DEX: <span>char dex</span></h4>
                   <h4>CON: <span>char con</span></h4>
                   <h4>WIS: <span>char wis</span></h4>
                   <h4>Int: <span>char int</span></h4>
                   <h4>CHA: <span>char cha</span></h4>
               </div>
               <div class="col-4">
                   <h4>Level <span>char lvl</span></h4>
                   <h4>Race <span>char race</span></h4>
               </div>
           </div>
           <div class="row">
               <div class="col-3">
                   <h5>Skills</h5>
                   <ul>
                        <li>Arcana</li>
                        <li>Athletics</li>
                        <li>Deception</li>
                        <li>Perception</li>
                        <li>Stealth</li>
                        <li>Survival</li>
                   </ul>
               </div>
               <div class="col-3">
                   <h5>Equipment</h5>
                   <ul>
                        <li>Adventurer's Pack</li>
                        <li>Short Sword</li>
                        <li>Components Pouch</li>
                   </ul>
               </div>
               <div class="col-3">
                   <h5>Spells</h5>
                   <ul>
                        <li>Eldritch Blast</li>
                        <li>Prestidigitation</li>
                        <li>Light</li>
                        <li>Mage Hand</li>
                   </ul>
               </div>
               <div class="col-3">
                   <h5>Attacks</h5>
                   <ul>
                       <li>Unarmed Attack - + Strength Bonus To Hit & Damage</li>
                       <li>Ranged Attack - + Dexterity Bonus To Hit & Damage If A Physical Attack</li>
                   </ul>
               </div>
           </div>
           <div class="row">
                <div class="col-10" offset="1">
                    <form action="submit">
                        <input type="textarea"/>
                        <button type="submit" onclick="app.commentController.addComment(event)">Comment</button>
                    </form>
                </div>
                <div id="comments">
                
                </div>
           </div>
       </div>
        `;
	}
}