/**
 * TriggerDefinition Model and Builder Tests
 *
 * Tests for the TriggerDefinition datatype class and its builder.
 * TriggerDefinition describes a triggering event (named events, data events, or periodic).
 */

import { describe, it, expect } from 'vitest';
import { TriggerDefinition, TriggerDefinitionBuilder } from '../../../src/index.js';
import type { ITriggerDefinition } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const triggerDefinitions = {
  namedEvent: {
    type: 'named-event',
    name: 'patient-admission',
  } as ITriggerDefinition,
  periodic: {
    type: 'periodic',
    timingTiming: {
      repeat: {
        frequency: 1,
        period: 1,
        periodUnit: 'd',
      },
    },
  } as ITriggerDefinition,
  dataChanged: {
    type: 'data-changed',
    data: [
      {
        type: 'Observation',
        codeFilter: [
          {
            path: 'code',
            valueSet: 'http://example.org/ValueSet/vital-signs',
          },
        ],
      },
    ],
  } as ITriggerDefinition,
  dataAdded: {
    type: 'data-added',
    data: [
      {
        type: 'MedicationRequest',
        profile: ['http://hl7.org/fhir/StructureDefinition/MedicationRequest'],
      },
    ],
  } as ITriggerDefinition,
  dataModified: {
    type: 'data-modified',
    data: [
      {
        type: 'Patient',
        mustSupport: ['deceased'],
      },
    ],
    condition: {
      language: 'text/fhirpath',
      expression: '%previous.deceased != %current.deceased',
    },
  } as ITriggerDefinition,
  dataRemoved: {
    type: 'data-removed',
    name: 'allergy-removed',
    data: [
      {
        type: 'AllergyIntolerance',
      },
    ],
  } as ITriggerDefinition,
  withTimingDate: {
    type: 'periodic',
    timingDate: '2024-01-01',
  } as ITriggerDefinition,
  withTimingDateTime: {
    type: 'periodic',
    timingDateTime: '2024-01-01T08:00:00Z',
  } as ITriggerDefinition,
  withTimingReference: {
    type: 'periodic',
    timingReference: {
      reference: 'Schedule/daily-report-schedule',
    },
  } as ITriggerDefinition,
  complex: {
    type: 'data-accessed',
    name: 'sensitive-data-access',
    data: [
      {
        type: 'Observation',
        codeFilter: [
          {
            path: 'code',
            code: [
              {
                system: 'http://loinc.org',
                code: '10337-4',
                display: 'HIV status',
              },
            ],
          },
        ],
      },
    ],
    condition: {
      language: 'text/cql',
      expression: 'AuditRequired',
    },
  } as ITriggerDefinition,
};

describe('TriggerDefinition', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const td = new TriggerDefinition({});
        expect(td).toBeInstanceOf(TriggerDefinition);
      });

      it('should create named event trigger', () => {
        const td = new TriggerDefinition(triggerDefinitions.namedEvent);
        expect(td.type).toBe('named-event');
        expect(td.name).toBe('patient-admission');
      });

      it('should create periodic trigger', () => {
        const td = new TriggerDefinition(triggerDefinitions.periodic);
        expect(td.type).toBe('periodic');
        expect(td.timingTiming?.repeat?.frequency).toBe(1);
      });

      it('should create data-changed trigger', () => {
        const td = new TriggerDefinition(triggerDefinitions.dataChanged);
        expect(td.type).toBe('data-changed');
        expect(td.data?.[0].type).toBe('Observation');
      });

      it('should create data-added trigger', () => {
        const td = new TriggerDefinition(triggerDefinitions.dataAdded);
        expect(td.type).toBe('data-added');
        expect(td.data?.[0].profile).toHaveLength(1);
      });

      it('should create data-modified trigger with condition', () => {
        const td = new TriggerDefinition(triggerDefinitions.dataModified);
        expect(td.type).toBe('data-modified');
        expect(td.condition?.expression).toContain('deceased');
      });

      it('should create data-removed trigger', () => {
        const td = new TriggerDefinition(triggerDefinitions.dataRemoved);
        expect(td.type).toBe('data-removed');
        expect(td.name).toBe('allergy-removed');
      });

      it('should create trigger with timing date', () => {
        const td = new TriggerDefinition(triggerDefinitions.withTimingDate);
        expect(td.timingDate).toBe('2024-01-01');
      });

      it('should create trigger with timing dateTime', () => {
        const td = new TriggerDefinition(triggerDefinitions.withTimingDateTime);
        expect(td.timingDateTime).toBe('2024-01-01T08:00:00Z');
      });

      it('should create trigger with timing reference', () => {
        const td = new TriggerDefinition(triggerDefinitions.withTimingReference);
        expect(td.timingReference?.reference).toBe('Schedule/daily-report-schedule');
      });

      it('should handle all trigger types', () => {
        const types = [
          'named-event',
          'periodic',
          'data-changed',
          'data-added',
          'data-modified',
          'data-removed',
          'data-accessed',
          'data-access-ended',
        ] as const;

        types.forEach((type) => {
          const td = new TriggerDefinition({ type });
          expect(td.type).toBe(type);
        });
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const td = new TriggerDefinition(triggerDefinitions.dataModified);
        const json = td.toJSON();

        expect(json.type).toBe('data-modified');
        expect(json.condition?.language).toBe('text/fhirpath');
      });

      it('should omit undefined properties in JSON', () => {
        const td = new TriggerDefinition(triggerDefinitions.namedEvent);
        const json = td.toJSON();

        expect(json.type).toBe('named-event');
        expect(json.name).toBe('patient-admission');
        expect(json).not.toHaveProperty('data');
        expect(json).not.toHaveProperty('condition');
        expect(json).not.toHaveProperty('timingTiming');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new TriggerDefinition(triggerDefinitions.complex);
        expectSerializationRoundtrip(original, TriggerDefinition);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: ITriggerDefinition = {
          type: 'named-event',
          name: 'test-event',
        };
        const td = TriggerDefinition.fromJSON(json);

        expect(td).toBeInstanceOf(TriggerDefinition);
        expect(td.name).toBe('test-event');
      });

      it('should create identical instance from JSON', () => {
        const original = new TriggerDefinition(triggerDefinitions.dataModified);
        const json = original.toJSON();
        const restored = TriggerDefinition.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new TriggerDefinition(triggerDefinitions.namedEvent);
        const updated = original.with({ name: 'updated-event' });

        expect(updated).not.toBe(original);
        expect(updated.name).toBe('updated-event');
        expect(original.name).toBe('patient-admission');
      });

      it('should apply transform function correctly', () => {
        const td = new TriggerDefinition(triggerDefinitions.namedEvent);
        const transformed = td.applyTransform((data) => ({
          name: data.name?.toUpperCase(),
        }));

        expect(transformed.name).toBe('PATIENT-ADMISSION');
        expect(td.name).toBe('patient-admission');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new TriggerDefinition(triggerDefinitions.complex);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned data', () => {
        const original = new TriggerDefinition(triggerDefinitions.dataChanged);
        const cloned = original.clone();

        if (cloned.data?.[0]) {
          cloned.data[0].type = 'Patient';
        }

        expect(original.data?.[0].type).toBe('Observation');
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const td = new TriggerDefinition(triggerDefinitions.namedEvent);
        const str = td.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('TriggerDefinition');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _type extension', () => {
        const td = new TriggerDefinition({
          type: 'named-event',
          _type: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'type-info' },
            ],
          },
        });

        expect(td._type?.extension?.[0]?.valueString).toBe('type-info');
      });

      it('should handle _name extension', () => {
        const td = new TriggerDefinition({
          type: 'named-event',
          name: 'test',
          _name: {
            id: 'name-ext',
          },
        });

        expect(td._name?.id).toBe('name-ext');
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const td = new TriggerDefinition({
          id: 'td-1',
          type: 'named-event',
        });

        expect(td.id).toBe('td-1');
      });

      it('should handle extension property', () => {
        const td = new TriggerDefinition({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          type: 'named-event',
        });

        expect(td.extension).toHaveLength(1);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const td = new TriggerDefinitionBuilder().build();
        expect(td).toBeInstanceOf(TriggerDefinition);
      });

      it('should build with type', () => {
        const td = new TriggerDefinitionBuilder()
          .setType('named-event')
          .build();

        expect(td.type).toBe('named-event');
      });

      it('should build with name', () => {
        const td = new TriggerDefinitionBuilder()
          .setType('named-event')
          .setName('my-event')
          .build();

        expect(td.name).toBe('my-event');
      });

      it('should build with condition', () => {
        const td = new TriggerDefinitionBuilder()
          .setType('data-modified')
          .setCondition({
            language: 'text/fhirpath',
            expression: '%previous != %current',
          })
          .build();

        expect(td.condition?.language).toBe('text/fhirpath');
      });

      it('should build with data requirement', () => {
        const td = new TriggerDefinitionBuilder()
          .setType('data-added')
          .addData({
            type: 'Observation',
          })
          .build();

        expect(td.data?.[0].type).toBe('Observation');
      });
    });

    describe('Array Properties', () => {
      it('should add multiple data requirements', () => {
        const td = new TriggerDefinitionBuilder()
          .setType('data-changed')
          .addData({ type: 'Patient' })
          .addData({ type: 'Observation' })
          .build();

        expect(td.data).toHaveLength(2);
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new TriggerDefinitionBuilder()
          .setType('named-event')
          .setName('test');

        expect(builder).toBeInstanceOf(TriggerDefinitionBuilder);
      });

      it('should allow overwriting properties', () => {
        const td = new TriggerDefinitionBuilder()
          .setType('named-event')
          .setType('periodic')
          .build();

        expect(td.type).toBe('periodic');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const td = new TriggerDefinitionBuilder()
          .setId('td-1')
          .setType('named-event')
          .build();

        expect(td.id).toBe('td-1');
      });

      it('should add extension from ElementBuilder', () => {
        const td = new TriggerDefinitionBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setType('named-event')
          .build();

        expect(td.extension).toHaveLength(1);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const td = new TriggerDefinitionBuilder()
          .setType('data-changed')
          .addData({ type: 'Observation' })
          .build();

        const json = td.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new TriggerDefinitionBuilder()
          .setType('named-event')
          .setName('test')
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
    it('should work in plan definition trigger scenario', () => {
      const planTriggers = [
        new TriggerDefinitionBuilder()
          .setType('named-event')
          .setName('patient-view')
          .build(),
        new TriggerDefinitionBuilder()
          .setType('data-added')
          .addData({
            type: 'Condition',
            codeFilter: [{
              path: 'code',
              valueSet: 'http://example.org/ValueSet/diabetes-conditions',
            }],
          })
          .build(),
      ];

      expect(planTriggers).toHaveLength(2);
      expect(planTriggers[0].type).toBe('named-event');
      expect(planTriggers[1].data?.[0].type).toBe('Condition');
    });

    it('should work in CDS Hooks trigger scenario', () => {
      const cdsHookTrigger = new TriggerDefinition(triggerDefinitions.namedEvent);

      expect(cdsHookTrigger.type).toBe('named-event');
      expect(cdsHookTrigger.name).toBe('patient-admission');

      const json = cdsHookTrigger.toJSON();
      const restored = TriggerDefinition.fromJSON(json);

      expect(restored.name).toBe('patient-admission');
    });

    it('should work in subscription trigger scenario', () => {
      const subscriptionTrigger = new TriggerDefinitionBuilder()
        .setType('data-changed')
        .addData({
          type: 'Observation',
          profile: ['http://hl7.org/fhir/StructureDefinition/vitalsigns'],
        })
        .setCondition({
          language: 'text/fhirpath',
          expression: 'value.ofType(Quantity).value > 180',
        })
        .build();

      expect(subscriptionTrigger.condition?.expression).toContain('180');
    });

    it('should handle trigger update', () => {
      const original = new TriggerDefinition(triggerDefinitions.namedEvent);

      const updated = original.with({
        name: 'updated-admission-event',
      });

      expect(updated.name).toBe('updated-admission-event');
      expect(original.name).toBe('patient-admission');
    });

    it('should work in event-driven architecture scenario', () => {
      const eventTriggers = [
        new TriggerDefinitionBuilder()
          .setType('data-added')
          .setName('new-lab-result')
          .addData({ type: 'Observation' })
          .build(),
        new TriggerDefinitionBuilder()
          .setType('data-modified')
          .setName('patient-status-change')
          .addData({ type: 'Patient' })
          .setCondition({
            language: 'text/fhirpath',
            expression: '%previous.active != %current.active',
          })
          .build(),
        new TriggerDefinitionBuilder()
          .setType('data-removed')
          .setName('medication-discontinued')
          .addData({ type: 'MedicationRequest' })
          .build(),
      ];

      expect(eventTriggers.map((t) => t.type)).toEqual(['data-added', 'data-modified', 'data-removed']);
    });

    it('should work in periodic reporting scenario', () => {
      const periodicTrigger = new TriggerDefinition(triggerDefinitions.periodic);

      expect(periodicTrigger.type).toBe('periodic');
      expect(periodicTrigger.timingTiming?.repeat?.periodUnit).toBe('d');
    });

    it('should work in audit trigger scenario', () => {
      const auditTrigger = new TriggerDefinition(triggerDefinitions.complex);

      expect(auditTrigger.type).toBe('data-accessed');
      expect(auditTrigger.data?.[0].codeFilter?.[0].code?.[0].code).toBe('10337-4');
    });
  });
});
