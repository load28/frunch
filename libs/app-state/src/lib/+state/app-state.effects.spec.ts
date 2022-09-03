import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as AppStateActions from './app-state.actions';
import { AppStateEffects } from './app-state.effects';

describe('AppStateEffects', () => {
  let actions: Observable<Action>;
  let effects: AppStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        AppStateEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(AppStateEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AppStateActions.initAppState() });

      const expected = hot('-a-|', {
        a: AppStateActions.loadAppStateSuccess({ appState: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
