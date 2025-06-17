describe('Electrons Around the Cores', function () {

	it("returns 6 for [1, 2, 3, 4, 5]", function () {
    	expect(electronsAroundCores([1, 2, 3, 4, 5])).toBe(6);
  	});

	it("returns 6 for [2, 2, 3, 3]", function () {
    	expect(electronsAroundCores([2, 2, 3, 3])).toBe(4);
  	});
	
	it("returns 2 for [6, 6, 4, 4, 1, 3]", function () {
  		expect(electronsAroundCores([6, 6, 4, 4, 1, 3])).toBe(2);
	});

});
