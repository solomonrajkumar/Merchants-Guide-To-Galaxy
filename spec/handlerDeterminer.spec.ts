import { expect } from 'chai';
import { HandlerDeterminer } from '../src/handlerDeterminer';
import { AssignmentPatternHandler } from '../src/handlers/assignmentPatternHandler';

let testInput1 = 'glob is I';
let expectedOutput1 = new AssignmentPatternHandler();

describe("HandlerDeterminer", () => {
    describe("determine type of handler based on input string", () => {
        it("should determine type of handler based on input string", () => {
            let handlerDeterminer = new HandlerDeterminer();

            let testOutput1 = handlerDeterminer.determineHandler(testInput1);
            expect(testOutput1 instanceof AssignmentPatternHandler).to.equal(expectedOutput1 instanceof AssignmentPatternHandler);
        });
    })
});
