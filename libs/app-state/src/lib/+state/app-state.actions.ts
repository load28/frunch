import { createAction, props } from '@ngrx/store';
import { IAppStateEntity } from './app-state.models';

export const initAppState = createAction('[AppState] Init');
export const setAppStateId = createAction(
  '[AppState] Set selected id'
);

export const loadAppStateIdSuccess = createAction(
  '[AppState] Load AppState id Success',
  props<{ id: string }>()
);

export const loadAppStateIdFailure = createAction(
  '[AppState] Load AppState id Failure',
  props<{ error: any }>()
);

export const loadAppStateSuccess = createAction(
  '[AppState/API] Load AppState Success',
  props<{ appState: IAppStateEntity[] }>()
);

export const loadAppStateFailure = createAction(
  '[AppState/API] Load AppState Failure',
  props<{ error: any }>()
);
