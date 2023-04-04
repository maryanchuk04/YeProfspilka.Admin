import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
	links = [
		{
			name: 'Модераційна',
			link: '/moderation',
		},
		{
			name: 'Адміністрування',
			link: '/administration',
		},
	];
	constructor() {}

	ngOnInit(): void {}
}
