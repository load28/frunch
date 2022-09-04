import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStateService } from './services/app-state.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppStateService
  ],
  providers: [AppStateService]
})
export class AppCoreModule {
}