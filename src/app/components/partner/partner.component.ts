import { Component, Input, OnInit } from '@angular/core';
import { Partner } from 'src/app/models/Partners';

@Component({
	selector: 'app-partner',
	templateUrl: './partner.component.html',
})
export class PartnerComponent implements OnInit {
	@Input() partner: Partner;
	constructor() { }

	ngOnInit(): void {
	}

}
