import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../AppState";
import { PartnersService } from "src/app/services/partners.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createPartner, createPartnerSuccess, fetchPartners, fetchPartnersSuccess } from "../actions/partners.action";
import { exhaustMap, map, mergeMap, of } from "rxjs";


@Injectable()
export class PartnersEffect {
	constructor(
		private store: Store<AppState>,
		private service: PartnersService,
		private actions$: Actions
	) { }

	fetchPartners$ = createEffect(() =>
		this.actions$.pipe(
			ofType(fetchPartners),
			exhaustMap(() =>
				this.service
					.get()
					.pipe(
						map((partners) =>
							fetchPartnersSuccess({ partners }),
						),
					),
			),
		),
	)

	createPartner$ = createEffect(() =>
		this.actions$.pipe(
			ofType(createPartner),
			mergeMap(({ partner }) =>
				this.service.create(partner).pipe(
					map((partner) => createPartnerSuccess({ partner }))
				)
			)
		)
	);
}