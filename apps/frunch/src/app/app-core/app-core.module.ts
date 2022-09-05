import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStateService } from './services/app-state.service';
import { AppStateImplService } from './services/app-state-impl.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AppStateService, AppStateImplService]
})
export class AppCoreModule {
}
