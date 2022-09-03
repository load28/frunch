import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  APP_STATE_FEATURE_KEY,
  AppStateState,
  appStateAdapter,
} from './app-state.reducer';

// Lookup the 'AppState' feature state managed by NgRx
export const getAppStateState = createFeatureSelector<AppStateState>(
  APP_STATE_FEATURE_KEY,
);

const { selectAll, selectEntities } = appStateAdapter.getSelectors();

export const getAppStateLoaded = createSelector(
  getAppStateState,
  (state: AppStateState) => state.loaded
);

export const getAppStateError = createSelector(
  getAppStateState,
  (state: AppStateState) => state.error
);

export const getAllAppState = createSelector(
  getAppStateState,
  (state: AppStateState) => selectAll(state)
);

export const getAppStateEntities = createSelector(
  getAppStateState,
  (state: AppStateState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getAppStateState,
  (state: AppStateState) => state.selectedId
);

export const getSelected = createSelector(
  getAppStateEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
