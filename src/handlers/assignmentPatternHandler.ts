import { Handler } from './handler';
<<<<<<< HEAD
import { Context } from '../context';
=======
import { Context } from '../config/context';
>>>>>>> 3104c03026cb53a4f32cfb4086e284de9fbbf094

export class AssignmentPatternHandler implements Handler {

  handleInput(input: string): string {
    const REGEX_PATTERN = /\sis\s/;
<<<<<<< HEAD
    const [item, value] = input.split(REGEX_PATTERN);
    Context.context().updateItemValueMap(item, value);
=======
    const [item, price] = input.split(REGEX_PATTERN);
    Context.getInstance().updateItemValueMap(item, price);
    //Context.initMap.itemValueMap[key] = value;
>>>>>>> 3104c03026cb53a4f32cfb4086e284de9fbbf094
    return "";
  }
}
