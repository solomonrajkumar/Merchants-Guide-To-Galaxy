import * as _ from "lodash";

import { Handler } from './handler';
import { Config } from '../config/config';
import { RomanNumeralsParser } from '../parser/romanNumeralsParser';

export class CreditPatternHandler implements Handler{

  public handleInput(input: string): string {
    let romanNumeralsParser = new RomanNumeralsParser();
    const REGEX_PATTERN = /\sis\s|\sCredits\s*/;
    const [creditStatement, finalCredit] = input.split(REGEX_PATTERN).filter(splitValue => splitValue != '');
    const itemsListInCreditStatement = _.dropRight(creditStatement.split(' '));
    const multiplierInCreditStatement = _.last(creditStatement.split(' '));
    const itemsRomanValueInCreditStatement = itemsListInCreditStatement.map((item) => Config.initMap.itemValueMap[item])
                                                                       .join('');
    const itemsValueInCreditStatement = romanNumeralsParser.getValueOfRomanNumber(itemsRomanValueInCreditStatement);
    const multiplierValue = Number(finalCredit)/itemsValueInCreditStatement;
    Config.initMap.creditMultiplierMap[multiplierInCreditStatement] = multiplierValue;
    return "";
  }
}
