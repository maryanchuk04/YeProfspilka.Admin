import { createReducer } from '@ngrx/store';
import { User } from 'src/app/models/User';

const initialState: User = null;

export const userReducer = createReducer(
	initialState,
	
);
