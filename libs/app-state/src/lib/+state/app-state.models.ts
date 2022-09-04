/**
 * Interface for the 'user' data
 */
export interface IUser {
  id: string;
  name: string;
  email: string;
}

/**
 * Interface for the 'AppState' data
 */
export interface IAppStateEntity {
  id: string;
  user: IUser;
  platform: string;
}

