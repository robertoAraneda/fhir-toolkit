import { describe, it, expect } from 'vitest';
import type { IBundle, IPatient } from '@fhir-toolkit/r4-types';
import {
  extractResources,
  findBundleLink,
  parseLocationHeader,
} from '../src/utils.js';
import {
  normalizeBaseUrl,
  buildResourceUrl,
  encodeSearchParams,
  encodeHistoryParams,
} from '../src/utils.js';

describe('normalizeBaseUrl', () => {
  it('removes trailing slash', () => {
    expect(normalizeBaseUrl('https://server.com/fhir/')).toBe('https://server.com/fhir');
  });

  it('removes multiple trailing slashes', () => {
    expect(normalizeBaseUrl('https://server.com/fhir///')).toBe('https://server.com/fhir');
  });

  it('returns unchanged if no trailing slash', () => {
    expect(normalizeBaseUrl('https://server.com/fhir')).toBe('https://server.com/fhir');
  });
});

describe('buildResourceUrl', () => {
  const base = 'https://server.com/fhir';

  it('builds URL with resourceType only', () => {
    expect(buildResourceUrl(base, 'Patient')).toBe('https://server.com/fhir/Patient');
  });

  it('builds URL with resourceType and id', () => {
    expect(buildResourceUrl(base, 'Patient', '123')).toBe('https://server.com/fhir/Patient/123');
  });

  it('builds URL with resourceType, id, and versionId', () => {
    expect(buildResourceUrl(base, 'Patient', '123', '2')).toBe(
      'https://server.com/fhir/Patient/123/_history/2',
    );
  });

  it('strips trailing slash from base', () => {
    expect(buildResourceUrl('https://server.com/fhir/', 'Patient')).toBe(
      'https://server.com/fhir/Patient',
    );
  });
});

describe('encodeSearchParams', () => {
  it('encodes simple string params', () => {
    expect(encodeSearchParams({ name: 'Smith' })).toBe('name=Smith');
  });

  it('encodes number params', () => {
    expect(encodeSearchParams({ _count: 20 })).toBe('_count=20');
  });

  it('encodes boolean params', () => {
    expect(encodeSearchParams({ active: true })).toBe('active=true');
  });

  it('encodes array params as repeated keys', () => {
    const result = encodeSearchParams({ _include: ['Patient:organization', 'Patient:general-practitioner'] });
    expect(result).toBe('_include=Patient%3Aorganization&_include=Patient%3Ageneral-practitioner');
  });

  it('encodes multiple params', () => {
    const result = encodeSearchParams({ name: 'Smith', _count: 20 });
    expect(result).toContain('name=Smith');
    expect(result).toContain('_count=20');
  });

  it('encodes special characters', () => {
    expect(encodeSearchParams({ name: 'John Doe' })).toBe('name=John%20Doe');
  });
});

describe('encodeHistoryParams', () => {
  it('encodes _count', () => {
    expect(encodeHistoryParams({ _count: 10 })).toBe('_count=10');
  });

  it('encodes _since', () => {
    expect(encodeHistoryParams({ _since: '2024-01-01' })).toBe('_since=2024-01-01');
  });

  it('encodes all params', () => {
    const result = encodeHistoryParams({ _count: 10, _since: '2024-01-01', _at: '2024-06-01' });
    expect(result).toContain('_count=10');
    expect(result).toContain('_since=2024-01-01');
    expect(result).toContain('_at=2024-06-01');
  });

  it('returns empty string for empty params', () => {
    expect(encodeHistoryParams({})).toBe('');
  });
});

describe('findBundleLink', () => {
  const bundle: IBundle = {
    resourceType: 'Bundle',
    type: 'searchset',
    link: [
      { relation: 'self', url: 'https://server.com/fhir/Patient?_page=1' },
      { relation: 'next', url: 'https://server.com/fhir/Patient?_page=2' },
      { relation: 'previous', url: 'https://server.com/fhir/Patient?_page=0' },
    ],
  };

  it('finds next link', () => {
    expect(findBundleLink(bundle, 'next')).toBe('https://server.com/fhir/Patient?_page=2');
  });

  it('finds previous link', () => {
    expect(findBundleLink(bundle, 'previous')).toBe('https://server.com/fhir/Patient?_page=0');
  });

  it('returns null for missing relation', () => {
    expect(findBundleLink(bundle, 'last')).toBeNull();
  });

  it('returns null when bundle has no links', () => {
    const emptyBundle: IBundle = { resourceType: 'Bundle', type: 'searchset' };
    expect(findBundleLink(emptyBundle, 'next')).toBeNull();
  });
});

describe('extractResources', () => {
  it('extracts resources from bundle entries', () => {
    const bundle: IBundle = {
      resourceType: 'Bundle',
      type: 'searchset',
      entry: [
        { resource: { resourceType: 'Patient', id: '1' } },
        { resource: { resourceType: 'Patient', id: '2' } },
      ],
    };
    const patients = extractResources<IPatient>(bundle);
    expect(patients).toHaveLength(2);
    expect(patients[0]!.resourceType).toBe('Patient');
    expect(patients[0]!.id).toBe('1');
  });

  it('skips entries without resource', () => {
    const bundle: IBundle = {
      resourceType: 'Bundle',
      type: 'searchset',
      entry: [
        { resource: { resourceType: 'Patient', id: '1' } },
        { fullUrl: 'urn:uuid:deleted' },
      ],
    };
    const patients = extractResources<IPatient>(bundle);
    expect(patients).toHaveLength(1);
  });

  it('returns empty array for bundle without entries', () => {
    const bundle: IBundle = { resourceType: 'Bundle', type: 'searchset' };
    expect(extractResources<IPatient>(bundle)).toEqual([]);
  });
});

describe('parseLocationHeader', () => {
  it('parses resourceType and id', () => {
    expect(parseLocationHeader('https://server.com/fhir/Patient/123')).toEqual({
      resourceType: 'Patient',
      id: '123',
    });
  });

  it('parses resourceType, id, and versionId', () => {
    expect(parseLocationHeader('https://server.com/fhir/Patient/123/_history/1')).toEqual({
      resourceType: 'Patient',
      id: '123',
      versionId: '1',
    });
  });

  it('handles query parameters', () => {
    expect(parseLocationHeader('https://server.com/fhir/Patient/123/_history/1?_format=json')).toEqual({
      resourceType: 'Patient',
      id: '123',
      versionId: '1',
    });
  });

  it('returns null for invalid location', () => {
    expect(parseLocationHeader('invalid-url')).toBeNull();
  });

  it('returns null for URL without resource pattern', () => {
    expect(parseLocationHeader('https://server.com/fhir/')).toBeNull();
  });
});
