import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TextFieldComponent } from './ui/text-field/text-field.component';
import { ButtonComponent } from './ui/button/button.component';

@NgModule({
	declarations: [AppComponent, MainPageComponent, HeaderComponent, LoginPageComponent, TextFieldComponent, ButtonComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
