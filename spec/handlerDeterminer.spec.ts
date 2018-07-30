import { expect } from 'chai';
import { HandlerDeterminer } from '../src/handlerDeterminer';
import { AssignmentPatternHandler } from '../src/handlers/assignmentPatternHandler';
import { CreditPatternHandler } from '../src/handlers/creditPatternHandler';
import { ConversionQuestionPatternHandler } from '../src/handlers/conversionQuestionPatternHandler';
import { CreditQuestionPatternHandler } from '../src/handlers/creditQuestionPatternHandler';

let testInput1 = 'glob is I';
let expectedOutput1 = new AssignmentPatternHandler();

let testInput2 = 'glob glob Silver is 34 Credits';
let expectedOutput2 = new CreditPatternHandler();

let testInput3 = 'how much is pish tegj glob glob ?';
let expectedOutput3 = new ConversionQuestionPatternHandler();

let testInput4 = 'how many Credits is glob prok Gold ?';
let expectedOutput4 = new CreditQuestionPatternHandler();

describe("HandlerDeterminer", () => {
    describe("determine type of handler based on input string", () => {
        let handlerDeterminer = new HandlerDeterminer();

        it("should determine type of handler based on input string(assignment)", () => {

            let testOutput1 = handlerDeterminer.determineHandler(testInput1);
            expect(testOutput1 instanceof AssignmentPatternHandler).to.equal(expectedOutput1 instanceof AssignmentPatternHandler);

        });

        it("should determine type of handler based on input string(credit)", () => {

            let testOutput2 = handlerDeterminer.determineHandler(testInput2);
            expect(testOutput2 instanceof CreditPatternHandler).to.equal(expectedOutput2 instanceof CreditPatternHandler);
        });

        it("should determine type of handler based on input string(conversion question)", () => {

            let testOutput3 = handlerDeterminer.determineHandler(testInput3);
            expect(testOutput3 instanceof ConversionQuestionPatternHandler).to.equal(expectedOutput3 instanceof ConversionQuestionPatternHandler);
        });

        it("should determine type of handler based on input string(credit question)", () => {

            let testOutput4 = handlerDeterminer.determineHandler(testInput4);
            expect(testOutput4 instanceof CreditQuestionPatternHandler).to.equal(expectedOutput4 instanceof CreditQuestionPatternHandler);
        });

    });
});
