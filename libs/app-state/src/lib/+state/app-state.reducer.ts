import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as AppStateActions from './app-state.actions';
import { AppStateEntity } from './app-state.models';

export const APP_STATE_FEATURE_KEY = 'app-state';

export interface AppStateState extends EntityState<AppStateEntity> {
  selectedId?: string; // which AppState record has been selected
  loaded: boolean; // has the AppState list been loaded
  error?: string | null; // last known error (if any)
}

export interface AppStatePartialState {
  readonly [APP_STATE_FEATURE_KEY]: AppStateState;
}

export const appStateAdapter: EntityAdapter<AppStateEntity> =
  createEntityAdapter<AppStateEntity>({ selectId: (entity: AppStateEntity) => entity.id });

export const initialAppStateState: AppStateState =
  appStateAdapter.getInitialState({
    loaded: false
  });

const reducer = createReducer(
  initialAppStateState,
  on(AppStateActions.initAppState, (state) => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(AppStateActions.loadAppStateIdSuccess, (state, { id }) => {
    return { ...state, selectedId: id };
  }),
  on(AppStateActions.loadAppStateIdFailure, (state, { error }) => {
    return { ...state, error };
  }),
  on(AppStateActions.loadAppStateSuccess, (state, { appState }) =>
    appStateAdapter.setAll(appState, { ...state, loaded: true })
  ),
  on(AppStateActions.loadAppStateFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function appStateReducer(
  state: AppStateState | undefined,
  action: Action
) {
  return reducer(state, action);
}
