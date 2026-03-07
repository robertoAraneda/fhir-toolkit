import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ResourceTable } from '../../src/components/ResourceTable.js';
import type { IBundle } from '@fhir-toolkit/r4-types';
import type { ColumnDef } from '../../src/types.js';

const mockBundle: IBundle = {
  resourceType: 'Bundle',
  type: 'searchset',
  total: 2,
  entry: [
    {
      resource: {
        resourceType: 'Patient',
        id: '1',
        name: [{ given: ['Alice'], family: 'Johnson' }],
        gender: 'female',
        birthDate: '1990-01-15',
      } as any,
    },
    {
      resource: {
        resourceType: 'Patient',
        id: '2',
        name: [{ given: ['Bob'], family: 'Smith' }],
        gender: 'male',
        birthDate: '1985-06-20',
      } as any,
    },
  ],
};

const columns: ColumnDef[] = [
  { header: 'Name', accessor: (r: any) => r.name?.[0], type: 'HumanName' },
  { header: 'Gender', accessor: (r: any) => r.gender },
  { header: 'DOB', accessor: (r: any) => r.birthDate },
];

describe('ResourceTable', () => {
  it('renders rows from bundle entries', () => {
    const { container } = render(
      <ResourceTable bundle={mockBundle} columns={columns}>
        {({ rows }) => (
          <table>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  {row.cells.map((cell, j) => (
                    <td key={j}>{cell.formatted}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </ResourceTable>,
    );
    const cells = container.querySelectorAll('td');
    expect(cells[0]?.textContent).toBe('Alice Johnson');
    expect(cells[1]?.textContent).toBe('female');
    expect(cells[2]?.textContent).toBe('1990-01-15');
    expect(cells[3]?.textContent).toBe('Bob Smith');
  });

  it('provides total from bundle', () => {
    let capturedTotal: number | undefined;
    render(
      <ResourceTable bundle={mockBundle} columns={columns}>
        {({ total }) => {
          capturedTotal = total;
          return <div />;
        }}
      </ResourceTable>,
    );
    expect(capturedTotal).toBe(2);
  });

  it('provides column definitions', () => {
    let capturedColumns: ColumnDef[] = [];
    render(
      <ResourceTable bundle={mockBundle} columns={columns}>
        {({ columns: cols }) => {
          capturedColumns = cols;
          return <div />;
        }}
      </ResourceTable>,
    );
    expect(capturedColumns).toHaveLength(3);
    expect(capturedColumns[0]?.header).toBe('Name');
  });

  it('provides extracted resources', () => {
    let capturedResources: any[] = [];
    render(
      <ResourceTable bundle={mockBundle} columns={columns}>
        {({ resources }) => {
          capturedResources = resources;
          return <div />;
        }}
      </ResourceTable>,
    );
    expect(capturedResources).toHaveLength(2);
    expect(capturedResources[0]?.id).toBe('1');
  });

  it('handles empty bundle', () => {
    const emptyBundle: IBundle = { resourceType: 'Bundle', type: 'searchset' };
    let capturedRows: any[] = [];
    render(
      <ResourceTable bundle={emptyBundle} columns={columns}>
        {({ rows, total }) => {
          capturedRows = rows;
          return <span>{total ?? 'none'}</span>;
        }}
      </ResourceTable>,
    );
    expect(capturedRows).toHaveLength(0);
  });

  it('exposes cell raw values', () => {
    let capturedCellValue: unknown;
    render(
      <ResourceTable bundle={mockBundle} columns={columns}>
        {({ rows }) => {
          capturedCellValue = rows[0]?.cells[0]?.value;
          return <div />;
        }}
      </ResourceTable>,
    );
    expect(capturedCellValue).toEqual({ given: ['Alice'], family: 'Johnson' });
  });

  it('renders column headers', () => {
    const { container } = render(
      <ResourceTable bundle={mockBundle} columns={columns}>
        {({ columns: cols }) => (
          <table>
            <thead>
              <tr>
                {cols.map((c) => (
                  <th key={c.header}>{c.header}</th>
                ))}
              </tr>
            </thead>
          </table>
        )}
      </ResourceTable>,
    );
    const headers = container.querySelectorAll('th');
    expect(headers).toHaveLength(3);
    expect(headers[0]?.textContent).toBe('Name');
    expect(headers[1]?.textContent).toBe('Gender');
    expect(headers[2]?.textContent).toBe('DOB');
  });
});
