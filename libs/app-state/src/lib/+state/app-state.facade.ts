import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as AppStateActions from './app-state.actions';
import * as AppStateSelectors from './app-state.selectors';

/**
 * App state를 제어하는 함수 구현체를 담은 서비스
 */
@Injectable()
export class AppStateFacade {
  /**
   * App state 셀렉터
   */
  public loaded$ = this.store.pipe(select(AppStateSelectors.getAppStateLoaded));
  public allAppState$ = this.store.pipe(select(AppStateSelectors.getAllAppState));
  public selectedAppState$ = this.store.pipe(select(AppStateSelectors.getSelected));

  constructor(private readonly store: Store) {
  }

  /**
   * AppState 초기화 액션
   */
  public init(): void {
    this.store.dispatch(AppStateActions.initAppState());
  }

  /**
   * 선택된 AppState id 업데이트
   */
  public updateSelectedId(): void {
    this.store.dispatch(AppStateActions.setAppStateId());
  }
}
