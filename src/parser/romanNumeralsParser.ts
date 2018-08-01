import { RomanNumeralsValidator } from '../validator/romanNumeralsValidator';

export class RomanNumeralsParser {

  romanNumbersMap = {
  	'I': 1,
  	'V': 5,
  	'X': 10,
  	'L': 50,
  	'C': 100,
  	'D': 500,
  	'M': 1000
  };

  public getValueOfRomanNumber(romanNumber: string): number {

    if(RomanNumeralsValidator.isValidRomanNumber(romanNumber)) {
      const romanNumeralValues = romanNumber.split('')
                                            .map((romanNumeral) => this.romanNumbersMap[romanNumeral]);
      const valueOfRomanNumber = romanNumeralValues.reduce((accumulator, currentValue, currentIndex, array) => {
        const previousValue = array[currentIndex - 1];
        if(currentValue > previousValue) {
          return accumulator + currentValue - 2*previousValue;
        }
        return accumulator + currentValue;
      });
      return valueOfRomanNumber;

    }

    return 0;
  }
}
