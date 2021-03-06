import { Handler } from './handlers/handler';
import { AssignmentPatternHandler } from './handlers/assignmentPatternHandler';
// import { CreditPatternHandler } from './handlers/creditPatternHandler';
// import { ConversionQuestionPatternHandler } from './handlers/conversionQuestionPatternHandler';
// import { CreditQuestionPatternHandler } from './handlers/creditQuestionPatternHandler';
import { InvalidPatternHandler } from './handlers/invalidPatternHandler';

export class HandlerDeterminer {

  regexPatterns = {
    assignmentPattern: /\w{1,}\sis\s\w{1,}$/i,
    creditPattern: /.+\sis\s\d+\sCredits/i,
    conversionQuestion: /how\smuch\sis\s.+\?*/i,
    creditQuestion: /how\smany\sCredits\sis\s.+\?*/i
  };

  handlerMap = {
    assignmentPattern: new AssignmentPatternHandler(),
    // creditPattern: new CreditPatternHandler(),
    // conversionQuestion: new ConversionQuestionPatternHandler(),
    // creditQuestion: new CreditQuestionPatternHandler(),
    invalidPattern: new InvalidPatternHandler()
  };

  public determineHandler(input: string): Handler {
    const regexPatternKeyMatch = Object.keys(this.regexPatterns).filter(regexPatternKey => {
    	if(input.match(this.regexPatterns[regexPatternKey]) != null){
    		return regexPatternKey;
    	}
    });
    const handler = this.handlerMap[`${regexPatternKeyMatch}`];
    return (handler == undefined) ? this.handlerMap['invalidPattern'] : handler;
  }
}
