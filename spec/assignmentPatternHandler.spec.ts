import { expect } from 'chai';
import { AssignmentPatternHandler } from '../src/handlers/assignmentPatternHandler';
import { Context } from '../src/context';

// let testInput1 = 'glob is I';
// let expectedOutput1 = "";
// let expectedOutput2 = 1;

let testInput2 = 'prok is V';
let expectedOutput3 = 2;

let expectedOutput4 = {
  'glob': 'I',
  'prok': 'V'
};

let testInput3 = 'pish is X';
let expectedOutput5 = 3;

let testInput4 = 'tegj is L';
let expectedOutput6 = {
  'glob': 'I',
  'prok': 'V',
  'pish': 'X',
  'tegj': 'L'
};


describe("Assignment Pattern Handler", () => {
    describe(`handle Assignment Pattern Input passed - 
    1. validate whether return value is a empty string
    2. validate whether itemValuemap is saved with the input value`, () => {
        let assignmentPatternHandler = new AssignmentPatternHandler();
        let testInput = '';
        let expectedOutput = '';
        let expectedItemValueMapSize = 0;
        let expectedItemValueMap = {};

        beforeEach(() => {
            testInput = 'glob is I';
            expectedOutput = '';
            expectedItemValueMapSize = 1;
            expectedItemValueMap = {
                'glob': 'I'
            };
        });

        it(`should return \"\" when \"glob is I\" is passed`, () => {
            let testOutput = assignmentPatternHandler.handleInput(testInput);
            expect(testOutput).to.equal(expectedOutput);
        });

        it(`should update Context.initMap.itemValueMap when \"glob is I\" is passed; validate size of itemValueMap`, () => {
            assignmentPatternHandler.handleInput(testInput);
            let itemValueMap = Context.context().itemValueMap();
            let actualItemValueMapSize = Object.keys(itemValueMap).length;
            expect(actualItemValueMapSize).to.equal(expectedItemValueMapSize);
        });

        it("should update Context.initMap.itemValueMap when \"glob is I\" is passed - validate contents of itemValueMap", () => {
            let actualItemValueMap = Context.context().itemValueMap();
            let actualOutput = JSON.stringify(expectedItemValueMap) === JSON.stringify(actualItemValueMap)
            expect(true).to.equal(actualOutput);
        });

        // it("should validate the contents of Context.initMap.itemValueMap when Assignment Pattern String is passed", () => {
        //     let itemValueMap = Context.context().itemValueMap();
        //     let expectedOutput = JSON.stringify(expectedOutput4) === JSON.stringify(itemValueMap)
        //     expect(true).to.equal(expectedOutput);
        // });

        // it("should update Context.initMap.itemValueMap when Assignment Pattern String is passed - validate size of itemValueMap", () => {
        //     assignmentPatternHandler.handleInput(testInput3);
        //     let itemValueMap = Context.context().itemValueMap();
        //     let testOutput = Object.keys(itemValueMap).length;
        //     expect(testOutput).to.equal(expectedOutput5);
        // });

        // it("should validate the contents of Context.initMap.itemValueMap when Assignment Pattern String is passed", () => {
        //     assignmentPatternHandler.handleInput(testInput4);
        //     let itemValueMap = Context.context().itemValueMap();
        //     let expectedOutput = JSON.stringify(expectedOutput6) === JSON.stringify(itemValueMap)
        //     expect(true).to.equal(expectedOutput);
        // });

    })
});
