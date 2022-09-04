import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as AppStateActions from './app-state.actions';
import { IAppStateEntity } from './app-state.models';

export const APP_STATE_FEATURE_KEY = 'app-state';

export interface AppStateState extends EntityState<IAppStateEntity> {
  selectedId?: string;
  loaded: boolean;
  error?: string | null;
}

export interface AppStatePartialState {
  readonly [APP_STATE_FEATURE_KEY]: AppStateState;
}

export const appStateAdapter: EntityAdapter<IAppStateEntity> =
  createEntityAdapter<IAppStateEntity>({ selectId: (entity: IAppStateEntity) => entity.id });

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
