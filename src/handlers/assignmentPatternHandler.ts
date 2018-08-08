import { Handler } from './handler';
import { Context } from '../config/context';

export class AssignmentPatternHandler implements Handler {

  public handleInput(input: string): string {
    const REGEX_PATTERN = /\sis\s/;
    const [item, price] = input.split(REGEX_PATTERN);
    Context.getInstance().updateItemValueMap(item, price);
    //Context.initMap.itemValueMap[key] = value;
    return "";
  }
}
