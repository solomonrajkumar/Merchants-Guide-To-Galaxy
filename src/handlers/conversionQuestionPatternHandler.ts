// import { Handler } from './handler';
// import { Context } from '../config/context';
// import { RomanNumeralsParser } from '../parser/romanNumeralsParser';

// export class ConversionQuestionPatternHandler implements Handler{
//   public handleInput(input: string): string {
//     const REGEX_PATTERN = /\sis\s|\s\?/;
//     let romanNumeralsParser = new RomanNumeralsParser();
//     const [queryPart, itemsList] = input.split(REGEX_PATTERN).filter(splitValue => splitValue != '');
//     const itemsRomanValueInConversionQuestion = itemsList.split(' ').map((item) => Context.initMap.itemValueMap[item])
//                                                                     .join('');
//     const itemsValueInConversionQuestion = romanNumeralsParser.getValueOfRomanNumber(itemsRomanValueInConversionQuestion);
//     return itemsList + ' is ' + itemsValueInConversionQuestion;
//     //return "";
//   }
// }
