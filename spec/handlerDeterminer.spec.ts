import { expect } from 'chai';
import { HandlerDeterminer } from '../src/handlerDeterminer';
import { AssignmentPatternHandler } from '../src/handlers/assignmentPatternHandler';
import { CreditPatternHandler } from '../src/handlers/creditPatternHandler';

let testInput1 = 'glob is I';
let expectedOutput1 = new AssignmentPatternHandler();

let testInput2 = 'glob glob Silver is 34 Credits';
let expectedOutput2 = new CreditPatternHandler();

describe("HandlerDeterminer", () => {
    describe("determine type of handler based on input string", () => {
        let handlerDeterminer = new HandlerDeterminer();
        it("should determine type of handler based on input string", () => {

            let testOutput1 = handlerDeterminer.determineHandler(testInput1);
            expect(testOutput1 instanceof AssignmentPatternHandler).to.equal(expectedOutput1 instanceof AssignmentPatternHandler);

        });

        it("should determine type of handler based on input string", () => {

            let testOutput2 = handlerDeterminer.determineHandler(testInput2);
            expect(testOutput2 instanceof CreditPatternHandler).to.equal(expectedOutput2 instanceof CreditPatternHandler);
        });

    });
});
