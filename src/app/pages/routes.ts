import { Routes } from '@angular/router';
import { AuthGuardService } from '../guards/auth-guard.service';
import { AdministratorPageComponent } from './administrator-page/administrator-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ModerationPageComponent } from './moderation/moderation-page.component';

export const routes: Routes = [
	{
		path: '',
		component: MainPageComponent,
		canActivate: [AuthGuardService],
	},
	{
		path: 'authenticate',
		component: LoginPageComponent,
	},
	{
		path: 'moderation',
		component: ModerationPageComponent,
		canActivate: [AuthGuardService],
	},
	{
		path: 'administration',
		component: AdministratorPageComponent,
		canActivate: [AuthGuardService],
	},
	{
		path: '**',
		redirectTo: '',
	},
];
