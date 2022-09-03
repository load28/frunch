import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as AppStateActions from './app-state.actions';

@Injectable()
export class AppStateEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppStateActions.initAppState),
      fetch({
        run: (action) => {
          const appState = [{appId: 'browser', user: {id: 'seo', name: 'min', email: 'tjalsdud89@email.com'}}];
          return AppStateActions.loadAppStateSuccess({ appState });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return AppStateActions.loadAppStateFailure({ error });
        },
      })
    )
  );

  selectedId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppStateActions.setAppStateId),
      fetch({
        run: (action) => {
          const appState = [{appId: 'browser', user: {id: 'seo', name: 'min', email: 'tjalsdud89@email.com'}}];
          return AppStateActions.loadAppStateIdSuccess({id: appState[0].appId});
        },
      })
    )
  )

  constructor(private readonly actions$: Actions) {}
}
