import _ from 'lodash';
import style from './scss/style.scss';
import $ from 'jquery';
import PersonnalPattern from './patterns/personnal.pattern.js';
import SmallComponentPattern from './patterns/small_components.pattern.js';

require('../dist/index.html')
const cv_json = require('../cv_french.json')

// Personnal component
function pattern_personnal() {
	let output = document.querySelector('#pattern_personnal'); // Where it will go
	let c = cv_json.CV.personnal; // Context in JSON
	let personnalPattern = new PersonnalPattern(c.last_name, c.first_name, c.picture, c.age, c.nationality, c.address, c.phone, c.email, c.mobility, c.personnal_website);
	let injectable = personnalPattern.getHtml(); // What is going to be injected (html)
	
	output.innerHTML = injectable; // Inject html structure 
}

function pattern_small_components() {
	let output = document.querySelector('#small_components');
	let injectable = '';
	let c = cv_json.CV.small_components;

	for (var comp in c) {
		let smallComponentPattern = new SmallComponentPattern(c[comp].title, c[comp].content, c[comp].array, c[comp].list);
		console.log(smallComponentPattern.getHtml())
		injectable += smallComponentPattern.getHtml();
	}

	output.innerHTML = injectable; // Inject html structure 
}


pattern_personnal();
pattern_small_components();
