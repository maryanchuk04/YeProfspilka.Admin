import { AlertState } from './reducers/alert.reducer';
import { QuestionState } from './reducers/question.reducer';
import { UserState } from './reducers/user.reducer';

export interface AppState {
	user: UserState;
	alert: AlertState;
	question: QuestionState;
}
