import { Injectable } from '@angular/core';
import { AppStateImplService } from './app-state-impl.service';
import { Observable } from 'rxjs';
import { IAppStateEntity } from '@frunch/app-state';

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
 * IAppStateService 인터페이스로 구현된 서비스 구현체를 주입하여 실행함
 * 인터페이스를 통해서 의존성을 제어함
 */
@Injectable()
export class AppStateService implements IAppStateService {
  selectedAppState$ = this.appStateImplService.selectedAppState$;

  constructor(private readonly appStateImplService: AppStateImplService) {
  }

  initState(): void {
    this.appStateImplService.initState();
  }

  updateId(): void {
    this.appStateImplService.updateId();
  }
}
