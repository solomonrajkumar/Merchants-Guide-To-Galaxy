import { Handler } from './handler';

export class InvalidPatternHandler implements Handler{
  public handleInput(input: string) {
    console.log('handling input ' + input);
    // handle assignment patterns here
  }
}
