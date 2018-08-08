<<<<<<< HEAD
// import * as _ from "lodash";

// import { Handler } from './handler';
// import { Config } from '../config/config';
// import { RomanNumeralsParser } from '../parser/romanNumeralsParser';

// export class CreditPatternHandler implements Handler{

=======

// import * as _ from "lodash";

// import { Handler } from './handler';
// import { Context } from '../config/context';
// import { RomanNumeralsParser } from '../parser/romanNumeralsParser';

// export class CreditPatternHandler implements Handler{

>>>>>>> 3104c03026cb53a4f32cfb4086e284de9fbbf094
//   public handleInput(input: string): string {
//     let romanNumeralsParser = new RomanNumeralsParser();
//     const REGEX_PATTERN = /\sis\s|\sCredits\s*/;
//     const [creditStatement, finalCredit] = input.split(REGEX_PATTERN).filter(splitValue => splitValue != '');
//     const itemsListInCreditStatement = _.dropRight(creditStatement.split(' '));
//     const multiplierInCreditStatement = _.last(creditStatement.split(' '));
<<<<<<< HEAD
//     const itemsRomanValueInCreditStatement = itemsListInCreditStatement.map((item) => Config.initMap.itemValueMap[item])
//                                                                        .join('');
//     const itemsValueInCreditStatement = romanNumeralsParser.getValueOfRomanNumber(itemsRomanValueInCreditStatement);
//     const multiplierValue = Number(finalCredit)/itemsValueInCreditStatement;
//     Config.initMap.creditMultiplierMap[multiplierInCreditStatement] = multiplierValue;
=======
//     const itemsRomanValueInCreditStatement = itemsListInCreditStatement.map((item) => Context.getInstance().itemValue(item))
//                                                                        .join('');
//     const itemsValueInCreditStatement = romanNumeralsParser.getValueOfRomanNumber(itemsRomanValueInCreditStatement);
//     const multiplierValue = Number(finalCredit)/itemsValueInCreditStatement;
//     Context.getInstance().updateCreditMultiplierMap(multiplierInCreditStatement, multiplierValue);
>>>>>>> 3104c03026cb53a4f32cfb4086e284de9fbbf094
//     return "";
//   }
// }
