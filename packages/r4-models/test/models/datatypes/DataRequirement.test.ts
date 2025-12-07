/**
 * DataRequirement Model and Builder Tests
 *
 * Tests for the DataRequirement datatype class and its builder.
 * DataRequirement describes required data items for evaluation in terms of type and filters.
 */

import { describe, it, expect } from 'vitest';
import { DataRequirement, DataRequirementBuilder } from '../../../src/index.js';
import type { IDataRequirement } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const dataRequirements = {
  simple: {
    type: 'Patient',
  } as IDataRequirement,
  withProfile: {
    type: 'Observation',
    profile: [
      'http://hl7.org/fhir/StructureDefinition/vitalsigns',
    ],
  } as IDataRequirement,
  withCodeFilter: {
    type: 'Condition',
    codeFilter: [
      {
        path: 'code',
        valueSet: 'http://example.org/fhir/ValueSet/diabetes-conditions',
      },
    ],
  } as IDataRequirement,
  withDateFilter: {
    type: 'Encounter',
    dateFilter: [
      {
        path: 'period.start',
        valuePeriod: {
          start: '2024-01-01',
          end: '2024-12-31',
        },
      },
    ],
  } as IDataRequirement,
  withMustSupport: {
    type: 'MedicationRequest',
    mustSupport: ['status', 'medication', 'subject', 'authoredOn'],
  } as IDataRequirement,
  withSort: {
    type: 'Observation',
    sort: [
      {
        path: 'effectiveDateTime',
        direction: 'descending',
      },
    ],
    limit: 10,
  } as IDataRequirement,
  withSubjectCodeableConcept: {
    type: 'Observation',
    subjectCodeableConcept: {
      coding: [
        {
          system: 'http://hl7.org/fhir/resource-types',
          code: 'Patient',
        },
      ],
    },
  } as IDataRequirement,
  withSubjectReference: {
    type: 'Observation',
    subjectReference: {
      reference: 'Group/diabetes-patients',
    },
  } as IDataRequirement,
  complex: {
    type: 'Observation',
    profile: ['http://hl7.org/fhir/StructureDefinition/bp'],
    codeFilter: [
      {
        path: 'code',
        code: [
          {
            system: 'http://loinc.org',
            code: '85354-9',
            display: 'Blood pressure panel',
          },
        ],
      },
    ],
    dateFilter: [
      {
        path: 'effectiveDateTime',
        valueDuration: {
          value: 1,
          unit: 'year',
          system: 'http://unitsofmeasure.org',
          code: 'a',
        },
      },
    ],
    mustSupport: ['code', 'value', 'effectiveDateTime'],
    sort: [{ path: 'effectiveDateTime', direction: 'descending' }],
    limit: 5,
  } as IDataRequirement,
};

describe('DataRequirement', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const dr = new DataRequirement({});
        expect(dr).toBeInstanceOf(DataRequirement);
      });

      it('should create simple data requirement', () => {
        const dr = new DataRequirement(dataRequirements.simple);
        expect(dr.type).toBe('Patient');
      });

      it('should create data requirement with profile', () => {
        const dr = new DataRequirement(dataRequirements.withProfile);
        expect(dr.type).toBe('Observation');
        expect(dr.profile).toHaveLength(1);
        expect(dr.profile?.[0]).toContain('vitalsigns');
      });

      it('should create data requirement with code filter', () => {
        const dr = new DataRequirement(dataRequirements.withCodeFilter);
        expect(dr.codeFilter?.[0].path).toBe('code');
        expect(dr.codeFilter?.[0].valueSet).toContain('diabetes');
      });

      it('should create data requirement with date filter', () => {
        const dr = new DataRequirement(dataRequirements.withDateFilter);
        expect(dr.dateFilter?.[0].path).toBe('period.start');
        expect(dr.dateFilter?.[0].valuePeriod?.start).toBe('2024-01-01');
      });

      it('should create data requirement with mustSupport', () => {
        const dr = new DataRequirement(dataRequirements.withMustSupport);
        expect(dr.mustSupport).toHaveLength(4);
        expect(dr.mustSupport).toContain('status');
      });

      it('should create data requirement with sort and limit', () => {
        const dr = new DataRequirement(dataRequirements.withSort);
        expect(dr.sort?.[0].path).toBe('effectiveDateTime');
        expect(dr.sort?.[0].direction).toBe('descending');
        expect(dr.limit).toBe(10);
      });

      it('should create data requirement with subject CodeableConcept', () => {
        const dr = new DataRequirement(dataRequirements.withSubjectCodeableConcept);
        expect(dr.subjectCodeableConcept?.coding?.[0].code).toBe('Patient');
      });

      it('should create data requirement with subject Reference', () => {
        const dr = new DataRequirement(dataRequirements.withSubjectReference);
        expect(dr.subjectReference?.reference).toBe('Group/diabetes-patients');
      });

      it('should create complex data requirement', () => {
        const dr = new DataRequirement(dataRequirements.complex);
        expect(dr.profile).toHaveLength(1);
        expect(dr.codeFilter).toHaveLength(1);
        expect(dr.dateFilter).toHaveLength(1);
        expect(dr.limit).toBe(5);
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const dr = new DataRequirement(dataRequirements.withCodeFilter);
        const json = dr.toJSON();

        expect(json.type).toBe('Condition');
        expect(json.codeFilter?.[0].path).toBe('code');
      });

      it('should omit undefined properties in JSON', () => {
        const dr = new DataRequirement(dataRequirements.simple);
        const json = dr.toJSON();

        expect(json.type).toBe('Patient');
        expect(json).not.toHaveProperty('profile');
        expect(json).not.toHaveProperty('codeFilter');
        expect(json).not.toHaveProperty('dateFilter');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new DataRequirement(dataRequirements.complex);
        expectSerializationRoundtrip(original, DataRequirement);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IDataRequirement = {
          type: 'Procedure',
          mustSupport: ['code', 'performedDateTime'],
        };
        const dr = DataRequirement.fromJSON(json);

        expect(dr).toBeInstanceOf(DataRequirement);
        expect(dr.type).toBe('Procedure');
        expect(dr.mustSupport).toHaveLength(2);
      });

      it('should create identical instance from JSON', () => {
        const original = new DataRequirement(dataRequirements.complex);
        const json = original.toJSON();
        const restored = DataRequirement.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new DataRequirement(dataRequirements.simple);
        const updated = original.with({ type: 'Observation' });

        expect(updated).not.toBe(original);
        expect(updated.type).toBe('Observation');
        expect(original.type).toBe('Patient');
      });

      it('should apply transform function correctly', () => {
        const dr = new DataRequirement(dataRequirements.withSort);
        const transformed = dr.applyTransform((data) => ({
          limit: (data.limit || 0) * 2,
        }));

        expect(transformed.limit).toBe(20);
        expect(dr.limit).toBe(10);
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new DataRequirement(dataRequirements.complex);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned codeFilter', () => {
        const original = new DataRequirement(dataRequirements.withCodeFilter);
        const cloned = original.clone();

        if (cloned.codeFilter?.[0]) {
          cloned.codeFilter[0].path = 'modified';
        }

        expect(original.codeFilter?.[0].path).toBe('code');
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const dr = new DataRequirement(dataRequirements.simple);
        const str = dr.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('DataRequirement');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _type extension', () => {
        const dr = new DataRequirement({
          type: 'Observation',
          _type: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'type-info' },
            ],
          },
        });

        expect(dr._type?.extension?.[0]?.valueString).toBe('type-info');
      });

      it('should handle _limit extension', () => {
        const dr = new DataRequirement({
          type: 'Observation',
          limit: 10,
          _limit: {
            id: 'limit-ext',
          },
        });

        expect(dr._limit?.id).toBe('limit-ext');
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const dr = new DataRequirement({
          id: 'dr-1',
          type: 'Patient',
        });

        expect(dr.id).toBe('dr-1');
      });

      it('should handle extension property', () => {
        const dr = new DataRequirement({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          type: 'Patient',
        });

        expect(dr.extension).toHaveLength(1);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const dr = new DataRequirementBuilder().build();
        expect(dr).toBeInstanceOf(DataRequirement);
      });

      it('should build with type', () => {
        const dr = new DataRequirementBuilder()
          .setType('Patient')
          .build();

        expect(dr.type).toBe('Patient');
      });

      it('should build with profile', () => {
        const dr = new DataRequirementBuilder()
          .setType('Observation')
          .addProfile('http://hl7.org/fhir/StructureDefinition/vitalsigns')
          .build();

        expect(dr.profile).toHaveLength(1);
      });

      it('should build with code filter', () => {
        const dr = new DataRequirementBuilder()
          .setType('Condition')
          .addCodeFilter({
            path: 'code',
            valueSet: 'http://example.org/ValueSet/conditions',
          })
          .build();

        expect(dr.codeFilter?.[0].path).toBe('code');
      });

      it('should build with date filter', () => {
        const dr = new DataRequirementBuilder()
          .setType('Encounter')
          .addDateFilter({
            path: 'period.start',
            valuePeriod: { start: '2024-01-01' },
          })
          .build();

        expect(dr.dateFilter?.[0].valuePeriod?.start).toBe('2024-01-01');
      });

      it('should build with limit', () => {
        const dr = new DataRequirementBuilder()
          .setType('Observation')
          .setLimit(100)
          .build();

        expect(dr.limit).toBe(100);
      });
    });

    describe('Array Properties', () => {
      it('should add multiple profiles', () => {
        const dr = new DataRequirementBuilder()
          .setType('Observation')
          .addProfile('http://profile1')
          .addProfile('http://profile2')
          .build();

        expect(dr.profile).toHaveLength(2);
      });

      it('should add mustSupport elements', () => {
        const dr = new DataRequirementBuilder()
          .setType('Patient')
          .addMustSupport('name')
          .addMustSupport('birthDate')
          .addMustSupport('identifier')
          .build();

        expect(dr.mustSupport).toHaveLength(3);
        expect(dr.mustSupport).toContain('birthDate');
      });

      it('should add sort specifications', () => {
        const dr = new DataRequirementBuilder()
          .setType('Observation')
          .addSort({ path: 'effectiveDateTime', direction: 'descending' })
          .addSort({ path: 'code', direction: 'ascending' })
          .build();

        expect(dr.sort).toHaveLength(2);
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new DataRequirementBuilder()
          .setType('Observation')
          .addProfile('http://profile')
          .setLimit(10);

        expect(builder).toBeInstanceOf(DataRequirementBuilder);
      });

      it('should allow overwriting properties', () => {
        const dr = new DataRequirementBuilder()
          .setType('Patient')
          .setType('Observation')
          .build();

        expect(dr.type).toBe('Observation');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const dr = new DataRequirementBuilder()
          .setId('dr-1')
          .setType('Patient')
          .build();

        expect(dr.id).toBe('dr-1');
      });

      it('should add extension from ElementBuilder', () => {
        const dr = new DataRequirementBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setType('Patient')
          .build();

        expect(dr.extension).toHaveLength(1);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const dr = new DataRequirementBuilder()
          .setType('Observation')
          .addProfile('http://profile')
          .setLimit(10)
          .build();

        const json = dr.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new DataRequirementBuilder()
          .setType('Patient')
          .addMustSupport('name')
          .build();

        const cloned = original.clone();
        expectDeepClone(original, cloned);
      });
    });
  });

  // ============================================================================
  // Integration Tests
  // ============================================================================
  describe('Integration', () => {
    it('should work in measure data requirement scenario', () => {
      const measureDataReqs = [
        new DataRequirementBuilder()
          .setType('Patient')
          .addMustSupport('birthDate')
          .addMustSupport('gender')
          .build(),
        new DataRequirementBuilder()
          .setType('Encounter')
          .addCodeFilter({
            path: 'type',
            valueSet: 'http://example.org/ValueSet/office-visit',
          })
          .addDateFilter({
            path: 'period.start',
            valuePeriod: { start: '2024-01-01', end: '2024-12-31' },
          })
          .build(),
      ];

      expect(measureDataReqs).toHaveLength(2);
      expect(measureDataReqs[0].type).toBe('Patient');
      expect(measureDataReqs[1].codeFilter?.[0].valueSet).toContain('office-visit');
    });

    it('should work in CDS Hooks prefetch scenario', () => {
      const prefetchRequirement = new DataRequirement(dataRequirements.complex);

      expect(prefetchRequirement.type).toBe('Observation');
      expect(prefetchRequirement.limit).toBe(5);

      const json = prefetchRequirement.toJSON();
      const restored = DataRequirement.fromJSON(json);

      expect(restored.sort?.[0].direction).toBe('descending');
    });

    it('should work in library data requirement scenario', () => {
      const libraryDataReq = new DataRequirementBuilder()
        .setType('MedicationRequest')
        .addProfile('http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest')
        .addCodeFilter({
          path: 'medication',
          valueSet: 'http://example.org/ValueSet/diabetes-medications',
        })
        .addMustSupport('medication')
        .addMustSupport('authoredOn')
        .addMustSupport('status')
        .build();

      expect(libraryDataReq.profile?.[0]).toContain('us-core');
      expect(libraryDataReq.mustSupport).toHaveLength(3);
    });

    it('should handle data requirement update', () => {
      const original = new DataRequirement(dataRequirements.withSort);

      const updated = original.with({
        limit: 50,
      });

      expect(updated.limit).toBe(50);
      expect(original.limit).toBe(10);
    });

    it('should work in quality measure population scenario', () => {
      const populationCriteria = new DataRequirementBuilder()
        .setType('Condition')
        .addCodeFilter({
          path: 'code',
          code: [
            { system: 'http://hl7.org/fhir/sid/icd-10-cm', code: 'E11' },
          ],
        })
        .addCodeFilter({
          path: 'clinicalStatus',
          code: [
            { code: 'active' },
          ],
        })
        .addDateFilter({
          path: 'onset',
          valueDuration: { value: 1, unit: 'year' },
        })
        .build();

      expect(populationCriteria.codeFilter).toHaveLength(2);
      expect(populationCriteria.dateFilter).toHaveLength(1);
    });

    it('should work in bulk data export scenario', () => {
      const exportRequirements = [
        new DataRequirementBuilder()
          .setType('Patient')
          .build(),
        new DataRequirementBuilder()
          .setType('Condition')
          .build(),
        new DataRequirementBuilder()
          .setType('Observation')
          .addCodeFilter({
            path: 'category',
            code: [{ code: 'vital-signs' }],
          })
          .build(),
      ];

      expect(exportRequirements.map((r) => r.type)).toEqual(['Patient', 'Condition', 'Observation']);
    });
  });
});
