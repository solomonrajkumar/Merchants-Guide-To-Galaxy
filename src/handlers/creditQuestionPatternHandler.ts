// import * as _ from "lodash";

// import { Handler } from './handler';
// import { RomanNumeralsParser } from '../parser/romanNumeralsParser';
<<<<<<< HEAD
// import { Config } from '../config/config';
=======
// import { Context } from '../config/context';
>>>>>>> 3104c03026cb53a4f32cfb4086e284de9fbbf094

// export class CreditQuestionPatternHandler implements Handler{
//   public handleInput(input: string): string {
//     const REGEX_PATTERN = /\sis\s|\s\?/;
//     let romanNumeralsParser = new RomanNumeralsParser();

//     const [queryPart, itemsAndMultiplierList] = input.split(REGEX_PATTERN).filter(splitValue => splitValue != '');
//     const listOfItems = _.dropRight(itemsAndMultiplierList.split(' '));
//     const multiplier = _.last(itemsAndMultiplierList.split(' '));
<<<<<<< HEAD
//     const romanValueOfItems = listOfItems.map((item) => Config.initMap.itemValueMap[item])
//                                                                        .join('');
//     const originalValueOfItems = romanNumeralsParser.getValueOfRomanNumber(romanValueOfItems);
//     const multiplierValue = Config.initMap.creditMultiplierMap[multiplier];
=======
//     const romanValueOfItems = listOfItems.map((item) => Context.initMap.itemValueMap[item])
//                                                                        .join('');
//     const originalValueOfItems = romanNumeralsParser.getValueOfRomanNumber(romanValueOfItems);
//     const multiplierValue = Context.initMap.creditMultiplierMap[multiplier];
>>>>>>> 3104c03026cb53a4f32cfb4086e284de9fbbf094
//     const finalCreditValue = originalValueOfItems * multiplierValue;
//     return itemsAndMultiplierList + ' is ' + finalCreditValue + ' Credits';
//     //return "";
//   }
// }
