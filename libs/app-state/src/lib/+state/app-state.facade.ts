import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as AppStateActions from './app-state.actions';
import * as AppStateSelectors from './app-state.selectors';

@Injectable()
export class AppStateFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(AppStateSelectors.getAppStateLoaded));
  allAppState$ = this.store.pipe(select(AppStateSelectors.getAllAppState));
  selectedAppState$ = this.store.pipe(select(AppStateSelectors.getSelected));

  constructor(private readonly store: Store) {
  }

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(AppStateActions.initAppState());
  }

  /**
   * 선택된 AppState id 업데이트
   */
  updateSelectedId() {
    this.store.dispatch(AppStateActions.setAppStateId());
  }
}
