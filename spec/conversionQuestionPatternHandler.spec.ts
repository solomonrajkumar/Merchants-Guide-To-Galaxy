import { expect } from 'chai';
import { ConversionQuestionPatternHandler } from '../src/handlers/conversionQuestionPatternHandler';
import { Config } from '../src/config/config';

let testInput1 = 'how much is pish tegj glob glob ?';
let expectedOutput1 = 'pish tegj glob glob is 42';

let testInput2 = 'how much is tegj prok ?';
let expectedOutput2 = 'tegj prok is 55';

describe("Conversion Pattern Handler", () => {
    describe("handle conersion question Pattern Input passed", () => {
        let conversionQuestionPatternHandler = new ConversionQuestionPatternHandler();

        it("should return expected output when Conversion Question Pattern String is passed", () => {
            let testOutput = conversionQuestionPatternHandler.handleInput(testInput1);
            expect(testOutput).to.equal(expectedOutput1);
        });

        it("should return expected output when Conversion Question Pattern String is passed", () => {
            let testOutput = conversionQuestionPatternHandler.handleInput(testInput2);
            expect(testOutput).to.equal(expectedOutput2);
        });

    })
});
