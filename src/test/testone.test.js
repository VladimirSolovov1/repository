function del(a, b) {
	return a / b;
}

describe('del a / b ', () => {
	it("argument", () => {
		expect(del(6, 2)).toBe(3);
	})
})