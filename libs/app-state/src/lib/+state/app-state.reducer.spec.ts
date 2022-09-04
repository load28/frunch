import { Action } from '@ngrx/store';

import * as AppStateActions from './app-state.actions';
import { IAppStateEntity } from './app-state.models';
import { appStateReducer, AppStateState, initialAppStateState } from './app-state.reducer';

describe('AppState Reducer', () => {
  const createAppStateEntity = (id: string, name = ''): IAppStateEntity => ({
    id: id,
    name: name || `name-${id}`
  });

  describe('valid AppState actions', () => {
    it('loadAppStateSuccess should return the list of known AppState', () => {
      const appState = [
        createAppStateEntity('PRODUCT-AAA'),
        createAppStateEntity('PRODUCT-zzz')
      ];
      const action = AppStateActions.loadAppStateSuccess({ appState });

      const result: AppStateState = appStateReducer(
        initialAppStateState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = appStateReducer(initialAppStateState, action);

      expect(result).toBe(initialAppStateState);
    });
  });
});
