import { Handler } from './handler';

export class ConversionQuestionPatternHandler implements Handler{
  public handleInput(input: string): string {
    console.log('handling input ' + input);
    // handle conversion question patterns here
    return "";
  }
}
