import { createReducer, on } from '@ngrx/store';
import { Question } from 'src/app/models/Question';
import {
	createQuestion,
	createQuestionSuccess,
	fetchQuestions,
	fetchQuestionsSuccess,
} from '../actions/questions.action';

export interface QuestionState {
	questions: Question[];
	loading: boolean;
}

const initialState: QuestionState = {
	questions: [],
	loading: false,
};

export const questionReducer = createReducer(
	initialState,
	on(fetchQuestions, (state) => ({ ...state, loading: true })),
	on(fetchQuestionsSuccess, (state, { questions }) => ({
		...state,
		loading: false,
		questions: questions,
	})),
	on(createQuestion, (state) => ({ ...state, loading: true })),
	on(createQuestionSuccess, (state, { question }) => ({
		...state,
		questions: [...state.questions, question],
		loading: false,
	})),
);
