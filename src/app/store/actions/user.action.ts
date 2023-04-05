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
