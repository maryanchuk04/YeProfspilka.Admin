import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import AppState from 'src/app/store';
import { fetchPartners } from 'src/app/store/actions/partners.action';
import { fetchQuestions } from 'src/app/store/actions/questions.action';

@Component({
	selector: 'app-moderation-page',
	templateUrl: './moderation-page.component.html',
})
export class ModerationPageComponent implements OnInit {
	active: number = 0;
	moderateOptions: string[] = ['Події', 'Переваги', 'Питання', 'Партнери'];

	constructor(private store: Store<AppState>) { }

	ngOnInit(): void {
		this.store.dispatch(fetchQuestions());
		this.store.dispatch(fetchPartners());
	}

	changeActive(number: number) {
		this.active = number;
	}
}
