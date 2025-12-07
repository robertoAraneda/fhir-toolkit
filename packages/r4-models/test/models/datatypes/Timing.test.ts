/**
 * Timing Model and Builder Tests
 *
 * Tests for the Timing datatype class and its builder.
 * Timing specifies an event that may occur multiple times.
 */

import { describe, it, expect } from 'vitest';
import { Timing, TimingBuilder } from '../../../src/index.js';
import type { ITiming } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const timings = {
  simple: {
    event: ['2024-01-15T08:00:00Z'],
  } as ITiming,
  bidDaily: {
    repeat: {
      frequency: 2,
      period: 1,
      periodUnit: 'd',
    },
    code: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation',
          code: 'BID',
          display: 'twice a day',
        },
      ],
    },
  } as ITiming,
  tidMeals: {
    repeat: {
      frequency: 3,
      period: 1,
      periodUnit: 'd',
      when: ['AC'],
    },
    code: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation',
          code: 'TID',
          display: 'three times a day',
        },
      ],
    },
  } as ITiming,
  everyEightHours: {
    repeat: {
      frequency: 1,
      period: 8,
      periodUnit: 'h',
    },
  } as ITiming,
  weeklyOnMonday: {
    repeat: {
      frequency: 1,
      period: 1,
      periodUnit: 'wk',
      dayOfWeek: ['mon'],
    },
  } as ITiming,
  complexSchedule: {
    event: ['2024-01-15T08:00:00Z', '2024-01-15T20:00:00Z'],
    repeat: {
      boundsPeriod: {
        start: '2024-01-01',
        end: '2024-12-31',
      },
      frequency: 2,
      period: 1,
      periodUnit: 'd',
      timeOfDay: ['08:00:00', '20:00:00'],
    },
  } as ITiming,
};

describe('Timing', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const timing = new Timing({});
        expect(timing).toBeInstanceOf(Timing);
        expect(timing.event).toBeUndefined();
        expect(timing.repeat).toBeUndefined();
      });

      it('should create simple timing with event', () => {
        const timing = new Timing(timings.simple);
        expect(timing.event).toHaveLength(1);
        expect(timing.event?.[0]).toBe('2024-01-15T08:00:00Z');
      });

      it('should create BID timing', () => {
        const timing = new Timing(timings.bidDaily);
        expect(timing.repeat?.frequency).toBe(2);
        expect(timing.repeat?.period).toBe(1);
        expect(timing.repeat?.periodUnit).toBe('d');
        expect(timing.code?.coding?.[0].code).toBe('BID');
      });

      it('should create TID timing with meals', () => {
        const timing = new Timing(timings.tidMeals);
        expect(timing.repeat?.frequency).toBe(3);
        expect(timing.repeat?.when).toContain('AC');
        expect(timing.code?.coding?.[0].code).toBe('TID');
      });

      it('should create every 8 hours timing', () => {
        const timing = new Timing(timings.everyEightHours);
        expect(timing.repeat?.frequency).toBe(1);
        expect(timing.repeat?.period).toBe(8);
        expect(timing.repeat?.periodUnit).toBe('h');
      });

      it('should create weekly timing', () => {
        const timing = new Timing(timings.weeklyOnMonday);
        expect(timing.repeat?.periodUnit).toBe('wk');
        expect(timing.repeat?.dayOfWeek).toContain('mon');
      });

      it('should create complex schedule', () => {
        const timing = new Timing(timings.complexSchedule);
        expect(timing.event).toHaveLength(2);
        expect(timing.repeat?.boundsPeriod?.start).toBe('2024-01-01');
        expect(timing.repeat?.timeOfDay).toHaveLength(2);
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const timing = new Timing(timings.bidDaily);
        const json = timing.toJSON();

        expect(json.repeat?.frequency).toBe(2);
        expect(json.code?.coding?.[0].code).toBe('BID');
      });

      it('should omit undefined properties in JSON', () => {
        const timing = new Timing(timings.simple);
        const json = timing.toJSON();

        expect(json.event).toBeDefined();
        expect(json).not.toHaveProperty('repeat');
        expect(json).not.toHaveProperty('code');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Timing(timings.complexSchedule);
        expectSerializationRoundtrip(original, Timing);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: ITiming = {
          repeat: {
            frequency: 4,
            period: 1,
            periodUnit: 'd',
          },
        };
        const timing = Timing.fromJSON(json);

        expect(timing).toBeInstanceOf(Timing);
        expect(timing.repeat?.frequency).toBe(4);
      });

      it('should create identical instance from JSON', () => {
        const original = new Timing(timings.bidDaily);
        const json = original.toJSON();
        const restored = Timing.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Timing(timings.simple);
        const updated = original.with({
          event: ['2024-01-16T08:00:00Z'],
        });

        expect(updated).not.toBe(original);
        expect(updated.event?.[0]).toBe('2024-01-16T08:00:00Z');
        expect(original.event?.[0]).toBe('2024-01-15T08:00:00Z');
      });

      it('should apply transform function correctly', () => {
        const timing = new Timing(timings.everyEightHours);
        const transformed = timing.applyTransform((data) => ({
          repeat: { ...data.repeat, period: 12 },
        }));

        expect(transformed.repeat?.period).toBe(12);
        expect(timing.repeat?.period).toBe(8);
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Timing(timings.complexSchedule);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned repeat', () => {
        const original = new Timing(timings.bidDaily);
        const cloned = original.clone();

        if (cloned.repeat) {
          cloned.repeat.frequency = 10;
        }

        expect(original.repeat?.frequency).toBe(2);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const timing = new Timing(timings.simple);
        const str = timing.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Timing');
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const timing = new Timing({
          id: 'timing-1',
          event: ['2024-01-15T08:00:00Z'],
        });

        expect(timing.id).toBe('timing-1');
      });

      it('should handle extension property', () => {
        const timing = new Timing({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          event: ['2024-01-15T08:00:00Z'],
        });

        expect(timing.extension).toHaveLength(1);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const timing = new TimingBuilder().build();
        expect(timing).toBeInstanceOf(Timing);
      });

      it('should build with single event', () => {
        const timing = new TimingBuilder()
          .addEvent('2024-01-15T08:00:00Z')
          .build();

        expect(timing.event).toHaveLength(1);
      });

      it('should build with multiple events', () => {
        const timing = new TimingBuilder()
          .addEvent('2024-01-15T08:00:00Z')
          .addEvent('2024-01-15T20:00:00Z')
          .build();

        expect(timing.event).toHaveLength(2);
      });

      it('should build with repeat', () => {
        const timing = new TimingBuilder()
          .setRepeat({
            frequency: 2,
            period: 1,
            periodUnit: 'd',
          })
          .build();

        expect(timing.repeat?.frequency).toBe(2);
      });

      it('should build with code', () => {
        const timing = new TimingBuilder()
          .setCode({
            coding: [{ code: 'BID' }],
          })
          .build();

        expect(timing.code?.coding?.[0].code).toBe('BID');
      });

      it('should build with all properties', () => {
        const timing = new TimingBuilder()
          .addEvent('2024-01-15T08:00:00Z')
          .setRepeat({
            frequency: 2,
            period: 1,
            periodUnit: 'd',
          })
          .setCode({
            coding: [{ code: 'BID', display: 'twice a day' }],
          })
          .build();

        expect(timing.event).toHaveLength(1);
        expect(timing.repeat?.frequency).toBe(2);
        expect(timing.code?.coding?.[0].code).toBe('BID');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new TimingBuilder()
          .addEvent('2024-01-15T08:00:00Z')
          .setRepeat({ frequency: 1, period: 1, periodUnit: 'd' });

        expect(builder).toBeInstanceOf(TimingBuilder);
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const timing = new TimingBuilder()
          .setId('timing-1')
          .addEvent('2024-01-15T08:00:00Z')
          .build();

        expect(timing.id).toBe('timing-1');
      });

      it('should add extension from ElementBuilder', () => {
        const timing = new TimingBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .build();

        expect(timing.extension).toHaveLength(1);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const timing = new TimingBuilder()
          .setRepeat({ frequency: 2, period: 1, periodUnit: 'd' })
          .build();

        const json = timing.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new TimingBuilder()
          .addEvent('2024-01-15T08:00:00Z')
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
    it('should work in medication dosage scenario', () => {
      const dosageTiming = new TimingBuilder()
        .setRepeat({
          frequency: 2,
          period: 1,
          periodUnit: 'd',
          when: ['MORN', 'EVE'],
        })
        .setCode({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation',
              code: 'BID',
              display: 'twice a day',
            },
          ],
          text: 'Take twice daily',
        })
        .build();

      expect(dosageTiming.repeat?.frequency).toBe(2);
      expect(dosageTiming.repeat?.when).toContain('MORN');

      const json = dosageTiming.toJSON();
      const restored = Timing.fromJSON(json);

      expect(restored.code?.text).toBe('Take twice daily');
    });

    it('should work in appointment scheduling scenario', () => {
      const appointmentTiming = new Timing({
        event: [
          '2024-01-15T09:00:00Z',
          '2024-01-22T09:00:00Z',
          '2024-01-29T09:00:00Z',
        ],
        repeat: {
          frequency: 1,
          period: 1,
          periodUnit: 'wk',
          count: 3,
        },
      });

      expect(appointmentTiming.event).toHaveLength(3);
      expect(appointmentTiming.repeat?.count).toBe(3);
    });

    it('should work in PRN (as needed) scenario', () => {
      const prnTiming = new TimingBuilder()
        .setRepeat({
          frequencyMax: 6,
          period: 1,
          periodUnit: 'd',
        })
        .setCode({
          text: 'As needed, up to 6 times daily',
        })
        .build();

      expect(prnTiming.repeat?.frequencyMax).toBe(6);
    });

    it('should handle timing modification', () => {
      const original = new Timing(timings.bidDaily);

      const updated = original.with({
        repeat: {
          ...original.repeat,
          frequency: 3,
        },
      });

      expect(updated.repeat?.frequency).toBe(3);
      expect(original.repeat?.frequency).toBe(2);
    });

    it('should work in infusion rate scenario', () => {
      const infusionTiming = new Timing({
        repeat: {
          duration: 2,
          durationUnit: 'h',
          frequency: 1,
          period: 8,
          periodUnit: 'h',
        },
      });

      expect(infusionTiming.repeat?.duration).toBe(2);
      expect(infusionTiming.repeat?.durationUnit).toBe('h');
    });
  });
});
