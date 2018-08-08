// import { Handler } from './handler';
<<<<<<< HEAD
// import { Config } from '../config/config';
=======
// import { Context } from '../config/context';
>>>>>>> 3104c03026cb53a4f32cfb4086e284de9fbbf094
// import { RomanNumeralsParser } from '../parser/romanNumeralsParser';

// export class ConversionQuestionPatternHandler implements Handler{
//   public handleInput(input: string): string {
//     const REGEX_PATTERN = /\sis\s|\s\?/;
//     let romanNumeralsParser = new RomanNumeralsParser();
//     const [queryPart, itemsList] = input.split(REGEX_PATTERN).filter(splitValue => splitValue != '');
<<<<<<< HEAD
//     const itemsRomanValueInConversionQuestion = itemsList.split(' ').map((item) => Config.initMap.itemValueMap[item])
=======
//     const itemsRomanValueInConversionQuestion = itemsList.split(' ').map((item) => Context.initMap.itemValueMap[item])
>>>>>>> 3104c03026cb53a4f32cfb4086e284de9fbbf094
//                                                                     .join('');
//     const itemsValueInConversionQuestion = romanNumeralsParser.getValueOfRomanNumber(itemsRomanValueInConversionQuestion);
//     return itemsList + ' is ' + itemsValueInConversionQuestion;
//     //return "";
//   }
// }
