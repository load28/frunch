/**
 * Interface for the 'AppStateService'
 */
export interface IAppStateService {
  initState(): void;

  updateId(id: string): void;
}

/**
 * app state를 초기화 할때 사용하는 서비스의 원형
 */
export abstract class ExtAppStateService implements IAppStateService {
  abstract initState(): void;

  abstract updateId(): void;
}


