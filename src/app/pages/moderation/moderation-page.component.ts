import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import AppState from 'src/app/store';
import { fetchQuestions } from 'src/app/store/actions/questions.action';

@Component({
	selector: 'app-moderation-page',
	templateUrl: './moderation-page.component.html',
})
export class ModerationPageComponent implements OnInit {
	active: number = 0;
	moderateOptions: string[] = ['Події', 'Переваги', 'Питання', 'Партнери'];

	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		this.store.dispatch(fetchQuestions());
	}

	changeActive(number: number) {
		this.active = number;
	}
}
