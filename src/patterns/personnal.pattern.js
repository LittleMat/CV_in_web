import ProfilPicture from '../../assets/profil_image.jpg';

export default class PersonnalPattern {
	constructor(name, my_title, picture, age, nationality, address, phone, email, mobility, personnal_website) {
		this.name = name;
		this.my_title = my_title;
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
		return `<div id="name" class="name">${this.name}</div>

				<img src="${ProfilPicture}" alt="profil_picture" id="profil_picture"/>

				<div id="my_title" class="my_title">${this.my_title}</div>

				<div id="age" class="small_info small_info_space">${this.age}, ${this.nationality}</div> 

				<div id="address" class="small_info small_info_space">${this.address}</div>
				<div id="phone" class="small_info">${this.phone}</div>
				<div id="email" class="small_info">${this.email}</div>

				<div id="mobility" class="small_info small_info_space">${this.mobility}</div>

				<a id="personnal_website" class="small_info small_info_space" style='text-decoration: none;' href='http://mathieu-montgomery.ovh/'>${this.personnal_website}</div>`
	}
}