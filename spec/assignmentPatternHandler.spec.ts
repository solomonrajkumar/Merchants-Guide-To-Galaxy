import { expect } from 'chai';
import { AssignmentPatternHandler } from '../src/handlers/assignmentPatternHandler';
import { Config } from '../src/config/config';

let testInput1 = 'glob is I';
let expectedOutput1 = "";
let expectedOutput2 = 1;

let testInput2 = 'prok is V';
let expectedOutput3 = 2;

let expectedOutput4 = {
  'glob': 'I',
  'prok': 'V'
};


describe("Assignment Pattern Handler", () => {
    describe("handle Assignment Pattern Input passed", () => {
        let assignmentPatternHandler = new AssignmentPatternHandler();

        it("should return \"\" when Assignment Pattern String is passed", () => {
            let testOutput = assignmentPatternHandler.handleInput(testInput1);
            expect(testOutput).to.equal(expectedOutput1);
        });

        it("should update initMap.itemValueMap when Assignment Pattern String is passed - validate size of itemValueMap", () => {
            assignmentPatternHandler.handleInput(testInput1);
            let itemValueMap = Config.initMap.itemValueMap;
            let testOutput = Object.keys(itemValueMap).length;
            expect(testOutput).to.equal(expectedOutput2);
        });

        it("should update initMap.itemValueMap when Assignment Pattern String is passed - validate size of itemValueMap", () => {
            assignmentPatternHandler.handleInput(testInput2);
            let itemValueMap = Config.initMap.itemValueMap;
            let testOutput = Object.keys(itemValueMap).length;
            expect(testOutput).to.equal(expectedOutput3);
        });

        it("should validate the contents of initMap.itemValueMap when Assignment Pattern String is passed", () => {
            let itemValueMap = Config.initMap.itemValueMap;
            let expectedOutput = JSON.stringify(expectedOutput4) === JSON.stringify(itemValueMap)
            expect(true).to.equal(expectedOutput);
        });

    })
});
