import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SmartAuth } from '@fhir-toolkit/smart-auth';
import { FhirProvider } from '../src/provider.js';
import {
  createTestConfig,
  createTestSmartAuth,
  setupFetchMock,
} from './helpers/test-utils.js';

describe('FhirProvider', () => {
  beforeEach(() => {
    setupFetchMock();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders children', () => {
    const smartAuth = createTestSmartAuth();
    render(
      <FhirProvider smartAuth={smartAuth}>
        <div data-testid="child">Hello</div>
      </FhirProvider>,
    );
    expect(screen.getByTestId('child')).toBeDefined();
  });

  it('accepts a SmartAuth instance', () => {
    const smartAuth = createTestSmartAuth();
    const { container } = render(
      <FhirProvider smartAuth={smartAuth}>
        <span>OK</span>
      </FhirProvider>,
    );
    expect(container.textContent).toBe('OK');
  });

  it('accepts a config object', () => {
    const config = createTestConfig();
    const { container } = render(
      <FhirProvider config={config}>
        <span>OK</span>
      </FhirProvider>,
    );
    expect(container.textContent).toBe('OK');
  });

  it('throws when both smartAuth and config are provided', () => {
    const smartAuth = createTestSmartAuth();
    const config = createTestConfig();

    expect(() =>
      render(
        <FhirProvider smartAuth={smartAuth} config={config}>
          <span />
        </FhirProvider>,
      ),
    ).toThrow('FhirProvider accepts either `smartAuth` or `config`, not both.');
  });

  it('throws when neither smartAuth nor config is provided', () => {
    expect(() =>
      render(
        <FhirProvider>
          <span />
        </FhirProvider>,
      ),
    ).toThrow('FhirProvider requires either a `smartAuth` instance or a `config` object.');
  });
});
