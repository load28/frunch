/**
 * Interface for the 'user' data
 */
export interface User {
  id: string;
  name: string;
  email: string;
}

/**
 * Interface for the 'AppState' data
 */
export interface AppStateEntity {
  appId: string;
  user: User;
}
