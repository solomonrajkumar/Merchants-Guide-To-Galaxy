import { expect } from 'chai';
import { AssignmentPatternHandler } from '../src/handlers/assignmentPatternHandler';
import { Context } from '../src/context';

describe("Assignment Pattern Handler", () => {
    let assignmentPatternHandler = new AssignmentPatternHandler();

    describe(`handle Assignment Pattern Input passed - 
        1. validate whether return value is a empty string
        2. validate whether itemValuemap is saved with the input value`, () => {
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

        it(`should initialize Context.initMap.itemValueMap when \"glob is I\" is passed - validate size of itemValueMap`, () => {
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
    })

    describe(`handling Assignment pattern for new input string passed - 
        1. validate whether return value is a empty string
        2. validate whether itemValuemap is updated with the new input value`, () => {
        let testInput = '';
        let expectedOutput = '';
        let expectedItemValueMapSize = 0;
        let expectedItemValueMap = {};

        beforeEach(() => {
            testInput = 'prok is V';
            expectedOutput = '';
            expectedItemValueMapSize = 2;
            expectedItemValueMap = {
                'glob': 'I',
                'prok': 'V'
            };
        });

        it(`should return \"\" when \"prok is V\" is passed`, () => {
            let testOutput = assignmentPatternHandler.handleInput(testInput);
            expect(testOutput).to.equal(expectedOutput);
        });

        it(`should update Context.initMap.itemValueMap when \"prok is V\" is passed - validate size of itemValueMap`, () => {
            assignmentPatternHandler.handleInput(testInput);
            let itemValueMap = Context.context().itemValueMap();
            let actualItemValueMapSize = Object.keys(itemValueMap).length;
            expect(actualItemValueMapSize).to.equal(expectedItemValueMapSize);
        });

        it("should update Context.initMap.itemValueMap when \"prok is V\" is passed - validate contents of itemValueMap", () => {
            let actualItemValueMap = Context.context().itemValueMap();
            let actualOutput = JSON.stringify(expectedItemValueMap) === JSON.stringify(actualItemValueMap)
            expect(true).to.equal(actualOutput);
        });
    })

});
