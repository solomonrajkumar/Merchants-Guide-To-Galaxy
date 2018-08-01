export class RomanNumeralsValidator {
  public static isValidRomanNumber(romanNumber: string): boolean {
    const ROMAN_NUMERALS_REGEX = /M{0,3}(CM|CD|D?C{0,3})?(XC|XL|L?X{0,3})?(IX|IV|V?I{0,3})/i;
    return (romanNumber === romanNumber.match(ROMAN_NUMERALS_REGEX)[0]);
  }
}
