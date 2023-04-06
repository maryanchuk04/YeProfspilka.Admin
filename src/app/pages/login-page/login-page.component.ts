import { SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import {
	GoogleLoginProvider,
	SocialAuthService,
} from '@abacritt/angularx-social-login';
import { Store } from '@ngrx/store';
import AppState from 'src/app/store';
import { EMPTY } from 'rxjs';
import { googleLoginUser } from 'src/app/store/actions/user.action';
import { GoogleUserInfo } from 'src/app/models/GoogleUserInfo';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {
	socialUser!: SocialUser;
	constructor(
		private socialAuthService: SocialAuthService,
		private store: Store<AppState>,
		private router: Router,
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
			this.router.navigate(['/']);
		});
	}

	loginGoogle() {
		this.socialAuthService
			.signIn(GoogleLoginProvider.PROVIDER_ID)
			.then(() => EMPTY);
	}
}
