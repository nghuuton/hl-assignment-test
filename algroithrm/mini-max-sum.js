let evens = [];
let odds = [];

function findMnSum(arr) {
	if (!Array.isArray(arr)) return "Input must a Array";
	if (arr.length === 0) return "Array length must greater than 0";
	if (arr.some((item) => item < 0 || typeof item !== "number" || /[a-zA-Z]+/.test(item)))
		return "Array must be a integers array";
	let min = arr[0];
	let max = arr[0];
	const sum = arr.reduce((acc, current) => {
		if (current < min) min = current;
		if (current > max) max = current;
		if (current % 2 === 0) evens = [...evens, current];
		else odds = [...odds, current];
		return acc + current;
	}, 0);
	return `${sum - max} ${sum - min}`;
}

module.exports = findMnSum;
