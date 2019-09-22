export function arrayToHtml(array) {
	let res = '';
	for (var item in array) {
		res += `<div>${array[item]}</div>`
	}
	return res
}

export function listToHtml(list) {
	let res = '<ul>';
	for (var item in list) {
		res += `<li>${list[item]}</li>`
	}
	res += '</ul>'
	return res
}