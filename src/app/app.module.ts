import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TextFieldComponent } from './ui/text-field/text-field.component';
import { ButtonComponent } from './ui/button/button.component';
import { SvgComponent } from './shared/svg/svg.component';
import { ModerationPageComponent } from './pages/moderation/moderation-page.component';
import { ModerationSidebarComponent } from './components/moderation-components/moderation-sidebar/moderation-sidebar.component';
import { PartnersComponent } from './components/moderation-components/partners/partners.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdvantagesComponent } from './components/moderation-components/advantages/advantages.component';
import { QuestionsComponent } from './components/moderation-components/questions/questions.component';
import { GoogleButtonComponent } from './ui/google-button/google-button.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import effects from './store/effects';
import {
	SocialLoginModule,
	GoogleLoginProvider,
	SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import reducers from './store/reducers';
import { AlertComponent } from './components/alert/alert.component';
import { IconButtonComponent } from './ui/icon-button/icon-button.component';
import { ErrorInterceptor } from './services/error-interceptor.service';
import { RestService } from './services/rest.service';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AdministratorPageComponent } from './pages/administrator-page/administrator-page.component';
import { EventsComponent } from './components/moderation-components/events/events.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { QuestionComponent } from './components/question/question.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
	declarations: [
		AppComponent,
		MainPageComponent,
		HeaderComponent,
		LoginPageComponent,
		TextFieldComponent,
		ButtonComponent,
		SvgComponent,
		ModerationPageComponent,
		ModerationSidebarComponent,
		PartnersComponent,
		SidebarComponent,
		AdvantagesComponent,
		QuestionsComponent,
		GoogleButtonComponent,
		AlertComponent,
		IconButtonComponent,
		AdministratorPageComponent,
		EventsComponent,
		EventCardComponent,
		AdvantageComponent,
		QuestionComponent,
		LoaderComponent,
  ModalComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SocialLoginModule,
		HttpClientModule,
		JwtModule,
		FormsModule,
		StoreModule.forRoot(reducers),
		EffectsModule.forRoot(effects),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
			autoPause: true,
		}),
	],
	providers: [
		{
			provide: 'SocialAuthServiceConfig',
			useValue: {
				autoLogin: false,
				providers: [
					{
						id: GoogleLoginProvider.PROVIDER_ID,
						provider: new GoogleLoginProvider(environment.googleId),
					},
				],
				onError: (err) => {
					console.log(err);
				},
			} as SocialAuthServiceConfig,
		},
		RestService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorInterceptor,
			multi: true,
		},
		{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
		JwtHelperService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
