import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ResourceDetail } from '../../src/components/ResourceDetail.js';
import type { FieldDef } from '../../src/types.js';

const mockPatient = {
  resourceType: 'Patient',
  id: '123',
  name: [{ given: ['John'], family: 'Doe' }],
  gender: 'male',
  birthDate: '1990-05-15',
  telecom: [{ system: 'phone', value: '555-1234' }],
  active: true,
};

const fields: FieldDef<typeof mockPatient>[] = [
  { label: 'Name', accessor: (r) => r.name?.[0], type: 'HumanName' },
  { label: 'Gender', accessor: (r) => r.gender },
  { label: 'Birth Date', accessor: (r) => r.birthDate },
  { label: 'Phone', accessor: (r) => r.telecom?.[0], type: 'ContactPoint' },
  { label: 'Active', accessor: (r) => r.active, type: 'boolean' },
];

describe('ResourceDetail', () => {
  it('renders all fields as a definition list', () => {
    const { container } = render(
      <ResourceDetail resource={mockPatient} fields={fields}>
        {({ fields: renderedFields }) => (
          <dl>
            {renderedFields.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.formatted}</dd>
              </div>
            ))}
          </dl>
        )}
      </ResourceDetail>,
    );
    const dts = container.querySelectorAll('dt');
    const dds = container.querySelectorAll('dd');
    expect(dts).toHaveLength(5);
    expect(dts[0]?.textContent).toBe('Name');
    expect(dds[0]?.textContent).toBe('John Doe');
    expect(dds[1]?.textContent).toBe('male');
    expect(dds[2]?.textContent).toBe('1990-05-15');
    expect(dds[3]?.textContent).toBe('[phone] 555-1234');
    expect(dds[4]?.textContent).toBe('Yes');
  });

  it('provides raw values', () => {
    let capturedValues: unknown[] = [];
    render(
      <ResourceDetail resource={mockPatient} fields={fields}>
        {({ fields: renderedFields }) => {
          capturedValues = renderedFields.map((f) => f.value);
          return <div />;
        }}
      </ResourceDetail>,
    );
    expect(capturedValues[0]).toEqual({ given: ['John'], family: 'Doe' });
    expect(capturedValues[1]).toBe('male');
    expect(capturedValues[4]).toBe(true);
  });

  it('provides labels', () => {
    let capturedLabels: string[] = [];
    render(
      <ResourceDetail resource={mockPatient} fields={fields}>
        {({ fields: renderedFields }) => {
          capturedLabels = renderedFields.map((f) => f.label);
          return <div />;
        }}
      </ResourceDetail>,
    );
    expect(capturedLabels).toEqual(['Name', 'Gender', 'Birth Date', 'Phone', 'Active']);
  });

  it('handles missing data gracefully', () => {
    const sparsePatient = { resourceType: 'Patient' as const, id: '456' };
    const sparseFields: FieldDef<typeof sparsePatient>[] = [
      { label: 'Name', accessor: (r) => (r as any).name?.[0], type: 'HumanName' },
    ];
    let capturedFormatted = '';
    render(
      <ResourceDetail resource={sparsePatient} fields={sparseFields}>
        {({ fields: renderedFields }) => {
          capturedFormatted = renderedFields[0]?.formatted ?? '';
          return <div />;
        }}
      </ResourceDetail>,
    );
    expect(capturedFormatted).toBe('');
  });

  it('formats numbers as decimals by default', () => {
    const obs = { resourceType: 'Observation', valueInteger: 42 };
    const obsFields: FieldDef<typeof obs>[] = [
      { label: 'Value', accessor: (r) => r.valueInteger },
    ];
    let capturedFormatted = '';
    render(
      <ResourceDetail resource={obs} fields={obsFields}>
        {({ fields: renderedFields }) => {
          capturedFormatted = renderedFields[0]?.formatted ?? '';
          return <div />;
        }}
      </ResourceDetail>,
    );
    expect(capturedFormatted).toBe('42');
  });
});
