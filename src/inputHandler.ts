import { HandlerDeterminer } from './handlerDeterminer';
import { Handler } from './handlers/handler';

export class InputHandler {

  handler: Handler;

  handlerDeterminer = new HandlerDeterminer();

  public handleInput(input: string): string {
    this.handler = this.handlerDeterminer.determineHandler(input);
    console.log(this.handler);
    this.handler.handleInput(input);
    //console.log(object);
    return "";
  }

}
