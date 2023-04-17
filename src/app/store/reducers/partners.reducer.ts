import { createReducer, on } from "@ngrx/store";
import { Partner } from "src/app/models/Partners";
import { createPartner, createPartnerSuccess, fetchPartners, fetchPartnersSuccess } from "../actions/partners.action";

export interface PartnersState {
	partners: Partner[];
	loading: boolean;
}

const initialState: PartnersState = {
	partners: [],
	loading: false
}

export const partnersReducer = createReducer(
	initialState,
	on(fetchPartners, (state) => ({ ...state, loading: true })),
	on(fetchPartnersSuccess, (state, { partners }) => ({ ...state, partners, loading: false })),
	on(createPartner, (state) => ({ ...state, loading: true })),
	on(createPartnerSuccess, (state, { partner }) => ({ ...state, partners: [...state.partners, partner], loading: false }))
)