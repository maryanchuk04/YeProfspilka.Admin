import { Injectable } from '@angular/core';
import { AuthenticateModel } from '../models/AuhenticateModel';
import { RestService } from './rest.service';

@Injectable({
	providedIn: 'root',
})
export class AuthenticateService {
	url: string = '/authenticate';
	constructor(private service: RestService<AuthenticateModel>) {}

	authenticate(authData: { email: string; password: string }) {
		this.service.post(this.url, authData).subscribe((resp) => {
			console.log(resp);
		});
	}
}
