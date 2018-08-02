import { InputHandler } from './inputHandler';

export class MerchantsGuide {

  inputHandler = new InputHandler();
  output: string[] = new Array();

  public greet() {
    console.log('Welcome to Merchant\'s guide to Galaxy');
  }

  public determineOutput(input): string[] {
    input.map(individualInput => {
      this.output.push(this.inputHandler.handleInput(individualInput));
    });
    return this.output.filter(value => value != '');
  }

}
