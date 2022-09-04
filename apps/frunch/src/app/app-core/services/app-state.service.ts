import { Injectable } from '@angular/core';
import { ExtAppStateService } from './ext-app-state.service';
import { AppStateImplService } from '@frunch/app-state';

@Injectable()
export class AppStateService extends ExtAppStateService {

  constructor(private readonly appStateImplService: AppStateImplService) {
    super();
  }

  override initState(): void {
    this.appStateImplService.initState();
  }

  override updateId(): void {
    this.appStateImplService.updateId();
  }
}
