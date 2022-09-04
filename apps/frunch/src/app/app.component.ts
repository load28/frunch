import { Component, OnInit } from '@angular/core';
import { AppStateFacade } from '@frunch/app-state';

@Component({
  selector: 'frunch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appState$ = this.appStateFacade.selectedAppState$;

  // global state
  constructor(private readonly appStateFacade: AppStateFacade) {
  }

  ngOnInit() {
    this.appStateFacade.init();
    this.appStateFacade.updateSelectedId();
  }
}
