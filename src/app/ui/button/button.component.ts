import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
	@Input() disabled: boolean = false;
	@Input() classStyles = '';
	@Input() type: 'primary' | 'secondary' = 'primary';
	@Output() onClick = new EventEmitter();

	constructor() { }

	ngOnInit(): void { }

	styles(): string {
		if (this.type === 'secondary')
			return 'text-black w-fit duration-300 px-4 bg-transparent border-black border-2 rounded-standart text-xl h-12 font-regular enabled:hover:bg-black/10'

		return 'w-full duration-300 h-12 font-regular rounded-standart text-xl bg-primary text-white enabled:hover:bg-primary/80 duration-200 disabled:cursor-not-allowed';
	}
}
