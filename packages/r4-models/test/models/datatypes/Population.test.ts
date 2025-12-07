/**
 * Population Model and Builder Tests
 *
 * Tests for the Population datatype class and its builder.
 * Population defines a group of people with some set of grouping criteria.
 */

import { describe, it, expect } from 'vitest';
import { Population, PopulationBuilder } from '../../../src/index.js';
import type { IPopulation } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const populations = {
  withAgeRange: {
    ageRange: {
      low: { value: 18, unit: 'years' },
      high: { value: 65, unit: 'years' },
    },
  } as IPopulation,
  withAgeCodeableConcept: {
    ageCodeableConcept: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
          code: 'PEDS',
          display: 'Pediatric',
        },
      ],
      text: 'Pediatric population',
    },
  } as IPopulation,
  withGender: {
    gender: {
      coding: [
        {
          system: 'http://hl7.org/fhir/administrative-gender',
          code: 'female',
          display: 'Female',
        },
      ],
    },
  } as IPopulation,
  withRace: {
    race: {
      coding: [
        {
          system: 'urn:oid:2.16.840.1.113883.6.238',
          code: '2106-3',
          display: 'White',
        },
      ],
    },
  } as IPopulation,
  withPhysiologicalCondition: {
    physiologicalCondition: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '77386006',
          display: 'Pregnancy',
        },
      ],
      text: 'Pregnant patients',
    },
  } as IPopulation,
  complex: {
    ageRange: {
      low: { value: 18, unit: 'years' },
      high: { value: 45, unit: 'years' },
    },
    gender: {
      coding: [
        {
          system: 'http://hl7.org/fhir/administrative-gender',
          code: 'female',
        },
      ],
    },
    physiologicalCondition: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '77386006',
          display: 'Pregnancy',
        },
      ],
    },
  } as IPopulation,
  elderly: {
    ageRange: {
      low: { value: 65, unit: 'years' },
    },
    physiologicalCondition: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '73211009',
          display: 'Diabetes mellitus',
        },
      ],
    },
  } as IPopulation,
};

describe('Population', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const pop = new Population({});
        expect(pop).toBeInstanceOf(Population);
      });

      it('should create population with age range', () => {
        const pop = new Population(populations.withAgeRange);
        expect(pop.ageRange?.low?.value).toBe(18);
        expect(pop.ageRange?.high?.value).toBe(65);
      });

      it('should create population with age CodeableConcept', () => {
        const pop = new Population(populations.withAgeCodeableConcept);
        expect(pop.ageCodeableConcept?.coding?.[0].code).toBe('PEDS');
      });

      it('should create population with gender', () => {
        const pop = new Population(populations.withGender);
        expect(pop.gender?.coding?.[0].code).toBe('female');
      });

      it('should create population with race', () => {
        const pop = new Population(populations.withRace);
        expect(pop.race?.coding?.[0].code).toBe('2106-3');
      });

      it('should create population with physiological condition', () => {
        const pop = new Population(populations.withPhysiologicalCondition);
        expect(pop.physiologicalCondition?.coding?.[0].code).toBe('77386006');
      });

      it('should create complex population', () => {
        const pop = new Population(populations.complex);
        expect(pop.ageRange?.low?.value).toBe(18);
        expect(pop.gender?.coding?.[0].code).toBe('female');
        expect(pop.physiologicalCondition?.coding?.[0].code).toBe('77386006');
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const pop = new Population(populations.complex);
        const json = pop.toJSON();

        expect(json.ageRange?.low?.value).toBe(18);
        expect(json.gender?.coding?.[0].code).toBe('female');
      });

      it('should omit undefined properties in JSON', () => {
        const pop = new Population(populations.withGender);
        const json = pop.toJSON();

        expect(json.gender).toBeDefined();
        expect(json).not.toHaveProperty('ageRange');
        expect(json).not.toHaveProperty('race');
        expect(json).not.toHaveProperty('physiologicalCondition');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Population(populations.complex);
        expectSerializationRoundtrip(original, Population);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IPopulation = {
          gender: { coding: [{ code: 'male' }] },
        };
        const pop = Population.fromJSON(json);

        expect(pop).toBeInstanceOf(Population);
        expect(pop.gender?.coding?.[0].code).toBe('male');
      });

      it('should create identical instance from JSON', () => {
        const original = new Population(populations.complex);
        const json = original.toJSON();
        const restored = Population.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Population(populations.withGender);
        const updated = original.with({
          gender: { coding: [{ code: 'male' }] },
        });

        expect(updated).not.toBe(original);
        expect(updated.gender?.coding?.[0].code).toBe('male');
        expect(original.gender?.coding?.[0].code).toBe('female');
      });

      it('should apply transform function correctly', () => {
        const pop = new Population(populations.withAgeRange);
        const transformed = pop.applyTransform((data) => ({
          ageRange: {
            low: { value: (data.ageRange?.low?.value || 0) + 5 },
            high: data.ageRange?.high,
          },
        }));

        expect(transformed.ageRange?.low?.value).toBe(23);
        expect(pop.ageRange?.low?.value).toBe(18);
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Population(populations.complex);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned ageRange', () => {
        const original = new Population(populations.withAgeRange);
        const cloned = original.clone();

        if (cloned.ageRange?.low) {
          cloned.ageRange.low.value = 100;
        }

        expect(original.ageRange?.low?.value).toBe(18);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const pop = new Population(populations.withGender);
        const str = pop.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Population');
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const pop = new Population({
          id: 'pop-1',
          gender: { coding: [{ code: 'female' }] },
        });

        expect(pop.id).toBe('pop-1');
      });

      it('should handle extension property', () => {
        const pop = new Population({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          gender: { coding: [{ code: 'female' }] },
        });

        expect(pop.extension).toHaveLength(1);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const pop = new PopulationBuilder().build();
        expect(pop).toBeInstanceOf(Population);
      });

      it('should build with gender', () => {
        const pop = new PopulationBuilder()
          .setGender({ coding: [{ code: 'female' }] })
          .build();

        expect(pop.gender?.coding?.[0].code).toBe('female');
      });

      it('should build with race', () => {
        const pop = new PopulationBuilder()
          .setRace({ coding: [{ code: '2106-3' }] })
          .build();

        expect(pop.race?.coding?.[0].code).toBe('2106-3');
      });

      it('should build with physiological condition', () => {
        const pop = new PopulationBuilder()
          .setPhysiologicalCondition({
            coding: [{ code: '77386006', display: 'Pregnancy' }],
          })
          .build();

        expect(pop.physiologicalCondition?.coding?.[0].code).toBe('77386006');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new PopulationBuilder()
          .setGender({ coding: [{ code: 'female' }] })
          .setRace({ coding: [{ code: '2106-3' }] });

        expect(builder).toBeInstanceOf(PopulationBuilder);
      });

      it('should allow overwriting properties', () => {
        const pop = new PopulationBuilder()
          .setGender({ coding: [{ code: 'female' }] })
          .setGender({ coding: [{ code: 'male' }] })
          .build();

        expect(pop.gender?.coding?.[0].code).toBe('male');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const pop = new PopulationBuilder()
          .setId('pop-1')
          .setGender({ coding: [{ code: 'female' }] })
          .build();

        expect(pop.id).toBe('pop-1');
      });

      it('should add extension from ElementBuilder', () => {
        const pop = new PopulationBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .build();

        expect(pop.extension).toHaveLength(1);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const pop = new PopulationBuilder()
          .setGender({ coding: [{ code: 'female' }] })
          .setPhysiologicalCondition({ coding: [{ code: '77386006' }] })
          .build();

        const json = pop.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new PopulationBuilder()
          .setGender({ coding: [{ code: 'female' }] })
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
    it('should work in clinical study population scenario', () => {
      const studyPopulation = new PopulationBuilder()
        .setGender({ coding: [{ code: 'female' }] })
        .setPhysiologicalCondition({
          coding: [{ code: '77386006', display: 'Pregnancy' }],
        })
        .build();

      expect(studyPopulation.gender?.coding?.[0].code).toBe('female');
      expect(studyPopulation.physiologicalCondition?.coding?.[0].code).toBe('77386006');
    });

    it('should work in drug indication scenario', () => {
      const indicationPopulation = new Population(populations.complex);

      expect(indicationPopulation.ageRange?.low?.value).toBe(18);
      expect(indicationPopulation.gender?.coding?.[0].code).toBe('female');

      const json = indicationPopulation.toJSON();
      const restored = Population.fromJSON(json);

      expect(restored.physiologicalCondition?.coding?.[0].code).toBe('77386006');
    });

    it('should work in pediatric population scenario', () => {
      const pediatricPop = new Population(populations.withAgeCodeableConcept);

      expect(pediatricPop.ageCodeableConcept?.coding?.[0].code).toBe('PEDS');
    });

    it('should handle population update', () => {
      const original = new Population(populations.withAgeRange);

      const updated = original.with({
        ageRange: {
          low: { value: 21, unit: 'years' },
          high: { value: 65, unit: 'years' },
        },
      });

      expect(updated.ageRange?.low?.value).toBe(21);
      expect(original.ageRange?.low?.value).toBe(18);
    });

    it('should work in elderly diabetic population scenario', () => {
      const elderlyDiabetic = new Population(populations.elderly);

      expect(elderlyDiabetic.ageRange?.low?.value).toBe(65);
      expect(elderlyDiabetic.physiologicalCondition?.coding?.[0].code).toBe('73211009');
    });

    it('should work in medicinal product contraindication scenario', () => {
      const contraindication = [
        new PopulationBuilder()
          .setPhysiologicalCondition({
            coding: [{ code: '77386006', display: 'Pregnancy' }],
          })
          .build(),
        new PopulationBuilder()
          .setPhysiologicalCondition({
            coding: [{ code: '90688005', display: 'Chronic renal failure' }],
          })
          .build(),
      ];

      expect(contraindication).toHaveLength(2);
      expect(contraindication[0].physiologicalCondition?.coding?.[0].code).toBe('77386006');
    });
  });
});
