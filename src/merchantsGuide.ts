import { InputHandler } from './inputHandler';

export class MerchantsGuide {

  inputHandler = new InputHandler();

  public greet() {
    console.log('Welcome to Merchant\'s guide to Galaxy');
  }

  public determineOutput(input): string[] {
    // handle Input - determine handler type and pass input accordingly
    //handleInput(input);
    input.map(individualInput => {
      this.inputHandler.handleInput(individualInput);
    });
    return [];
  }

}
