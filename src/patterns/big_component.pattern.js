import {arrayToHtml, listToHtml} from '../utils'

export default class BigComponentPattern {
	constructor(title, icon, elements, rank) {
		this.title = title;
		this.icon = icon ? icon : null;
		this.elements = elements ? this.elementsToHtml(elements) : null;
		this.rank = rank ? rank : null;
	}

	elementsToHtml(elements) { 
		let res = ''
 
		elements.forEach( function(e) {
			var class_date = e.date_end ? '' : 'hidden';
			var company = e.company ? e.company : '';
			var text = e.text ? e.text : '';
			var school_name = e.school_name ? e.school_name : '';
			var reason = e.reason ? e.reason : '';
			var rank = e.rank ? e.rank : '';
			var school_info = e.school_info ? e.school_info : '';
			res += `<div class="big_c_element">
						<div class="big_c_el_date">
							${e.date_begin} <span class="${class_date}">- ${e.date_end} </span>
						</div>
						<div class="big_c_el_text">
							${text} 
							<div class="big_el_school_name"> ${school_name}</div>
							<div class="big_el_company"><span>${company}</span><span class="big_el_reason">${reason}</span></div> 

							<div class="big_el_school_info"> <span>${school_info}</span> <span class="big_el_school_rank"> ${rank}</span> </div>
							<div class="italique smaller_item"></div>

							<div class="big_c_el_list">
								${e.list ? listToHtml(e.list) : ''}
							</div>
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