import { Injectable } from '@angular/core';
import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpErrorResponse,
	HttpStatusCode,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import AppState from '../store';
import { showAlert } from '../store/actions/alert.action';
import { AlertType } from '../store/reducers/alert.reducer';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	constructor(private store: Store<AppState>) {}

	intercept(request: HttpRequest<any>, next: HttpHandler) {
		return next.handle(request).pipe(
			catchError((error: HttpErrorResponse) => {
				let errorMessage = '';
				console.log(error);
				if (error.error instanceof ErrorEvent) {
					errorMessage = `Помилка: ${error.error.message}`;
					console.log(errorMessage);
				} else {
					// серверна помилка
					errorMessage = `Код помилки: ${error.status}\nПовідомлення: ${error.message}`;
					if (error.status === HttpStatusCode.Forbidden) {
						this.store.dispatch(
							showAlert({
								alert: {
									type: AlertType.Error,
									autoClose: true,
									message:
										'У вас немає доступу, щоб виконати цю дію!',
									duration: 4000,
									open: true,
								},
							}),
						);
						return throwError(errorMessage);
					}
					if (error.error) {
						this.store.dispatch(
							showAlert({
								alert: {
									type: AlertType.Error,
									autoClose: true,
									message: error.error.message,
									duration: 4000,
									open: true,
								},
							}),
						);
					} else {
						this.store.dispatch(
							showAlert({
								alert: {
									type: AlertType.Error,
									autoClose: true,
									message: errorMessage,
									duration: 4000,
									open: true,
								},
							}),
						);
					}
				}
				console.error(errorMessage);
				return throwError(errorMessage);
			}),
		);
	}
}
