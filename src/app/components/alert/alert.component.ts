import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Alert } from 'src/app/models/Alert';
import AppState from 'src/app/store';
import { selectAlertState } from 'src/app/store/selectors/alert.selector';
import { AlertType } from 'src/app/store/reducers/alert.reducer';
import { closeAlert } from 'src/app/store/actions/alert.action';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit {
	alert$: Observable<Alert>;
	AlertType = AlertType;
	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		this.alert$ = this.store.select(selectAlertState);
		setTimeout(() => this.close(), 1000000);
	}

	close() {
		this.store.dispatch(closeAlert());
	}
}
