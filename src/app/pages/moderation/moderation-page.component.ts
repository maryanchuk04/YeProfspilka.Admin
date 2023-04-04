import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-moderation-page',
	templateUrl: './moderation-page.component.html',
})
export class ModerationPageComponent implements OnInit {
	active: number = 0;
	moderateOptions: string[] = ['Події', 'Переваги', 'Питання'];
	constructor() {}

	ngOnInit(): void {}

	changeActive(number: number) {
		this.active = number;
	}
}
