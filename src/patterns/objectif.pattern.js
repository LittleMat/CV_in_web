export default class ObjectifPattern {
	constructor(title, text) {
		this.title = title;
		this.text = text;
	}

	getHtml() {
		return `<div>
					<div class="objectif_title">${this.title}</div>
					<div class="objectif_text">${this.text}</div>
				</div>`
	}
}