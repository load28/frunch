import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAppState from './+state/app-state.reducer';
import { AppStateEffects } from './+state/app-state.effects';
import { AppStateFacade } from './+state/app-state.facade';
import { AppStateImplService } from './services/app-state-impl.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromAppState.APP_STATE_FEATURE_KEY,
      fromAppState.appStateReducer
    ),
    EffectsModule.forFeature([AppStateEffects])
  ],
  providers: [AppStateFacade, AppStateImplService]
})
export class AppStateModule {
}
