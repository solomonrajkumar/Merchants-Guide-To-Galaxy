import { expect } from 'chai';
import { AssignmentPatternHandler } from '../src/handlers/assignmentPatternHandler';
<<<<<<< HEAD
import { Context } from '../src/context';
=======
import { Context } from '../src/config/context';
>>>>>>> 3104c03026cb53a4f32cfb4086e284de9fbbf094

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

<<<<<<< HEAD
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
=======
        it("should update initMap.itemValueMap when Assignment Pattern String is passed - validate size of itemValueMap", () => {
            assignmentPatternHandler.handleInput(testInput1);
            let itemValueMap = Context.getInstance().itemValueMap();
            let testOutput = Object.keys(itemValueMap).length;
            expect(testOutput).to.equal(expectedOutput2);
        });

        it("should update initMap.itemValueMap when Assignment Pattern String is passed - validate size of itemValueMap", () => {
            assignmentPatternHandler.handleInput(testInput2);
            let itemValueMap = Context.getInstance().itemValueMap();
            let testOutput = Object.keys(itemValueMap).length;
            expect(testOutput).to.equal(expectedOutput3);
>>>>>>> 3104c03026cb53a4f32cfb4086e284de9fbbf094
        });
    })

    describe(`handling Assignment pattern for new input string passed - 
        1. validate whether return value is a empty string
        2. validate whether itemValuemap is updated with the new input value`, () => {
        let testInput = '';
        let expectedOutput = '';
        let expectedItemValueMapSize = 0;
        let expectedItemValueMap = {};

<<<<<<< HEAD
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
=======
        it("should validate the contents of initMap.itemValueMap when Assignment Pattern String is passed", () => {
            let itemValueMap = Context.getInstance().itemValueMap();
            let expectedOutput = JSON.stringify(expectedOutput4) === JSON.stringify(itemValueMap)
            expect(true).to.equal(expectedOutput);
        });

        it("should update initMap.itemValueMap when Assignment Pattern String is passed - validate size of itemValueMap", () => {
            assignmentPatternHandler.handleInput(testInput3);
            let itemValueMap = Context.getInstance().itemValueMap();
            let testOutput = Object.keys(itemValueMap).length;
            expect(testOutput).to.equal(expectedOutput5);
        });

        it("should validate the contents of initMap.itemValueMap when Assignment Pattern String is passed", () => {
            assignmentPatternHandler.handleInput(testInput4);
            let itemValueMap = Context.getInstance().itemValueMap();
            let expectedOutput = JSON.stringify(expectedOutput6) === JSON.stringify(itemValueMap)
            expect(true).to.equal(expectedOutput);
>>>>>>> 3104c03026cb53a4f32cfb4086e284de9fbbf094
        });

        it("should update Context.initMap.itemValueMap when \"prok is V\" is passed - validate contents of itemValueMap", () => {
            let actualItemValueMap = Context.context().itemValueMap();
            let actualOutput = JSON.stringify(expectedItemValueMap) === JSON.stringify(actualItemValueMap)
            expect(true).to.equal(actualOutput);
        });
    })

});
