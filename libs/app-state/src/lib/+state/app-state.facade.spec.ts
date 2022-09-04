import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as AppStateActions from './app-state.actions';
import { AppStateEffects } from './app-state.effects';
import { AppStateFacade } from './app-state.facade';
import { IAppStateEntity } from './app-state.models';
import { APP_STATE_FEATURE_KEY, appStateReducer, AppStateState } from './app-state.reducer';

interface TestSchema {
  appState: AppStateState;
}

describe('AppStateFacade', () => {
  let facade: AppStateFacade;
  let store: Store<TestSchema>;
  const createAppStateEntity = (id: string, name = ''): IAppStateEntity => ({
    id: id,
    name: name || `name-${id}`
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(APP_STATE_FEATURE_KEY, appStateReducer),
          EffectsModule.forFeature([AppStateEffects])
        ],
        providers: [AppStateFacade]
      })
      class CustomFeatureModule {
      }

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {
      }

      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(AppStateFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allAppState$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allAppState$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadAppStateSuccess` to manually update list
     */
    it('allAppState$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allAppState$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        AppStateActions.loadAppStateSuccess({
          appState: [createAppStateEntity('AAA'), createAppStateEntity('BBB')]
        })
      );

      list = await readFirst(facade.allAppState$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
