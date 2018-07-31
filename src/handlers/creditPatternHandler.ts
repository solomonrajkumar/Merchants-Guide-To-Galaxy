import { Handler } from './handler';

export class CreditPatternHandler implements Handler{
  public handleInput(input: string): string {
    console.log('handling input ' + input);
    // handle credit patterns here
    return "";
  }
}
