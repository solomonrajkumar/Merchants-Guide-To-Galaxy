import { expect } from 'chai';
import { CreditQuestionPatternHandler } from '../src/handlers/creditQuestionPatternHandler';

let testInput1 = 'how many Credits is glob prok Silver ?';
let expectedOutput1 = 'glob prok Silver is 68 Credits';

let testInput2 = 'how many Credits is glob prok Iron ?';
let expectedOutput2 = 'glob prok Iron is 782 Credits';

describe("Credit Pattern Handler", () => {
    describe("handle credit question Pattern Input passed", () => {
        let creditQuestionPatternHandler = new CreditQuestionPatternHandler();

        it("should return expected output when Credit Question Pattern String is passed", () => {
            let testOutput = creditQuestionPatternHandler.handleInput(testInput1);
            expect(testOutput).to.equal(expectedOutput1);
        });

        it("should return expected output when Credit Question Pattern String is passed", () => {
            let testOutput = creditQuestionPatternHandler.handleInput(testInput2);
            expect(testOutput).to.equal(expectedOutput2);
        });

    })
});
