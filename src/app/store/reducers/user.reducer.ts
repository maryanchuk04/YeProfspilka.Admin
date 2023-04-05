import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/User';
import { loginUserSuccess } from '../actions/user.action';

const initialState: UserState = {
	data: null,
};

export interface UserState {
	data: User;
}

export const userReducer = createReducer<UserState>(
	initialState,
	on(loginUserSuccess, (state, { user }) => ({ ...state, data: user })),
);
