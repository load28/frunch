import { Injectable } from '@angular/core';
import { AppStateImplService, IAppStateService } from '@frunch/app-state';


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
