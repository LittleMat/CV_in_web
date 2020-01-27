import {arrayToHtml, listToHtml} from '../utils'

export default class BigComponentPattern {
	constructor(title, icon, elements, rank) {
		this.title = title;
		this.icon = icon ? icon : null;
		this.elements = elements ? this.elementsToHtml(elements) : null;
		this.rank = rank ? this.elementsToHtml(rank) : "null";
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
							<div class="italique smaller_item">${e.rank ? e.rank : ''}</div>
						</div>
					</div>`
		});

		return res;
	}

	getHtml() {
		let icon = this.icon ? `<i class="${this.icon} icon_big_c"></i>` : ''
		return `<div class='big_component_holder'>
					<div class="big_c_title">${icon}${this.title}</div>
					<div class="big_c_elements_holder">${this.elements ? this.elements : ''}</div> 
				</div>`
	}
}