import type { AuthState, AuthStateListener } from './types.js';

/**
 * Manages auth state with observer pattern.
 * @internal
 */
export class AuthStateManager {
  private state: AuthState = { status: 'unauthorized' };
  private listeners = new Set<AuthStateListener>();

  getState(): AuthState {
    return this.state;
  }

  setState(newState: AuthState): void {
    if (this.state.status === newState.status && newState.status !== 'error') {
      return;
    }
    this.state = newState;
    for (const listener of this.listeners) {
      listener(newState);
    }
  }

  subscribe(listener: AuthStateListener): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }
}
