import { Handler } from './handler';
import { Config } from '../config/config';

export class AssignmentPatternHandler implements Handler {

  public handleInput(input: string): string {
    const REGEX_PATTERN = /\sis\s/;
    const [key, value] = input.split(REGEX_PATTERN);
    Config.initMap.itemValueMap[key] = value;
    return "";
  }
}
