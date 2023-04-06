import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/models/Question';

@Component({
	selector: 'app-question',
	templateUrl: './question.component.html',
})
export class QuestionComponent implements OnInit {
	@Input() question: Question;
	constructor() {}

	ngOnInit(): void {}
}
