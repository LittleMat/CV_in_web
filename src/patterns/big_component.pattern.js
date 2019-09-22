import {arrayToHtml, listToHtml} from '../utils'

export default class BigComponentPattern {
	constructor(title, icon, elements) {
		this.title = title;
		this.icon = icon ? icon : null;
		this.elements = elements ? this.elementsToHtml(elements) : null;
	}

	elementsToHtml(elements) { 
		let res = ''
 
		elements.forEach( function(e) {
			var class_date = e.date_end ? '' : 'hidden';
			res += `<div class="big_c_element">
						<div class="big_c_el_date">
							${e.date_begin} <span class="${class_date}">- ${e.date_end} </span>
						</div>
						<div class="big_c_el_text">
							${e.text} 
							<div class="big_c_el_list">
								${e.list ? listToHtml(e.list) : ''}
							</div>
						</div>
					</div>`
		});

		return res;
	}

	getHtml() {
		return `<div class='big_component_holder'>
					<div class="big_c_title">${this.title}</div>
					<div class="big_c_elements_holder">${this.elements ? this.elements : ''}</div> 
				</div>`
	}
}