import { Injectable } from '@angular/core';
import { AppStateFacade } from '@frunch/app-state';
import { IAppStateService } from './app-state.service';

/**
 * app state를 초기화하는 비즈니스 로직을 가진 실제 구현체
 */
@Injectable()
export class AppStateImplService implements IAppStateService {
  public selectedAppState$ = this.appStateFacade.selectedAppState$;

  constructor(private readonly appStateFacade: AppStateFacade) {
  }

  public initState(): void {
    this.appStateFacade.init();
  }

  public updateId(): void {
    this.appStateFacade.updateSelectedId();
  }
}

