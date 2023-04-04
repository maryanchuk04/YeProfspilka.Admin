import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-moderation-sidebar',
	templateUrl: './moderation-sidebar.component.html',
})
export class ModerationSidebarComponent implements OnInit {
	@Output() changeActive = new EventEmitter<number>();
	@Input() options!: string[];
	@Input() active!: number;

	class: string = 'px-3 py-2 mb-3 text-2xl font-medium cursor-pointer';

	constructor() {}

	ngOnInit(): void {}

	handleChangeActive(option: string) {
		this.changeActive.emit(this.options.indexOf(option));
	}

	classNamesHandler(name: string) {
		return this.active === this.options.indexOf(name)
			? `${this.class} bg-black/10 duration-300 rounded-standart text-black shadow-md`
			: `${this.class} hover:bg-black/20 duration-300 rounded-standart`;
	}
}
