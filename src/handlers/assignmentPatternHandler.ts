import { Handler } from './handler';

export class AssignmentPatternHandler implements Handler{
  public handleInput(input: string): string {
    console.log('handling input ' + input);
    // handle assignment patterns here
    return "";
  }
}
