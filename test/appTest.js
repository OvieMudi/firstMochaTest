const assert = require("chai").assert,
	  app	 = require("../app.js");
//write test to ensure that app returns hello
describe("app", ()=>{
	describe("sayHello", ()=>{
		let result = app.sayHello();
		it("should return type String", ()=>{
			assert.typeOf(result, "string");
		});

		it("should return hello", ()=>{
			assert.equal(result, "hello");
		});
	});

	describe("addNumbers", ()=>{
		let result = app.addNumbers(5,5);
		it("should return type String", ()=>{
			assert.typeOf(result, "number");
		});

		it("should return hello", ()=>{
			assert.isAbove(result, 5);
		});
	});
});