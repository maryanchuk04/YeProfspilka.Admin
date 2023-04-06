import { createAction, props } from '@ngrx/store';
import { GoogleUserInfo } from 'src/app/models/GoogleUserInfo';
import { User } from 'src/app/models/User';

export const googleLoginUser = createAction(
	'[USER] Login user',
	props<{ googleModel: GoogleUserInfo }>(),
);

export const loginUserSuccess = createAction(
	'[USER] Login user success',
	props<{ user: User }>(),
);

export const fetchCurrentUser = createAction('[USER] Get current user pending');

export const fetchCurrentUserSuccess = createAction(
	'[USER] Get current user Success',
	props<{ user: User }>(),
);
