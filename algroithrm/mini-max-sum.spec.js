const findMnSum = require("./mini-max-sum");

test("Input string, number", () => {
	expect(findMnSum("A")).toBe(`Input must a Array`);
	expect(findMnSum(1)).toBe(`Input must a Array`);
});

test("Input []", () => {
	expect(findMnSum([])).toBe(`Array length must greater than 0`);
});

test("Input [1 2 3 4 5]", () => {
	expect(findMnSum([1, 2, 3, 4, 5])).toBe(`10 14`);
});

test("Input ['1', 2, 3, 4, 5]", () => {
	expect(findMnSum(["1", 2, 3, 4, 5])).toBe(`Array must be a integers array`);
});

test("Input [1e+25, 2, 3, 4, 5]", () => {
	expect(findMnSum([1e25, 2, 3, 4, 5])).toBe(`Array must be a integers array`);
});
