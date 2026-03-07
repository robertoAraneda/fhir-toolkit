import { describe, it, expect, vi } from 'vitest';
import { AuthStateManager } from '../src/state.js';

describe('AuthStateManager', () => {
  it('starts with unauthorized state', () => {
    const manager = new AuthStateManager();
    expect(manager.getState()).toEqual({ status: 'unauthorized' });
  });

  it('updates state', () => {
    const manager = new AuthStateManager();
    manager.setState({ status: 'authorizing' });
    expect(manager.getState()).toEqual({ status: 'authorizing' });
  });

  it('notifies listeners on state change', () => {
    const manager = new AuthStateManager();
    const listener = vi.fn();
    manager.subscribe(listener);

    manager.setState({ status: 'authorizing' });

    expect(listener).toHaveBeenCalledWith({ status: 'authorizing' });
  });

  it('does not notify if status has not changed', () => {
    const manager = new AuthStateManager();
    const listener = vi.fn();
    manager.subscribe(listener);

    manager.setState({ status: 'unauthorized' }); // Same as initial
    expect(listener).not.toHaveBeenCalled();
  });

  it('unsubscribe stops notifications', () => {
    const manager = new AuthStateManager();
    const listener = vi.fn();
    const unsubscribe = manager.subscribe(listener);

    unsubscribe();
    manager.setState({ status: 'authorizing' });

    expect(listener).not.toHaveBeenCalled();
  });

  it('supports multiple listeners', () => {
    const manager = new AuthStateManager();
    const listener1 = vi.fn();
    const listener2 = vi.fn();
    manager.subscribe(listener1);
    manager.subscribe(listener2);

    manager.setState({ status: 'authorizing' });

    expect(listener1).toHaveBeenCalledOnce();
    expect(listener2).toHaveBeenCalledOnce();
  });

  it('always notifies on error state even if already in error', () => {
    const manager = new AuthStateManager();
    const listener = vi.fn();

    const error1 = { status: 'error' as const, error: new Error('a') as any };
    const error2 = { status: 'error' as const, error: new Error('b') as any };

    manager.setState(error1);
    manager.subscribe(listener);
    manager.setState(error2);

    expect(listener).toHaveBeenCalledOnce();
  });
});
