import { HandlerDeterminer } from './handlerDeterminer';
import { Handler } from './handlers/handler';

export class InputHandler {

  handler: Handler;

  handlerDeterminer = new HandlerDeterminer();

  public handleInput(input: string): string {
    this.handler = this.handlerDeterminer.determineHandler(input);
    let output = this.handler.handleInput(input);
    return output;
  }

}
