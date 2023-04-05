import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, exhaustMap, map, mergeMap, switchMap } from 'rxjs';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import { googleLoginUser, loginUserSuccess } from '../actions/user.action';

@Injectable()
export class UserEffect {
	constructor(
		private actions$: Actions,
		private store: Store,
		private authService: AuthenticateService,
		private userService: UserService,
		private tokenService: TokenService,
	) {}

	fetchUser$ = createEffect(() =>
		this.actions$.pipe(
			ofType(googleLoginUser),
			mergeMap(({ googleModel }) =>
				this.authService.authenticateGoogle(googleModel).pipe(
					switchMap((authModel) => {
						this.tokenService.set(authModel.token);
						return this.userService.getCurrentUser().pipe(
							map((user) => loginUserSuccess({ user })),
							catchError((err) => {
								console.log(err);
								return EMPTY;
							}),
						);
					}),
					catchError((err) => EMPTY),
				),
			),
		),
	);
}
