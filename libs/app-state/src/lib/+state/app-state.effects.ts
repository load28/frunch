import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as AppStateActions from './app-state.actions';

@Injectable()
export class AppStateEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppStateActions.initAppState),
      fetch({
        run: () => {
          const appState = [{
            id: 'test',
            platform: 'browser',
            user: { id: 'seo', name: 'min', email: 'tjalsdud89@email.com' }
          }];
          return AppStateActions.loadAppStateSuccess({ appState });
        },
        onError: (action, error) => {
          return AppStateActions.loadAppStateFailure({ error });
        }
      })
    )
  );

  selectedId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppStateActions.setAppStateId),
      fetch({
        run: () => {
          const appState = [{
            id: 'test',
            platform: 'browser',
            user: { id: 'seo', name: 'min', email: 'tjalsdud89@email.com' }
          }];
          return AppStateActions.loadAppStateIdSuccess({ id: appState[0].id });
        },
        onError(action, error) {
          return AppStateActions.loadAppStateFailure({ error });
        }
      })
    )
  );

  constructor(private readonly actions$: Actions) {
  }
}
