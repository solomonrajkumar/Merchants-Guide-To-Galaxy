import { expect } from 'chai';
import { RomanNumeralsValidator } from '../src/validator/romanNumeralsValidator';

let testInput1 = 'MMVI';
let expectedOutput1 = true;

let testInput2 = 'MCMXLIV';
let expectedOutput2 = true;

let testInput3 = 'XLX';
let expectedOutput3 = false;

let testInput4 = 'VVX';
let expectedOutput4 = false;

let testInput5 = 'LXIII';
let expectedOutput5 = true;

describe("Roman Numerals Validator", () => {
    describe("handle validation of Roman Numerals passed", () => {
        //let romanNumeralsValidator = new RomanNumeralsValidator();

        it("should return true when valid roman numeral is passed", () => {
            let testOutput1 = RomanNumeralsValidator.isValidRomanNumber(testInput1);
            expect(testOutput1).to.equal(expectedOutput1);
        });

        it("should return true when valid roman numeral is passed", () => {
            let testOutput1 = RomanNumeralsValidator.isValidRomanNumber(testInput1);
            expect(testOutput1).to.equal(expectedOutput1);
        });

        it("should return false when invalid roman numeral is passed", () => {
            let testOutput1 = RomanNumeralsValidator.isValidRomanNumber(testInput1);
            expect(testOutput1).to.equal(expectedOutput1);
        });

        it("should return false when invalid roman numeral is passed", () => {
            let testOutput1 = RomanNumeralsValidator.isValidRomanNumber(testInput1);
            expect(testOutput1).to.equal(expectedOutput1);
        });

        it("should return true when valid roman numeral is passed", () => {
            let testOutput1 = RomanNumeralsValidator.isValidRomanNumber(testInput1);
            expect(testOutput1).to.equal(expectedOutput1);
        });

    })
});
