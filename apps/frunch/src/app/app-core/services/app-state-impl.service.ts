import { Injectable } from '@angular/core';
import { AppStateFacade } from '@frunch/app-state';
import { IAppStateService } from './app-state.service';

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
