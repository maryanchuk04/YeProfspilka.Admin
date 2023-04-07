import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
	@Input() disabled: boolean = false;
	@Input() classStyles = '';
	@Output() onClick = new EventEmitter();
	constructor() {}

	ngOnInit(): void {}
}
