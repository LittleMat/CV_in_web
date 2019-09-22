import {arrayToHtml, listToHtml} from '../utils'

export default class SmallComponentPattern {
	constructor(title, content, array, list) {
		this.title = title;
		this.content = content;
		this.array = array ? arrayToHtml(array) : null;
		this.list = list ? listToHtml(list) : null;
	}

	getHtml() {
		return `<div class='small_component_holder'>
					<div class="small_c_title">${this.title}</div>
					<div class="small_c_content">${this.content ? this.content : ''}</div>

					<div class="small_c_array">${this.array ? this.array : ''}</div> 
					<div class="small_c_list">${this.list ? this.list : ''}</div>
				</div>`
	}
}