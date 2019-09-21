export default class SmallComponentPattern {
	constructor(title, content, array, list) {
		this.title = title;
		this.content = content;
		this.array = array ? this.arrayToHtml(array) : null;
		this.list = list ? this.listToHtml(list) : null;
	}

	arrayToHtml(array) {
		let res = '';
		for (var item in array) {
			res += `<div>${array[item]}</div>`
		}
		return res
	}

	listToHtml(list) {
		let res = '<ul>';
		for (var item in list) {
			res += `<li>${list[item]}</li>`
		}
		res += '</ul>'
		return res
	}

	getHtml() {
		return `<div class='small_component_holder'>
					<div>${this.title}</div>
					<div>${this.content ? this.content : ''}</div>

					<div>${this.array ? this.array : ''}</div> 
					<div>${this.list ? this.list : ''}</div>
				</div>`
	}
}