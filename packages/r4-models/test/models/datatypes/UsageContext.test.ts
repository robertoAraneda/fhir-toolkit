/**
 * UsageContext Model and Builder Tests
 *
 * Tests for the UsageContext datatype class and its builder.
 * UsageContext specifies clinical/business metadata for categorizing artifacts.
 */

import { describe, it, expect } from 'vitest';
import { UsageContext, UsageContextBuilder } from '../../../src/index.js';
import type { IUsageContext } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const usageContexts = {
  ageGroup: {
    code: {
      system: 'http://terminology.hl7.org/CodeSystem/usage-context-type',
      code: 'age',
      display: 'Age Range',
    },
    valueCodeableConcept: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
          code: 'PEDS',
          display: 'Pediatric',
        },
      ],
      text: 'Pediatric patients',
    },
  } as IUsageContext,
  gender: {
    code: {
      system: 'http://terminology.hl7.org/CodeSystem/usage-context-type',
      code: 'gender',
      display: 'Gender',
    },
    valueCodeableConcept: {
      coding: [
        {
          system: 'http://hl7.org/fhir/administrative-gender',
          code: 'female',
          display: 'Female',
        },
      ],
    },
  } as IUsageContext,
  clinicalFocus: {
    code: {
      system: 'http://terminology.hl7.org/CodeSystem/usage-context-type',
      code: 'focus',
      display: 'Clinical Focus',
    },
    valueCodeableConcept: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '73211009',
          display: 'Diabetes mellitus',
        },
      ],
    },
  } as IUsageContext,
  venue: {
    code: {
      system: 'http://terminology.hl7.org/CodeSystem/usage-context-type',
      code: 'venue',
      display: 'Clinical Venue',
    },
    valueCodeableConcept: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
          code: 'AMB',
          display: 'Ambulatory',
        },
      ],
    },
  } as IUsageContext,
  withQuantity: {
    code: {
      system: 'http://terminology.hl7.org/CodeSystem/usage-context-type',
      code: 'age',
    },
    valueQuantity: {
      value: 65,
      unit: 'years',
      system: 'http://unitsofmeasure.org',
      code: 'a',
      comparator: '>=',
    },
  } as IUsageContext,
  withRange: {
    code: {
      system: 'http://terminology.hl7.org/CodeSystem/usage-context-type',
      code: 'age',
    },
    valueRange: {
      low: { value: 18, unit: 'years' },
      high: { value: 65, unit: 'years' },
    },
  } as IUsageContext,
  withReference: {
    code: {
      system: 'http://terminology.hl7.org/CodeSystem/usage-context-type',
      code: 'program',
    },
    valueReference: {
      reference: 'PlanDefinition/diabetes-program',
      display: 'Diabetes Management Program',
    },
  } as IUsageContext,
};

describe('UsageContext', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const uc = new UsageContext({});
        expect(uc).toBeInstanceOf(UsageContext);
      });

      it('should create age group context', () => {
        const uc = new UsageContext(usageContexts.ageGroup);
        expect(uc.code.code).toBe('age');
        expect(uc.valueCodeableConcept?.coding?.[0].code).toBe('PEDS');
      });

      it('should create gender context', () => {
        const uc = new UsageContext(usageContexts.gender);
        expect(uc.code.code).toBe('gender');
        expect(uc.valueCodeableConcept?.coding?.[0].code).toBe('female');
      });

      it('should create clinical focus context', () => {
        const uc = new UsageContext(usageContexts.clinicalFocus);
        expect(uc.code.code).toBe('focus');
        expect(uc.valueCodeableConcept?.coding?.[0].code).toBe('73211009');
      });

      it('should create venue context', () => {
        const uc = new UsageContext(usageContexts.venue);
        expect(uc.code.code).toBe('venue');
        expect(uc.valueCodeableConcept?.coding?.[0].code).toBe('AMB');
      });

      it('should create context with quantity value', () => {
        const uc = new UsageContext(usageContexts.withQuantity);
        expect(uc.valueQuantity?.value).toBe(65);
        expect(uc.valueQuantity?.comparator).toBe('>=');
      });

      it('should create context with range value', () => {
        const uc = new UsageContext(usageContexts.withRange);
        expect(uc.valueRange?.low?.value).toBe(18);
        expect(uc.valueRange?.high?.value).toBe(65);
      });

      it('should create context with reference value', () => {
        const uc = new UsageContext(usageContexts.withReference);
        expect(uc.valueReference?.reference).toBe('PlanDefinition/diabetes-program');
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const uc = new UsageContext(usageContexts.ageGroup);
        const json = uc.toJSON();

        expect(json.code.code).toBe('age');
        expect(json.valueCodeableConcept?.coding?.[0].code).toBe('PEDS');
      });

      it('should omit undefined properties in JSON', () => {
        const uc = new UsageContext(usageContexts.ageGroup);
        const json = uc.toJSON();

        expect(json.code).toBeDefined();
        expect(json.valueCodeableConcept).toBeDefined();
        expect(json).not.toHaveProperty('valueQuantity');
        expect(json).not.toHaveProperty('valueRange');
        expect(json).not.toHaveProperty('valueReference');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new UsageContext(usageContexts.clinicalFocus);
        expectSerializationRoundtrip(original, UsageContext);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IUsageContext = {
          code: { code: 'age' },
          valueCodeableConcept: { text: 'Adult' },
        };
        const uc = UsageContext.fromJSON(json);

        expect(uc).toBeInstanceOf(UsageContext);
        expect(uc.code.code).toBe('age');
      });

      it('should create identical instance from JSON', () => {
        const original = new UsageContext(usageContexts.withRange);
        const json = original.toJSON();
        const restored = UsageContext.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new UsageContext(usageContexts.ageGroup);
        const updated = original.with({
          valueCodeableConcept: {
            coding: [{ code: 'ADULT' }],
          },
        });

        expect(updated).not.toBe(original);
        expect(updated.valueCodeableConcept?.coding?.[0].code).toBe('ADULT');
        expect(original.valueCodeableConcept?.coding?.[0].code).toBe('PEDS');
      });

      it('should apply transform function correctly', () => {
        const uc = new UsageContext(usageContexts.ageGroup);
        const transformed = uc.applyTransform((data) => ({
          valueCodeableConcept: {
            ...data.valueCodeableConcept,
            text: 'Modified text',
          },
        }));

        expect(transformed.valueCodeableConcept?.text).toBe('Modified text');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new UsageContext(usageContexts.clinicalFocus);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned code', () => {
        const original = new UsageContext(usageContexts.ageGroup);
        const cloned = original.clone();

        if (cloned.code) {
          cloned.code.code = 'modified';
        }

        expect(original.code.code).toBe('age');
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const uc = new UsageContext(usageContexts.ageGroup);
        const str = uc.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('UsageContext');
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const uc = new UsageContext({
          id: 'uc-1',
          code: { code: 'age' },
        });

        expect(uc.id).toBe('uc-1');
      });

      it('should handle extension property', () => {
        const uc = new UsageContext({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          code: { code: 'age' },
        });

        expect(uc.extension).toHaveLength(1);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const uc = new UsageContextBuilder().build();
        expect(uc).toBeInstanceOf(UsageContext);
      });

      it('should build with code only', () => {
        const uc = new UsageContextBuilder()
          .setCode({
            system: 'http://terminology.hl7.org/CodeSystem/usage-context-type',
            code: 'age',
          })
          .build();

        expect(uc.code.code).toBe('age');
      });

      it('should build with CodeableConcept value', () => {
        const uc = new UsageContextBuilder()
          .setCode({ code: 'focus' })
          .setValue('CodeableConcept', {
            coding: [{ code: '73211009' }],
          } as any)
          .build();

        expect(uc.code.code).toBe('focus');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new UsageContextBuilder()
          .setCode({ code: 'age' });

        expect(builder).toBeInstanceOf(UsageContextBuilder);
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const uc = new UsageContextBuilder()
          .setId('uc-1')
          .setCode({ code: 'age' })
          .build();

        expect(uc.id).toBe('uc-1');
      });

      it('should add extension from ElementBuilder', () => {
        const uc = new UsageContextBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setCode({ code: 'age' })
          .build();

        expect(uc.extension).toHaveLength(1);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const uc = new UsageContextBuilder()
          .setCode({ code: 'age' })
          .build();

        const json = uc.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new UsageContextBuilder()
          .setCode({ code: 'age' })
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
    it('should work in measure applicability scenario', () => {
      const measureContexts = [
        new UsageContext(usageContexts.ageGroup),
        new UsageContext(usageContexts.clinicalFocus),
        new UsageContext(usageContexts.venue),
      ];

      expect(measureContexts).toHaveLength(3);
      expect(measureContexts[0].code.code).toBe('age');
      expect(measureContexts[1].code.code).toBe('focus');
      expect(measureContexts[2].code.code).toBe('venue');

      const json = measureContexts[0].toJSON();
      const restored = UsageContext.fromJSON(json);

      expect(restored.valueCodeableConcept?.coding?.[0].code).toBe('PEDS');
    });

    it('should work in questionnaire context scenario', () => {
      const questionnaireContext = new UsageContext({
        code: {
          system: 'http://terminology.hl7.org/CodeSystem/usage-context-type',
          code: 'task',
          display: 'Workflow Task',
        },
        valueCodeableConcept: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
              code: 'INTAKE',
              display: 'Patient Intake',
            },
          ],
        },
      });

      expect(questionnaireContext.code.code).toBe('task');
    });

    it('should work in age range scenario', () => {
      const ageRangeContext = new UsageContext(usageContexts.withRange);

      expect(ageRangeContext.valueRange?.low?.value).toBe(18);
      expect(ageRangeContext.valueRange?.high?.value).toBe(65);
    });

    it('should work in program reference scenario', () => {
      const programContext = new UsageContext(usageContexts.withReference);

      expect(programContext.valueReference?.reference).toBe('PlanDefinition/diabetes-program');
    });

    it('should handle context update', () => {
      const original = new UsageContext(usageContexts.ageGroup);

      const updated = original.with({
        valueCodeableConcept: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
              code: 'GER',
              display: 'Geriatric',
            },
          ],
          text: 'Geriatric patients',
        },
      });

      expect(updated.valueCodeableConcept?.coding?.[0].code).toBe('GER');
      expect(original.valueCodeableConcept?.coding?.[0].code).toBe('PEDS');
    });

    it('should work in multiple contexts scenario', () => {
      const multipleContexts = [
        new UsageContextBuilder()
          .setCode({ code: 'age' })
          .build(),
        new UsageContextBuilder()
          .setCode({ code: 'gender' })
          .build(),
        new UsageContextBuilder()
          .setCode({ code: 'focus' })
          .build(),
      ];

      expect(multipleContexts).toHaveLength(3);
      expect(multipleContexts.map((c) => c.code.code)).toEqual(['age', 'gender', 'focus']);
    });
  });
});
