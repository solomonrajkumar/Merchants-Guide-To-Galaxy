import { expect } from 'chai';
import { RomanNumeralsParser } from '../src/parser/romanNumeralsParser';

let testInput1 = 'MMVI';
let expectedOutput1 = 2006;

let testInput2 = 'MCMXLIV';
let expectedOutput2 = 1944;

let testInput3 = 'XLX';
let expectedOutput3 = 0;

let testInput4 = 'VVX';
let expectedOutput4 = 0;

let testInput5 = 'LXIII';
let expectedOutput5 = 63;

describe("Roman Numerals Parser", () => {
    describe("handle parsing of Roman Numerals passed", () => {

        let romanNumeralsParser = new RomanNumeralsParser();

        it("should return 2006 when \'MMVI\' is passed", () => {
            let testOutput1 = romanNumeralsParser.getValueOfRomanNumber(testInput1);
            expect(testOutput1).to.equal(expectedOutput1);
        });

        it("should return 1944 when \'MCMXLIV\' is passed", () => {
            let testOutput1 = romanNumeralsParser.getValueOfRomanNumber(testInput2);
            expect(testOutput1).to.equal(expectedOutput2);
        });

        it("should return 0 when \'XLX\' is passed", () => {
            let testOutput1 = romanNumeralsParser.getValueOfRomanNumber(testInput3);
            expect(testOutput1).to.equal(expectedOutput3);
        });

        it("should return 0 when \'VVX\' is passed", () => {
            let testOutput1 = romanNumeralsParser.getValueOfRomanNumber(testInput4);
            expect(testOutput1).to.equal(expectedOutput4);
        });

        it("should return 63 when \'LXIII\' is passed", () => {
            let testOutput1 = romanNumeralsParser.getValueOfRomanNumber(testInput5);
            expect(testOutput1).to.equal(expectedOutput5);
        });

    })
});
