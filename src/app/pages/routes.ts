import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
	{
		path: '',
		component: MainPageComponent,
	},
	{
		path: 'authenticate',
		component: LoginPageComponent,
	},
];
