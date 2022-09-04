import { Injectable } from '@angular/core';
import { ExtAppStateService } from '../../../../../apps/frunch/src/app/app-core/services/ext-app-state.service';
import { AppStateFacade } from '../+state/app-state.facade';

@Injectable()
export class AppStateImplService extends ExtAppStateService {

  constructor(private readonly appStateFacade: AppStateFacade) {
    super();
  }

  initState(): void {
    this.appStateFacade.init();
  }

  updateId(): void {
    this.appStateFacade.updateSelectedId();
  }
}
