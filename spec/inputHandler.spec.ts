import { expect } from 'chai';
import { InputHandler } from '../src/inputHandler';

let testInput1 = 'glob is I';
let expectedOutput1 = "";

let testInput2 = 'glob glob Silver is 34 Credits';
let expectedOutput2 = "";

let testInput3 = 'how much is pish tegj glob glob ?';
let expectedOutput3 = "pish tegj glob glob is 42";

let testInput4 = 'how many Credits is glob prok Iron ?';
let expectedOutput4 = "glob prok Iron is 782 Credits";

let testInput5 = 'how much wood could a woodchuck chuck if a woodchuck could chuck wood ?';
let expectedOutput5 = "I have no idea what you are talking about";

describe("Input Handler", () => {
    describe("handle Input Passed", () => {
        let inputHandler = new InputHandler();

        it("should return \"\" when Assignment Pattern String is passed", () => {

            let testOutput1 = inputHandler.handleInput(testInput1);

            expect(testOutput1).to.equal(expectedOutput1);
        });

        it("should return \"\" when Credit Pattern String is passed", () => {

            let testOutput2 = inputHandler.handleInput(testInput2);

            expect(testOutput2).to.equal(expectedOutput2);
        });

        // it("should return expected output when Conversion Question Pattern String is passed", () => {
        //
        //     let testOutput3 = inputHandler.handleInput(testInput3);
        //
        //     expect(testOutput3).to.equal(expectedOutput3);
        // });
        //
        // it("should return expected output when Credit Question Pattern String is passed", () => {
        //
        //     let testOutput4 = inputHandler.handleInput(testInput4);
        //
        //     expect(testOutput4).to.equal(expectedOutput4);
        // });
        //
        it("should return expected output when Invalid Pattern String is passed", () => {

            let testOutput5 = inputHandler.handleInput(testInput5);

            expect(testOutput5).to.equal(expectedOutput5);
        });

    })
});
