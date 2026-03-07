import { describe, it, expect, beforeAll } from 'vitest';
import {
  buildLocationMap,
  findLocation,
  enrichIssuesWithLocation,
} from '../../src/validators/json-location.js';
import { FhirValidator } from '../../src/core/validator.js';

describe('JSON Location Mapper', () => {
  describe('buildLocationMap', () => {
    it('should map top-level keys', () => {
      const json = `{
  "resourceType": "Patient",
  "id": "123"
}`;
      const map = buildLocationMap(json);
      expect(map.get('resourceType')).toEqual({ line: 2, column: 3 });
      expect(map.get('id')).toEqual({ line: 3, column: 3 });
    });

    it('should map nested object keys', () => {
      const json = `{
  "resourceType": "Patient",
  "name": [
    {
      "family": "Doe",
      "given": ["John"]
    }
  ]
}`;
      const map = buildLocationMap(json);
      expect(map.get('name')).toEqual({ line: 3, column: 3 });
      // Array element at index 0
      expect(map.has('name[0]')).toBe(true);
      expect(map.get('name[0].family')).toEqual({ line: 5, column: 7 });
      expect(map.get('name[0].given')).toEqual({ line: 6, column: 7 });
    });

    it('should map array elements', () => {
      const json = `{
  "entry": [
    {"resource": {"resourceType": "Patient"}},
    {"resource": {"resourceType": "Observation"}}
  ]
}`;
      const map = buildLocationMap(json);
      expect(map.has('entry[0]')).toBe(true);
      expect(map.has('entry[1]')).toBe(true);
      expect(map.has('entry[0].resource')).toBe(true);
      expect(map.has('entry[1].resource')).toBe(true);
    });

    it('should handle deeply nested paths', () => {
      const json = `{
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "1234-5"
      }
    ]
  }
}`;
      const map = buildLocationMap(json);
      expect(map.get('code')).toEqual({ line: 2, column: 3 });
      expect(map.get('code.coding')).toEqual({ line: 3, column: 5 });
      expect(map.has('code.coding[0]')).toBe(true);
      expect(map.has('code.coding[0].system')).toBe(true);
      expect(map.has('code.coding[0].code')).toBe(true);
    });

    it('should handle empty objects and arrays', () => {
      const json = `{"meta": {}, "contained": []}`;
      const map = buildLocationMap(json);
      expect(map.has('meta')).toBe(true);
      expect(map.has('contained')).toBe(true);
    });

    it('should handle escaped strings', () => {
      const json = `{"text": "hello \\"world\\""}`;
      const map = buildLocationMap(json);
      expect(map.has('text')).toBe(true);
    });

    it('should handle various value types', () => {
      const json = `{
  "active": true,
  "count": 42,
  "rate": 3.14,
  "name": null
}`;
      const map = buildLocationMap(json);
      expect(map.has('active')).toBe(true);
      expect(map.has('count')).toBe(true);
      expect(map.has('rate')).toBe(true);
      expect(map.has('name')).toBe(true);
    });
  });

  describe('findLocation', () => {
    it('should find exact path match', () => {
      const map = new Map([
        ['Patient.name', { line: 3, column: 3 }],
      ]);
      expect(findLocation(map, 'Patient.name')).toEqual({ line: 3, column: 3 });
    });

    it('should find parent path when exact match not found', () => {
      const map = new Map([
        ['Patient', { line: 1, column: 1 }],
        ['Patient.name', { line: 3, column: 3 }],
      ]);
      // "Patient.name.family" not in map, should fall back to "Patient.name"
      expect(findLocation(map, 'Patient.name.family')).toEqual({ line: 3, column: 3 });
    });

    it('should return undefined when no match found', () => {
      const map = new Map<string, { line: number; column: number }>();
      expect(findLocation(map, 'Unknown.path')).toBeUndefined();
    });
  });

  describe('enrichIssuesWithLocation', () => {
    it('should add location to issues with matching paths', () => {
      const map = new Map([
        ['name', { line: 3, column: 3 }],
      ]);
      const issues = [
        { expression: ['name'], diagnostics: 'Error in name' },
      ];
      enrichIssuesWithLocation(issues, map);
      expect(issues[0].location).toEqual(['Line 3, Col 3']);
    });

    it('should skip issues without expressions', () => {
      const map = new Map([
        ['name', { line: 3, column: 3 }],
      ]);
      const issues = [
        { diagnostics: 'General error' },
      ];
      enrichIssuesWithLocation(issues as any, map);
      expect((issues[0] as any).location).toBeUndefined();
    });
  });
});

describe('JSON Location - Integration with Validator', () => {
  let validator: FhirValidator;

  beforeAll(async () => {
    validator = new FhirValidator({
      fhirVersion: 'R4',
      defaultOptions: {
        level: 'full',
        includeWarnings: true,
      },
    });
    await validator.initialize();
  });

  it('should include source location when option is enabled', async () => {
    const json = `{
  "resourceType": "Patient",
  "birthDate": "not-a-date"
}`;
    const resource = JSON.parse(json);
    const result = await validator.validate(resource, {
      includeSourceLocation: true,
      sourceJson: json,
    });

    // Find the birthDate error
    const dateErrors = result.issue.filter(
      (i) =>
        i.severity === 'error' &&
        i.expression?.[0]?.includes('birthDate')
    );

    if (dateErrors.length > 0) {
      // Should have location info
      expect(dateErrors[0].location).toBeDefined();
      expect(dateErrors[0].location!.length).toBeGreaterThan(0);
      expect(dateErrors[0].location![0]).toMatch(/Line \d+, Col \d+/);
    }
  });

  it('should not include source location when option is disabled', async () => {
    const resource = {
      resourceType: 'Patient',
      birthDate: 'not-a-date',
    };
    const result = await validator.validate(resource);

    const dateErrors = result.issue.filter(
      (i) =>
        i.severity === 'error' &&
        i.expression?.[0]?.includes('birthDate')
    );

    if (dateErrors.length > 0) {
      expect(dateErrors[0].location).toBeUndefined();
    }
  });
});
