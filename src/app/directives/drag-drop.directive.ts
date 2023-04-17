import { Directive, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';

@Directive({
	selector: '[appDragDrop]'
})
export class DragDropDirective {
	@Output() fileDrop: EventEmitter<File> = new EventEmitter();

	@HostBinding('style.background-color') private backgroundColor = '#f5fcff'
	@HostBinding('style.opacity') private opacity = '1'

	constructor() { }

	@HostListener('dragover', ['$event'])
	public onDragOver(evt: Event) {
		evt.preventDefault();
		evt.stopPropagation();
		this.backgroundColor = '#9ecbec';
		this.opacity = '0.8'
	}

	@HostListener('dragleave', ['$event'])
	public onDragLeave(evt: Event) {
		evt.preventDefault();
		evt.stopPropagation();
		this.backgroundColor = '#f5fcff';
		this.opacity = '1'
	}

	@HostListener('drop', ['$event'])
	public onDrop(evt: any) {
		evt.preventDefault();
		evt.stopPropagation();
		this.backgroundColor = '#f5fcff';
		this.opacity = '1'
		const files = evt.dataTransfer.files;
		if (files.length > 0) {
			this.upload(files[0]);
		}
	}

	private upload(file: File) {
		this.fileDrop.emit(file);
	}
}