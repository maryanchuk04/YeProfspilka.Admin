import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/Question';
import AppState from 'src/app/store';
import {
	selectQuestions,
	selectQuestionsLoading,
} from 'src/app/store/selectors/question.selector';

@Component({
	selector: 'app-questions',
	templateUrl: './questions.component.html',
})
export class QuestionsComponent implements OnInit {
	loading$: Observable<boolean>;
	questions$: Observable<Question[]>;
	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		this.loading$ = this.store.select(selectQuestionsLoading);
		this.questions$ = this.store.select(selectQuestions);
	}
}
