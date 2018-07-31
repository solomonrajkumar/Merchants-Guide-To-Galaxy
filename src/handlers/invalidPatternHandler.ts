import { Handler } from './handler';

export class InvalidPatternHandler implements Handler{
  public handleInput(input: string) {
    console.log('handling input ' + input);
    // handle assignment patterns here
    return "I have no idea what you are talking about";
  }
}
