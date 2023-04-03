import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-text-field',
	templateUrl: './text-field.component.html',
})
export class TextFieldComponent implements OnInit {
	@Input() type: string = 'text';
	@Input() classStyles: string = '';
	@Input() placeholder: string = '';
	@Input() value: string = '';
	@Output() valueChange = new EventEmitter<Event>();

	constructor() {}

	ngOnInit(): void {}
}
