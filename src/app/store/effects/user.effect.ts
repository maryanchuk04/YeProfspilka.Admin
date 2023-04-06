import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap, switchMap, exhaustMap } from 'rxjs';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import { showAlert } from '../actions/alert.action';
import {
	fetchCurrentUser,
	fetchCurrentUserSuccess,
	googleLoginUser,
	loginUserSuccess,
} from '../actions/user.action';
import { AppState } from '../AppState';
import { AlertType } from '../reducers/alert.reducer';

@Injectable()
export class UserEffect {
	constructor(
		private actions$: Actions,
		private store: Store<AppState>,
		private authService: AuthenticateService,
		private userService: UserService,
		private tokenService: TokenService,
	) {}

	authUser$ = createEffect(() =>
		this.actions$.pipe(
			ofType(googleLoginUser),
			mergeMap(({ googleModel }) =>
				this.authService.authenticateGoogle(googleModel).pipe(
					switchMap((authModel) => {
						this.tokenService.set(authModel.token);
						return this.userService.getCurrentUser().pipe(
							map((user) => {
								this.store.dispatch(
									showAlert({
										alert: {
											type: AlertType.Success,
											message: `Вітаю вас ${user.fullName}!`,
											open: true,
										},
									}),
								);
								return loginUserSuccess({ user });
							}),
						);
					}),
				),
			),
		),
	);

	fetchUser$ = createEffect(() =>
		this.actions$.pipe(
			ofType(fetchCurrentUser),
			exhaustMap(() =>
				this.userService
					.getCurrentUser()
					.pipe(map((user) => fetchCurrentUserSuccess({ user }))),
			),
		),
	);
}
