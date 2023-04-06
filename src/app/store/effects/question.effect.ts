import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, exhaustMap, mergeMap } from 'rxjs';
import { QuestionService } from 'src/app/services/question.service';
import {
	createQuestion,
	createQuestionSuccess,
	fetchQuestions,
	fetchQuestionsSuccess,
} from '../actions/questions.action';
import { AppState } from '../AppState';

@Injectable()
export class QuestionEffect {
	constructor(
		private actions$: Actions,
		private questionService: QuestionService,
	) {}

	fetchQuestions$ = createEffect(() =>
		this.actions$.pipe(
			ofType(fetchQuestions),
			exhaustMap(() =>
				this.questionService
					.getAll()
					.pipe(
						map((questions) =>
							fetchQuestionsSuccess({ questions }),
						),
					),
			),
		),
	);

	createQuestion$ = createEffect(() =>
		this.actions$.pipe(
			ofType(createQuestion),
			mergeMap(({ question }) =>
				this.questionService
					.create({
						answer: question.answer,
						question: question.questionText,
					})
					.pipe(map(() => createQuestionSuccess({ question }))),
			),
		),
	);
}
