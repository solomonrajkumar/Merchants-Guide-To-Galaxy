import { Handler } from './handler';
import { Context } from '../context';

export class AssignmentPatternHandler implements Handler {

  handleInput(input: string): string {
    const REGEX_PATTERN = /\sis\s/;
    const [item, value] = input.split(REGEX_PATTERN);
    Context.context().updateItemValueMap(item, value);
    return "";
  }
}
