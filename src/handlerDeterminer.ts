import { Handler } from './handlers/handler';
import { AssignmentPatternHandler } from './handlers/assignmentPatternHandler';

export class HandlerDeterminer {

  regexPatterns = {
    assignmentPattern: /\w{1,}\sis\s\w{1,}$/i,
    creditPattern: /.+\sis\s\d+\sCredits/i,
    conversionQuestion: /how\smuch\sis\s.+\?*/i,
    creditQuestion: /how\smany\sCredits\sis\s.+\?*/i
  };

  handlerMap = {
    assignmentPattern: new AssignmentPatternHandler()
    // creditPattern: creditPatternHandler,
    // conversionQuestion: conversionQuestionHandler,
    // creditQuestion: creditQuestionHandler
  };

  public determineHandler(input: string): Handler {
    const regexPatternKeyMatch = Object.keys(this.regexPatterns).filter(regexPatternKey => {
    	if(input.match(this.regexPatterns[regexPatternKey]) != null){
    		return regexPatternKey;
    	}
    });
    
    return this.handlerMap[`${regexPatternKeyMatch}`];
  }
}
