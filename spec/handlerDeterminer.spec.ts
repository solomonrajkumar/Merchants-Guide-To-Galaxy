import { expect } from 'chai';
import { HandlerDeterminer } from '../src/handlerDeterminer';
import { AssignmentPatternHandler } from '../src/handlers/assignmentPatternHandler';
// import { CreditPatternHandler } from '../src/handlers/creditPatternHandler';
// import { ConversionQuestionPatternHandler } from '../src/handlers/conversionQuestionPatternHandler';
// import { CreditQuestionPatternHandler } from '../src/handlers/creditQuestionPatternHandler';
import { InvalidPatternHandler } from '../src/handlers/invalidPatternHandler';

let testInput1 = 'glob is I';
let expectedOutput1 = new AssignmentPatternHandler();

// let testInput2 = 'glob glob Silver is 34 Credits';
// let expectedOutput2 = new CreditPatternHandler();

// let testInput3 = 'how much is pish tegj glob glob ?';
// let expectedOutput3 = new ConversionQuestionPatternHandler();

// let testInput4 = 'how many Credits is glob prok Gold ?';
// // let expectedOutput4 = new CreditQuestionPatternHandler();

let testInput5 = 'how much wood could a woodchuck chuck if a woodchuck could chuck wood ?';
let expectedOutput5 = new InvalidPatternHandler();

describe("HandlerDeterminer", () => {
    describe("determine type of handler based on input string", () => {
        let handlerDeterminer = new HandlerDeterminer();

        it("should return AssignmentPatternHandler() when assignment input string is passed", () => {

            let testOutput1 = handlerDeterminer.determineHandler(testInput1);
            expect(testOutput1 instanceof AssignmentPatternHandler).to.equal(expectedOutput1 instanceof AssignmentPatternHandler);

        });

//         it("should return CreditPatternHandler() when credits input string is passed", () => {

//             let testOutput2 = handlerDeterminer.determineHandler(testInput2);
//             expect(testOutput2 instanceof CreditPatternHandler).to.equal(expectedOutput2 instanceof CreditPatternHandler);
//         });

//         it("should return ConversionQuestionPatternHandler() when conversion question string is passed", () => {

//             let testOutput3 = handlerDeterminer.determineHandler(testInput3);
//             expect(testOutput3 instanceof ConversionQuestionPatternHandler).to.equal(expectedOutput3 instanceof ConversionQuestionPatternHandler);
//         });

//         it("should return CreditQuestionPatternHandler() when credit question string is passed", () => {

//             let testOutput4 = handlerDeterminer.determineHandler(testInput4);
//             expect(testOutput4 instanceof CreditQuestionPatternHandler).to.equal(expectedOutput4 instanceof CreditQuestionPatternHandler);
//         });

        it("should return InvalidPatternHandler() when invalid question/statement is passed", () => {

            let testOutput5 = handlerDeterminer.determineHandler(testInput5);
            expect(testOutput5 instanceof InvalidPatternHandler).to.equal(expectedOutput5 instanceof InvalidPatternHandler);
        });

    });
});
