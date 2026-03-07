import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { SearchForm } from '../../src/components/SearchForm.js';

describe('SearchForm', () => {
  const initialParams = { name: '', gender: '' };

  it('renders with initial params', () => {
    const onSearch = vi.fn();
    const { getByTestId } = render(
      <SearchForm initialParams={initialParams} onSearch={onSearch}>
        {({ params }) => (
          <div>
            <span data-testid="name">{params.name}</span>
            <span data-testid="gender">{params.gender}</span>
          </div>
        )}
      </SearchForm>,
    );
    expect(getByTestId('name').textContent).toBe('');
    expect(getByTestId('gender').textContent).toBe('');
  });

  it('updates params via setParam', () => {
    const onSearch = vi.fn();
    const { getByTestId } = render(
      <SearchForm initialParams={initialParams} onSearch={onSearch}>
        {({ params, setParam }) => (
          <div>
            <input
              data-testid="name-input"
              value={params.name ?? ''}
              onChange={(e) => setParam('name', e.target.value)}
            />
            <span data-testid="name-display">{params.name}</span>
          </div>
        )}
      </SearchForm>,
    );
    fireEvent.change(getByTestId('name-input'), { target: { value: 'Smith' } });
    expect(getByTestId('name-display').textContent).toBe('Smith');
  });

  it('calls onSearch on submit', () => {
    const onSearch = vi.fn();
    const { getByTestId } = render(
      <SearchForm initialParams={{ name: 'Doe' }} onSearch={onSearch}>
        {({ submit }) => (
          <form data-testid="form" onSubmit={submit}>
            <button type="submit">Search</button>
          </form>
        )}
      </SearchForm>,
    );
    fireEvent.submit(getByTestId('form'));
    expect(onSearch).toHaveBeenCalledWith({ name: 'Doe' });
  });

  it('resets params and calls onSearch', () => {
    const onSearch = vi.fn();
    const { getByTestId } = render(
      <SearchForm initialParams={initialParams} onSearch={onSearch}>
        {({ params, setParam, reset }) => (
          <div>
            <input
              data-testid="name-input"
              value={params.name ?? ''}
              onChange={(e) => setParam('name', e.target.value)}
            />
            <button data-testid="reset" onClick={reset}>
              Reset
            </button>
            <span data-testid="name-display">{params.name}</span>
          </div>
        )}
      </SearchForm>,
    );
    fireEvent.change(getByTestId('name-input'), { target: { value: 'Smith' } });
    expect(getByTestId('name-display').textContent).toBe('Smith');

    fireEvent.click(getByTestId('reset'));
    expect(getByTestId('name-display').textContent).toBe('');
    expect(onSearch).toHaveBeenCalledWith({ name: '', gender: '' });
  });

  it('tracks isDirty state', () => {
    const onSearch = vi.fn();
    const { getByTestId } = render(
      <SearchForm initialParams={initialParams} onSearch={onSearch}>
        {({ params, setParam, isDirty }) => (
          <div>
            <input
              data-testid="name-input"
              value={params.name ?? ''}
              onChange={(e) => setParam('name', e.target.value)}
            />
            <span data-testid="dirty">{isDirty ? 'yes' : 'no'}</span>
          </div>
        )}
      </SearchForm>,
    );
    expect(getByTestId('dirty').textContent).toBe('no');
    fireEvent.change(getByTestId('name-input'), { target: { value: 'X' } });
    expect(getByTestId('dirty').textContent).toBe('yes');
  });

  it('prevents default on submit event', () => {
    const onSearch = vi.fn();
    const preventDefault = vi.fn();
    let submitFn: (e?: { preventDefault?: () => void }) => void;

    render(
      <SearchForm initialParams={{ q: 'test' }} onSearch={onSearch}>
        {({ submit }) => {
          submitFn = submit;
          return <div />;
        }}
      </SearchForm>,
    );

    submitFn!({ preventDefault });
    expect(preventDefault).toHaveBeenCalled();
    expect(onSearch).toHaveBeenCalledWith({ q: 'test' });
  });

  it('isDirty is false after reset', () => {
    const onSearch = vi.fn();
    const { getByTestId } = render(
      <SearchForm initialParams={initialParams} onSearch={onSearch}>
        {({ params, setParam, reset, isDirty }) => (
          <div>
            <input
              data-testid="input"
              value={params.name ?? ''}
              onChange={(e) => setParam('name', e.target.value)}
            />
            <button data-testid="reset" onClick={reset}>
              Reset
            </button>
            <span data-testid="dirty">{isDirty ? 'yes' : 'no'}</span>
          </div>
        )}
      </SearchForm>,
    );
    fireEvent.change(getByTestId('input'), { target: { value: 'X' } });
    expect(getByTestId('dirty').textContent).toBe('yes');
    fireEvent.click(getByTestId('reset'));
    expect(getByTestId('dirty').textContent).toBe('no');
  });
});
