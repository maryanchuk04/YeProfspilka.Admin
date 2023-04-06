import { createAction, props } from '@ngrx/store';
import { Question } from 'src/app/models/Question';

export const fetchQuestions = createAction(
	'[QUESTIONS] Fetch questions pending',
);

export const fetchQuestionsSuccess = createAction(
	'[QUESTIONS] Fetch questions success',
	props<{ questions: Question[] }>(),
);

export const createQuestion = createAction(
	'[QUESTION] Create question pending',
	props<{ question: Question }>(),
);

export const createQuestionSuccess = createAction(
	'[QUESTION] Create question success',
	props<{ question: Question }>(),
);
