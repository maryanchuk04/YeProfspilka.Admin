import { SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import {
	GoogleLoginProvider,
	SocialAuthService,
} from '@abacritt/angularx-social-login';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {
	socialUser!: SocialUser;
	constructor(
		private readonly authService: AuthenticateService,
		private socialAuthService: SocialAuthService,
	) {}

	ngOnInit(): void {
		this.socialAuthService.authState.subscribe((user) => {
			this.socialUser = user;
			console.log(this.socialUser);
		});
	}

	loginGoogle() {
		this.socialAuthService
			.signIn(GoogleLoginProvider.PROVIDER_ID)
			.then((res) => console.log(res));
	}
}
