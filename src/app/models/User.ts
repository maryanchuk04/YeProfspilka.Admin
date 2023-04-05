import { Role } from './Roles';

export interface User {
	fullName: string;
	email: string;
	role: Role;
	avatar: string;
}
