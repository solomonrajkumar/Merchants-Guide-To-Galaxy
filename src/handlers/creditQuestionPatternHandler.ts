import { Handler } from './handler';

export class CreditQuestionPatternHandler implements Handler{
  public handleInput(input: string): string {
    console.log('handling input ' + input);
    // handle credit question patterns here
    return "";
  }
}
