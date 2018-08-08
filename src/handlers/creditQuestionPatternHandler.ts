// import * as _ from "lodash";

// import { Handler } from './handler';
// import { RomanNumeralsParser } from '../parser/romanNumeralsParser';
// import { Config } from '../config/config';

// export class CreditQuestionPatternHandler implements Handler{
//   public handleInput(input: string): string {
//     const REGEX_PATTERN = /\sis\s|\s\?/;
//     let romanNumeralsParser = new RomanNumeralsParser();

//     const [queryPart, itemsAndMultiplierList] = input.split(REGEX_PATTERN).filter(splitValue => splitValue != '');
//     const listOfItems = _.dropRight(itemsAndMultiplierList.split(' '));
//     const multiplier = _.last(itemsAndMultiplierList.split(' '));
//     const romanValueOfItems = listOfItems.map((item) => Config.initMap.itemValueMap[item])
//                                                                        .join('');
//     const originalValueOfItems = romanNumeralsParser.getValueOfRomanNumber(romanValueOfItems);
//     const multiplierValue = Config.initMap.creditMultiplierMap[multiplier];
//     const finalCreditValue = originalValueOfItems * multiplierValue;
//     return itemsAndMultiplierList + ' is ' + finalCreditValue + ' Credits';
//     //return "";
//   }
// }
