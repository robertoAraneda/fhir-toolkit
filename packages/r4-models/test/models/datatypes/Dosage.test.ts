/**
 * Dosage Model and Builder Tests
 *
 * Tests for the Dosage datatype class and its builder.
 * Dosage indicates how medication is/was taken or should be taken by the patient.
 */

import { describe, it, expect } from 'vitest';
import { Dosage, DosageBuilder } from '../../../src/index.js';
import type { IDosage } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const dosages = {
  simple: {
    text: 'Take one tablet by mouth daily',
    timing: {
      repeat: {
        frequency: 1,
        period: 1,
        periodUnit: 'd',
      },
    },
  } as IDosage,
  withRoute: {
    sequence: 1,
    text: 'Take two tablets by mouth twice daily with food',
    timing: {
      repeat: {
        frequency: 2,
        period: 1,
        periodUnit: 'd',
      },
      code: {
        coding: [{ code: 'BID', display: 'twice a day' }],
      },
    },
    route: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '26643006',
          display: 'Oral route',
        },
      ],
    },
    method: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '421521009',
          display: 'Swallow',
        },
      ],
    },
  } as IDosage,
  asNeededBoolean: {
    text: 'Take as needed for pain',
    asNeededBoolean: true,
    patientInstruction: 'Take when you feel pain. Do not exceed 6 tablets in 24 hours.',
  } as IDosage,
  asNeededCodeable: {
    text: 'Take as needed for nausea',
    asNeededCodeableConcept: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '422587007',
          display: 'Nausea',
        },
      ],
    },
  } as IDosage,
  withDoseAndRate: {
    text: '500mg every 8 hours',
    doseAndRate: [
      {
        type: {
          coding: [{ code: 'ordered', display: 'Ordered' }],
        },
        doseQuantity: {
          value: 500,
          unit: 'mg',
          system: 'http://unitsofmeasure.org',
          code: 'mg',
        },
      },
    ],
    timing: {
      repeat: {
        frequency: 1,
        period: 8,
        periodUnit: 'h',
      },
    },
  } as IDosage,
  withMaxDose: {
    text: 'Take 1-2 tablets every 4-6 hours as needed. Max 8 tablets per day.',
    doseAndRate: [
      {
        doseRange: {
          low: { value: 1, unit: 'tablet' },
          high: { value: 2, unit: 'tablet' },
        },
      },
    ],
    maxDosePerPeriod: {
      numerator: { value: 8, unit: 'tablet' },
      denominator: { value: 1, unit: 'd' },
    },
    maxDosePerAdministration: {
      value: 2,
      unit: 'tablet',
    },
  } as IDosage,
  withSite: {
    text: 'Apply to affected area twice daily',
    site: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '39937001',
          display: 'Skin structure',
        },
      ],
    },
    route: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '6064005',
          display: 'Topical route',
        },
      ],
    },
  } as IDosage,
  withAdditionalInstructions: {
    text: 'Take with food',
    additionalInstruction: [
      {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '311504000',
            display: 'With or after food',
          },
        ],
      },
      {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '418914006',
            display: 'Warning. May cause drowsiness.',
          },
        ],
      },
    ],
    patientInstruction: 'Take this medication with meals. Avoid driving or operating machinery.',
  } as IDosage,
};

describe('Dosage', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const dosage = new Dosage({});
        expect(dosage).toBeInstanceOf(Dosage);
      });

      it('should create simple dosage', () => {
        const dosage = new Dosage(dosages.simple);
        expect(dosage.text).toBe('Take one tablet by mouth daily');
        expect(dosage.timing?.repeat?.frequency).toBe(1);
      });

      it('should create dosage with route and method', () => {
        const dosage = new Dosage(dosages.withRoute);
        expect(dosage.sequence).toBe(1);
        expect(dosage.route?.coding?.[0].code).toBe('26643006');
        expect(dosage.method?.coding?.[0].display).toBe('Swallow');
      });

      it('should create dosage with asNeededBoolean', () => {
        const dosage = new Dosage(dosages.asNeededBoolean);
        expect(dosage.asNeededBoolean).toBe(true);
        expect(dosage.patientInstruction).toContain('Do not exceed');
      });

      it('should create dosage with asNeededCodeableConcept', () => {
        const dosage = new Dosage(dosages.asNeededCodeable);
        expect(dosage.asNeededCodeableConcept?.coding?.[0].code).toBe('422587007');
      });

      it('should create dosage with doseAndRate', () => {
        const dosage = new Dosage(dosages.withDoseAndRate);
        expect(dosage.doseAndRate?.[0].doseQuantity?.value).toBe(500);
        expect(dosage.doseAndRate?.[0].doseQuantity?.unit).toBe('mg');
      });

      it('should create dosage with max dose limits', () => {
        const dosage = new Dosage(dosages.withMaxDose);
        expect(dosage.maxDosePerPeriod?.numerator?.value).toBe(8);
        expect(dosage.maxDosePerAdministration?.value).toBe(2);
      });

      it('should create dosage with site', () => {
        const dosage = new Dosage(dosages.withSite);
        expect(dosage.site?.coding?.[0].code).toBe('39937001');
      });

      it('should create dosage with additional instructions', () => {
        const dosage = new Dosage(dosages.withAdditionalInstructions);
        expect(dosage.additionalInstruction).toHaveLength(2);
        expect(dosage.patientInstruction).toContain('Avoid driving');
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const dosage = new Dosage(dosages.withRoute);
        const json = dosage.toJSON();

        expect(json.sequence).toBe(1);
        expect(json.route?.coding?.[0].code).toBe('26643006');
      });

      it('should omit undefined properties in JSON', () => {
        const dosage = new Dosage(dosages.simple);
        const json = dosage.toJSON();

        expect(json.text).toBeDefined();
        expect(json).not.toHaveProperty('sequence');
        expect(json).not.toHaveProperty('route');
        expect(json).not.toHaveProperty('asNeededBoolean');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Dosage(dosages.withDoseAndRate);
        expectSerializationRoundtrip(original, Dosage);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IDosage = {
          text: 'Test dosage',
          timing: { repeat: { frequency: 1, period: 1, periodUnit: 'd' } },
        };
        const dosage = Dosage.fromJSON(json);

        expect(dosage).toBeInstanceOf(Dosage);
        expect(dosage.text).toBe('Test dosage');
      });

      it('should create identical instance from JSON', () => {
        const original = new Dosage(dosages.withMaxDose);
        const json = original.toJSON();
        const restored = Dosage.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Dosage(dosages.simple);
        const updated = original.with({ text: 'Updated dosage instructions' });

        expect(updated).not.toBe(original);
        expect(updated.text).toBe('Updated dosage instructions');
        expect(original.text).toBe('Take one tablet by mouth daily');
      });

      it('should apply transform function correctly', () => {
        const dosage = new Dosage(dosages.simple);
        const transformed = dosage.applyTransform((data) => ({
          text: data.text?.toUpperCase(),
        }));

        expect(transformed.text).toBe('TAKE ONE TABLET BY MOUTH DAILY');
        expect(dosage.text).toBe('Take one tablet by mouth daily');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Dosage(dosages.withDoseAndRate);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned timing', () => {
        const original = new Dosage(dosages.simple);
        const cloned = original.clone();

        if (cloned.timing?.repeat) {
          cloned.timing.repeat.frequency = 10;
        }

        expect(original.timing?.repeat?.frequency).toBe(1);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const dosage = new Dosage(dosages.simple);
        const str = dosage.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Dosage');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _sequence extension', () => {
        const dosage = new Dosage({
          sequence: 1,
          _sequence: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'sequence-info' },
            ],
          },
          text: 'Test',
        });

        expect(dosage._sequence?.extension?.[0]?.valueString).toBe('sequence-info');
      });

      it('should handle _text extension', () => {
        const dosage = new Dosage({
          text: 'Test',
          _text: {
            id: 'text-ext',
          },
        });

        expect(dosage._text?.id).toBe('text-ext');
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const dosage = new Dosage({
          id: 'dosage-1',
          text: 'Test',
        });

        expect(dosage.id).toBe('dosage-1');
      });

      it('should handle extension property', () => {
        const dosage = new Dosage({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          text: 'Test',
        });

        expect(dosage.extension).toHaveLength(1);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const dosage = new DosageBuilder().build();
        expect(dosage).toBeInstanceOf(Dosage);
      });

      it('should build with text', () => {
        const dosage = new DosageBuilder()
          .setText('Take one tablet daily')
          .build();

        expect(dosage.text).toBe('Take one tablet daily');
      });

      it('should build with sequence', () => {
        const dosage = new DosageBuilder()
          .setSequence(1)
          .setText('First dosage')
          .build();

        expect(dosage.sequence).toBe(1);
      });

      it('should build with timing', () => {
        const dosage = new DosageBuilder()
          .setTiming({
            repeat: { frequency: 2, period: 1, periodUnit: 'd' },
          })
          .build();

        expect(dosage.timing?.repeat?.frequency).toBe(2);
      });

      it('should build with route', () => {
        const dosage = new DosageBuilder()
          .setRoute({
            coding: [{ code: '26643006', display: 'Oral route' }],
          })
          .build();

        expect(dosage.route?.coding?.[0].code).toBe('26643006');
      });

      it('should build with site and method', () => {
        const dosage = new DosageBuilder()
          .setSite({ coding: [{ code: '39937001' }] })
          .setMethod({ coding: [{ code: '421521009' }] })
          .build();

        expect(dosage.site?.coding?.[0].code).toBe('39937001');
        expect(dosage.method?.coding?.[0].code).toBe('421521009');
      });

      it('should build with max dose limits', () => {
        const dosage = new DosageBuilder()
          .setMaxDosePerPeriod({
            numerator: { value: 8 },
            denominator: { value: 1, unit: 'd' },
          })
          .setMaxDosePerAdministration({ value: 2 })
          .setMaxDosePerLifetime({ value: 1000, unit: 'mg' })
          .build();

        expect(dosage.maxDosePerPeriod?.numerator?.value).toBe(8);
        expect(dosage.maxDosePerAdministration?.value).toBe(2);
        expect(dosage.maxDosePerLifetime?.value).toBe(1000);
      });
    });

    describe('Choice Types', () => {
      it('should build with asNeeded Boolean', () => {
        const dosage = new DosageBuilder()
          .setAsNeeded('Boolean', true)
          .build();

        expect(dosage.asNeededBoolean).toBe(true);
        expect(dosage.asNeededCodeableConcept).toBeUndefined();
      });
    });

    describe('Array Properties', () => {
      it('should add additional instructions', () => {
        const dosage = new DosageBuilder()
          .addAdditionalInstruction({ text: 'With food' })
          .addAdditionalInstruction({ text: 'May cause drowsiness' })
          .build();

        expect(dosage.additionalInstruction).toHaveLength(2);
      });

      it('should add dose and rate', () => {
        const dosage = new DosageBuilder()
          .addDoseAndRate({
            doseQuantity: { value: 500, unit: 'mg' },
          })
          .build();

        expect(dosage.doseAndRate?.[0].doseQuantity?.value).toBe(500);
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new DosageBuilder()
          .setText('Test')
          .setSequence(1)
          .setPatientInstruction('Patient info');

        expect(builder).toBeInstanceOf(DosageBuilder);
      });

      it('should allow overwriting properties', () => {
        const dosage = new DosageBuilder()
          .setText('First')
          .setText('Second')
          .build();

        expect(dosage.text).toBe('Second');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const dosage = new DosageBuilder()
          .setId('dosage-1')
          .setText('Test')
          .build();

        expect(dosage.id).toBe('dosage-1');
      });

      it('should add extension from ElementBuilder', () => {
        const dosage = new DosageBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setText('Test')
          .build();

        expect(dosage.extension).toHaveLength(1);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const dosage = new DosageBuilder()
          .setText('Test dosage')
          .setTiming({ repeat: { frequency: 1, period: 1, periodUnit: 'd' } })
          .build();

        const json = dosage.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new DosageBuilder()
          .setText('Test')
          .setSequence(1)
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
    it('should work in medication request scenario', () => {
      const medicationDosage = new DosageBuilder()
        .setSequence(1)
        .setText('Take 1 tablet by mouth every morning')
        .setTiming({
          repeat: {
            frequency: 1,
            period: 1,
            periodUnit: 'd',
            when: ['MORN'],
          },
        })
        .setRoute({
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '26643006',
              display: 'Oral route',
            },
          ],
        })
        .addDoseAndRate({
          type: { coding: [{ code: 'ordered' }] },
          doseQuantity: { value: 1, unit: 'tablet' },
        })
        .build();

      expect(medicationDosage.sequence).toBe(1);
      expect(medicationDosage.timing?.repeat?.when).toContain('MORN');

      const json = medicationDosage.toJSON();
      const restored = Dosage.fromJSON(json);

      expect(restored.route?.coding?.[0].code).toBe('26643006');
    });

    it('should work in PRN medication scenario', () => {
      const prnDosage = new Dosage(dosages.asNeededBoolean);

      expect(prnDosage.asNeededBoolean).toBe(true);
      expect(prnDosage.patientInstruction).toBeDefined();
    });

    it('should work in topical medication scenario', () => {
      const topicalDosage = new Dosage(dosages.withSite);

      expect(topicalDosage.site?.coding?.[0].display).toBe('Skin structure');
      expect(topicalDosage.route?.coding?.[0].display).toBe('Topical route');
    });

    it('should handle dosage modification', () => {
      const original = new Dosage(dosages.simple);

      const updated = original.with({
        timing: {
          repeat: {
            frequency: 2,
            period: 1,
            periodUnit: 'd',
          },
        },
      });

      expect(updated.timing?.repeat?.frequency).toBe(2);
      expect(original.timing?.repeat?.frequency).toBe(1);
    });

    it('should work in complex multi-dose scenario', () => {
      const complexDosage = new DosageBuilder()
        .setText('500mg IV every 6 hours for 7 days')
        .setTiming({
          repeat: {
            boundsDuration: { value: 7, unit: 'd' },
            frequency: 1,
            period: 6,
            periodUnit: 'h',
          },
        })
        .setRoute({
          coding: [{ code: '47625008', display: 'Intravenous route' }],
        })
        .addDoseAndRate({
          doseQuantity: { value: 500, unit: 'mg' },
          rateQuantity: { value: 100, unit: 'mL/h' },
        })
        .setMaxDosePerPeriod({
          numerator: { value: 2000, unit: 'mg' },
          denominator: { value: 1, unit: 'd' },
        })
        .build();

      expect(complexDosage.timing?.repeat?.boundsDuration?.value).toBe(7);
      expect(complexDosage.doseAndRate?.[0].rateQuantity?.value).toBe(100);
    });

    it('should work in tapered dose scenario', () => {
      const taperedDoses = [
        new DosageBuilder()
          .setSequence(1)
          .setText('Week 1: 40mg daily')
          .addDoseAndRate({ doseQuantity: { value: 40, unit: 'mg' } })
          .build(),
        new DosageBuilder()
          .setSequence(2)
          .setText('Week 2: 30mg daily')
          .addDoseAndRate({ doseQuantity: { value: 30, unit: 'mg' } })
          .build(),
        new DosageBuilder()
          .setSequence(3)
          .setText('Week 3: 20mg daily')
          .addDoseAndRate({ doseQuantity: { value: 20, unit: 'mg' } })
          .build(),
      ];

      expect(taperedDoses).toHaveLength(3);
      expect(taperedDoses[0].doseAndRate?.[0].doseQuantity?.value).toBe(40);
      expect(taperedDoses[2].doseAndRate?.[0].doseQuantity?.value).toBe(20);
    });
  });
});
