import _ from 'lodash';
import style from './scss/style.scss';
import $ from 'jquery';
import PersonnalPattern from './patterns/personnal.pattern.js';
import SmallComponentPattern from './patterns/small_component.pattern.js';
import BigComponentPattern from './patterns/big_component.pattern.js';
import ObjectifPattern from './patterns/objectif.pattern.js';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

require('../dist/index.html')
// const cv_json = require('../cv_french.json')
const cv_json = require('../cv_english.json')

// Personnal component
function pattern_personnal() {
	let output = document.querySelector('#pattern_personnal'); // Where it will go
	let c = cv_json.CV.personnal; // Context in JSON
	let personnalPattern = new PersonnalPattern(c.name, c.my_title, c.picture, c.nationality, c.address, c.phone, c.email, c.mobility, c.personnal_website);
	let injectable = personnalPattern.getHtml(); // What is going to be injected (html)
	
	output.innerHTML = injectable; // Inject html structure 
} 

function pattern_small_components() {
	let output = document.querySelector('#pattern_small_component');
	let injectable = '';
	let c = cv_json.CV.small_components;

	for (var comp in c) {
		let smallComponentPattern = new SmallComponentPattern(c[comp].title, c[comp].content, c[comp].array, c[comp].list);
		injectable += smallComponentPattern.getHtml();
	}

	output.innerHTML = injectable; // Inject html structure 
}

function pattern_objectif(){
	let output = document.querySelector('#pattern_objectif');
	let c = cv_json.CV.objectif;
	let objectifPattern = new ObjectifPattern(c.title, c.text);
	let injectable = objectifPattern.getHtml();

	output.innerHTML = injectable;
}

function pattern_big_components() {
	let output = document.querySelector('#pattern_big_component');
	let injectable = '';
	let c = cv_json.CV.big_components;

	for (var comp in c) {
		let bigComponentPattern = new BigComponentPattern(c[comp].title, c[comp].icon, c[comp].elements, c[comp].rank);
		injectable += bigComponentPattern.getHtml();
	}

	output.innerHTML = injectable; // Inject html structure 
}


pattern_personnal();
pattern_small_components();
//pattern_objectif();
pattern_big_components();

