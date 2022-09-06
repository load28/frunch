import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppStateFacade } from '../+state/app-state.facade';
import { IAppStateEntity } from '../+state/app-state.models';

/**
 * Interface for the 'AppStateService'
 */
export interface IAppStateService {
  /**
   * 선택된 app state
   */
  selectedAppState$: Observable<IAppStateEntity | unknown>;

  /**
   * 모든 app state 초기화
   */
  initState(): void;

  /**
   * 선택 할 app state id 업데이트
   */
  updateId(id: string): void;
}

/**
 * app state를 초기화하는 비즈니스 로직을 가진 실제 구현체
 */
@Injectable()
export class AppStateImplService implements IAppStateService {
  selectedAppState$ = this.appStateFacade.selectedAppState$;


  constructor(private readonly appStateFacade: AppStateFacade) {
  }

  initState(): void {
    this.appStateFacade.init();
  }

  updateId(): void {
    this.appStateFacade.updateSelectedId();
  }
}
