import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partner } from '../models/Partners';
import { RestService } from './rest.service';

@Injectable({
	providedIn: 'root',
})
export class PartnersService {
	url: string = '/partners';
	constructor(private servise: RestService<Partner>) {}

	get(): Observable<Partner[]> {
		return this.servise.getAll(this.url);
	}
}
