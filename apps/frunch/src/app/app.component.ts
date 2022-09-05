import { Component, OnInit } from '@angular/core';
import { AppStateService } from './app-core/services/app-state.service';

@Component({
  selector: 'frunch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appState$ = this.appStateService.selectedAppState$;

  constructor(private readonly appStateService: AppStateService) {
  }

  ngOnInit() {
    this.appStateService.initState();
    this.appStateService.updateId();
  }
}
