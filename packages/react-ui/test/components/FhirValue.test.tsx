import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { FhirValue } from '../../src/components/FhirValue.js';

describe('FhirValue', () => {
  it('renders formatted string in a span by default', () => {
    const { container } = render(<FhirValue value="hello" type="string" />);
    expect(container.querySelector('span')?.textContent).toBe('hello');
  });

  it('formats HumanName', () => {
    const { container } = render(
      <FhirValue value={{ given: ['John'], family: 'Doe' }} type="HumanName" />,
    );
    expect(container.textContent).toBe('John Doe');
  });

  it('formats boolean as Yes/No', () => {
    const { container: yes } = render(<FhirValue value={true} type="boolean" />);
    expect(yes.textContent).toBe('Yes');
    const { container: no } = render(<FhirValue value={false} type="boolean" />);
    expect(no.textContent).toBe('No');
  });

  it('renders empty string for null', () => {
    const { container } = render(<FhirValue value={null} type="string" />);
    expect(container.querySelector('span')?.textContent).toBe('');
  });

  it('renders Quantity', () => {
    const { container } = render(
      <FhirValue value={{ value: 72, unit: 'kg' }} type="Quantity" />,
    );
    expect(container.textContent).toBe('72 kg');
  });

  it('uses render prop when provided', () => {
    const { container } = render(
      <FhirValue value="test" type="string">
        {({ formatted, raw, type }) => (
          <div data-testid="custom">
            <strong>{formatted}</strong>
            <em>{String(raw)}</em>
            <code>{type}</code>
          </div>
        )}
      </FhirValue>,
    );
    expect(container.querySelector('strong')?.textContent).toBe('test');
    expect(container.querySelector('em')?.textContent).toBe('test');
    expect(container.querySelector('code')?.textContent).toBe('string');
  });

  it('passes raw object in render prop', () => {
    const name = { given: ['Jane'], family: 'Smith' };
    let capturedRaw: unknown;
    render(
      <FhirValue value={name} type="HumanName">
        {({ raw }) => {
          capturedRaw = raw;
          return <span />;
        }}
      </FhirValue>,
    );
    expect(capturedRaw).toBe(name);
  });

  it('formats CodeableConcept', () => {
    const { container } = render(
      <FhirValue value={{ text: 'Hypertension' }} type="CodeableConcept" />,
    );
    expect(container.textContent).toBe('Hypertension');
  });

  it('formats Period', () => {
    const { container } = render(
      <FhirValue value={{ start: '2024-01-01', end: '2024-12-31' }} type="Period" />,
    );
    expect(container.textContent).toBe('2024-01-01 – 2024-12-31');
  });
});
