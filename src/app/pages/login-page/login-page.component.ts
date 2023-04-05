import { SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import {
	GoogleLoginProvider,
	SocialAuthService,
} from '@abacritt/angularx-social-login';
import { Store } from '@ngrx/store';
import AppState from 'src/app/store';
import { EMPTY } from 'rxjs';
import { googleLoginUser } from 'src/app/store/actions/user.action';
import { GoogleUserInfo } from 'src/app/models/GoogleUserInfo';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {
	socialUser!: SocialUser;
	constructor(
		private socialAuthService: SocialAuthService,
		private store: Store<AppState>,
	) {}

	ngOnInit(): void {
		this.socialAuthService.authState.subscribe((user) => {
			this.socialUser = user;
			console.log(this.socialUser);
			const googleModel: GoogleUserInfo = {
				fullName: this.socialUser.name,
				avatar: this.socialUser.photoUrl,
				email: this.socialUser.email,
				hd: this.socialUser.email.substring(
					this.socialUser.email.lastIndexOf('@') + 1,
				),
			};
			this.store.dispatch(googleLoginUser({ googleModel }));
		});
	}

	loginGoogle() {
		this.socialAuthService
			.signIn(GoogleLoginProvider.PROVIDER_ID)
			.then(() => EMPTY);
	}
}
