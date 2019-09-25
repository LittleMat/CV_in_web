import ProfilPicture from '../../assets/profil_image.jpg';

export default class PersonnalPattern {
	constructor(last_name, first_name, picture, age, nationality, address, phone, email, mobility, personnal_website) {
		this.last_name = last_name;
		this.first_name = first_name;
		this.picture = picture;
		this.age = age;
		this.nationality = nationality;
		this.address = address;
		this.phone = phone;
		this.email = email;
		this.mobility = mobility ? mobility : '';
		this.personnal_website = personnal_website;
		console.log(ProfilPicture);
	}

	getHtml() {
		return `<div id="first_name" class="name">${this.first_name}</div>
				<div id="last_name" class="name">${this.last_name}</div>

				<img src="${ProfilPicture}" alt="profil_picture" id="profil_picture"/>

				<div id="age" class="small_info small_info_space">${this.age}</div> 
				<div id="nationality" class="small_info">${this.nationality}</div>

				<div id="address" class="small_info small_info_space">${this.address}</div>
				<div id="phone" class="small_info">${this.phone}</div>
				<div id="email" class="small_info">${this.email}</div>

				<div id="mobility" class="small_info small_info_space">${this.mobility}</div>

				<div id="personnal_website" class="small_info small_info_space">${this.personnal_website}</div>`
	}
}