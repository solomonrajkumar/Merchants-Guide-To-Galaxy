import { Handler } from './handler';

export class InvalidPatternHandler implements Handler{
  handleInput(input: string) {
    return "I have no idea what you are talking about";
  }
}
