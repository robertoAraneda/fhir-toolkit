/**
 * Period Model and Builder Tests
 *
 * Tests for the Period datatype class and its builder.
 */

import { describe, it, expect } from 'vitest';
import { Period, PeriodBuilder } from '../../../src/index.js';
import type { IPeriod } from '@fhir-toolkit/r4-types';
import { periods } from '../../helpers/fixtures.js';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

describe('Period', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const period = new Period({});
        expect(period).toBeInstanceOf(Period);
        expect(period.start).toBeUndefined();
        expect(period.end).toBeUndefined();
      });

      it('should create instance with start only', () => {
        const period = new Period({ start: '2024-01-01' });
        expect(period.start).toBe('2024-01-01');
        expect(period.end).toBeUndefined();
      });

      it('should create instance with end only', () => {
        const period = new Period({ end: '2024-12-31' });
        expect(period.start).toBeUndefined();
        expect(period.end).toBe('2024-12-31');
      });

      it('should create instance with start and end', () => {
        const period = new Period(periods.year2024);
        expect(period.start).toBe('2024-01-01');
        expect(period.end).toBe('2024-12-31');
      });

      it('should create instance with datetime values', () => {
        const period = new Period(periods.hospitalization);
        expect(period.start).toBe('2024-01-15T08:00:00Z');
        expect(period.end).toBe('2024-01-20T14:00:00Z');
      });

      it('should create ongoing period', () => {
        const period = new Period(periods.ongoing);
        expect(period.start).toBe('2020-06-15');
        expect(period.end).toBeUndefined();
      });
    });

    describe('Date Formats', () => {
      it('should handle date only (YYYY-MM-DD)', () => {
        const period = new Period({
          start: '2024-01-15',
          end: '2024-01-20',
        });
        expect(period.start).toBe('2024-01-15');
        expect(period.end).toBe('2024-01-20');
      });

      it('should handle year-month (YYYY-MM)', () => {
        const period = new Period({
          start: '2024-01',
          end: '2024-06',
        });
        expect(period.start).toBe('2024-01');
        expect(period.end).toBe('2024-06');
      });

      it('should handle year only (YYYY)', () => {
        const period = new Period({
          start: '2020',
          end: '2024',
        });
        expect(period.start).toBe('2020');
        expect(period.end).toBe('2024');
      });

      it('should handle datetime with timezone', () => {
        const period = new Period({
          start: '2024-01-15T08:00:00+01:00',
          end: '2024-01-15T17:00:00+01:00',
        });
        expect(period.start).toBe('2024-01-15T08:00:00+01:00');
        expect(period.end).toBe('2024-01-15T17:00:00+01:00');
      });

      it('should handle datetime with milliseconds', () => {
        const period = new Period({
          start: '2024-01-15T08:00:00.123Z',
          end: '2024-01-15T17:00:00.456Z',
        });
        expect(period.start).toBe('2024-01-15T08:00:00.123Z');
        expect(period.end).toBe('2024-01-15T17:00:00.456Z');
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const period = new Period(periods.year2024);
        const json = period.toJSON();

        expect(json.start).toBe('2024-01-01');
        expect(json.end).toBe('2024-12-31');
      });

      it('should omit undefined properties in JSON', () => {
        const period = new Period({ start: '2024-01-01' });
        const json = period.toJSON();

        expect(json.start).toBe('2024-01-01');
        expect(json).not.toHaveProperty('end');

        // Verify no undefined values in serialized JSON
        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Period(periods.hospitalization);
        expectSerializationRoundtrip(original, Period);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IPeriod = {
          start: '2024-01-01',
          end: '2024-12-31',
        };
        const period = Period.fromJSON(json);

        expect(period).toBeInstanceOf(Period);
        expect(period.start).toBe('2024-01-01');
        expect(period.end).toBe('2024-12-31');
      });

      it('should create identical instance from JSON', () => {
        const original = new Period(periods.hospitalization);
        const json = original.toJSON();
        const restored = Period.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Period({ start: '2024-01-01', end: '2024-06-30' });
        const updated = original.with({ end: '2024-12-31' });

        expect(updated).not.toBe(original);
        expect(updated.end).toBe('2024-12-31');
        expect(updated.start).toBe('2024-01-01'); // Preserved from original
        expect(original.end).toBe('2024-06-30'); // Original unchanged
      });

      it('should allow changing both properties with .with()', () => {
        const original = new Period({ start: '2024-01-01', end: '2024-06-30' });
        const updated = original.with({
          start: '2024-07-01',
          end: '2024-12-31',
        });

        expect(updated.start).toBe('2024-07-01');
        expect(updated.end).toBe('2024-12-31');
        expect(original.start).toBe('2024-01-01');
        expect(original.end).toBe('2024-06-30');
      });

      it('should allow removing end to make ongoing', () => {
        const original = new Period({ start: '2024-01-01', end: '2024-12-31' });
        const updated = original.with({ end: undefined });

        expect(updated.start).toBe('2024-01-01');
        expect(updated.end).toBeUndefined();
      });

      it('should apply transform function correctly', () => {
        const period = new Period({ start: '2024-01-01', end: '2024-12-31' });
        const transformed = period.applyTransform((data) => ({
          start: data.start?.replace('2024', '2025'),
          end: data.end?.replace('2024', '2025'),
        }));

        expect(transformed.start).toBe('2025-01-01');
        expect(transformed.end).toBe('2025-12-31');
        expect(period.start).toBe('2024-01-01'); // Original unchanged
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Period(periods.hospitalization);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should clone all properties', () => {
        const original = new Period({
          start: '2024-01-15T08:00:00Z',
          end: '2024-01-20T14:00:00Z',
        });
        const cloned = original.clone();

        expect(cloned.start).toBe(original.start);
        expect(cloned.end).toBe(original.end);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const period = new Period({ start: '2024-01-01' });
        const str = period.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Period');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _start extension', () => {
        const period = new Period({
          start: '2024-01-01',
          _start: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'approximate' },
            ],
          },
        });

        expect(period._start?.extension?.[0]?.valueString).toBe('approximate');
      });

      it('should handle _end extension', () => {
        const period = new Period({
          end: '2024-12-31',
          _end: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'estimated' },
            ],
          },
        });

        expect(period._end?.extension?.[0]?.valueString).toBe('estimated');
      });

      it('should serialize extension properties', () => {
        const period = new Period({
          start: '2024-01-01',
          _start: {
            id: 'start-ext',
            extension: [{ url: 'http://example.org', valueBoolean: true }],
          },
        });
        const json = period.toJSON();

        expect(json._start?.id).toBe('start-ext');
        expect(json._start?.extension?.[0]?.valueBoolean).toBe(true);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const period = new PeriodBuilder().build();
        expect(period).toBeInstanceOf(Period);
      });

      it('should build with start only', () => {
        const period = new PeriodBuilder()
          .setStart('2024-01-01')
          .build();

        expect(period.start).toBe('2024-01-01');
        expect(period.end).toBeUndefined();
      });

      it('should build with end only', () => {
        const period = new PeriodBuilder()
          .setEnd('2024-12-31')
          .build();

        expect(period.start).toBeUndefined();
        expect(period.end).toBe('2024-12-31');
      });

      it('should build with both start and end', () => {
        const period = new PeriodBuilder()
          .setStart('2024-01-01')
          .setEnd('2024-12-31')
          .build();

        expect(period.start).toBe('2024-01-01');
        expect(period.end).toBe('2024-12-31');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new PeriodBuilder()
          .setStart('2024-01-01')
          .setEnd('2024-12-31');

        expect(builder).toBeInstanceOf(PeriodBuilder);
      });

      it('should allow overwriting properties', () => {
        const period = new PeriodBuilder()
          .setStart('2024-01-01')
          .setStart('2024-07-01')
          .build();

        expect(period.start).toBe('2024-07-01');
      });
    });

    describe('Common Period Patterns', () => {
      it('should build full year period', () => {
        const period = new PeriodBuilder()
          .setStart('2024-01-01')
          .setEnd('2024-12-31')
          .build();

        expect(period.start).toBe('2024-01-01');
        expect(period.end).toBe('2024-12-31');
      });

      it('should build quarter period', () => {
        const period = new PeriodBuilder()
          .setStart('2024-01-01')
          .setEnd('2024-03-31')
          .build();

        expect(period.start).toBe('2024-01-01');
        expect(period.end).toBe('2024-03-31');
      });

      it('should build hospitalization period', () => {
        const period = new PeriodBuilder()
          .setStart('2024-01-15T08:00:00Z')
          .setEnd('2024-01-20T14:00:00Z')
          .build();

        expect(period.start).toBe('2024-01-15T08:00:00Z');
        expect(period.end).toBe('2024-01-20T14:00:00Z');
      });

      it('should build ongoing period', () => {
        const period = new PeriodBuilder()
          .setStart('2020-06-15')
          .build();

        expect(period.start).toBe('2020-06-15');
        expect(period.end).toBeUndefined();
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const period = new PeriodBuilder()
          .setId('period-1')
          .setStart('2024-01-01')
          .build();

        expect(period.id).toBe('period-1');
      });

      it('should add extension from ElementBuilder', () => {
        const period = new PeriodBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setStart('2024-01-01')
          .build();

        expect(period.extension).toHaveLength(1);
        expect(period.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });

      it('should accumulate multiple extensions', () => {
        const period = new PeriodBuilder()
          .addExtension({ url: 'http://example.org/ext1', valueString: 'one' })
          .addExtension({ url: 'http://example.org/ext2', valueInteger: 2 })
          .build();

        expect(period.extension).toHaveLength(2);
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new PeriodBuilder().setStart('2024-01-01');
        const first = builder.build();

        builder.setStart('2024-07-01');
        const second = builder.build();

        expect(first.start).toBe('2024-01-01');
        expect(second.start).toBe('2024-07-01');
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const period = new PeriodBuilder()
          .setStart('2024-01-01')
          .setEnd('2024-12-31')
          .build();

        const json = period.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new PeriodBuilder()
          .setStart('2024-01-01')
          .setEnd('2024-12-31')
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
    it('should work in typical encounter period scenario', () => {
      // Create encounter period
      const encounterPeriod = new PeriodBuilder()
        .setStart('2024-01-15T08:30:00Z')
        .setEnd('2024-01-15T09:15:00Z')
        .build();

      expect(encounterPeriod.start).toBe('2024-01-15T08:30:00Z');
      expect(encounterPeriod.end).toBe('2024-01-15T09:15:00Z');

      // Serialize and restore
      const json = encounterPeriod.toJSON();
      const restored = Period.fromJSON(json);

      expect(restored.start).toBe('2024-01-15T08:30:00Z');
      expect(restored.end).toBe('2024-01-15T09:15:00Z');
    });

    it('should handle condition onset period', () => {
      // Condition started, still ongoing
      const conditionPeriod = new Period({
        start: '2020-06-15',
      });

      expect(conditionPeriod.start).toBe('2020-06-15');
      expect(conditionPeriod.end).toBeUndefined();

      // Condition resolved
      const resolvedPeriod = conditionPeriod.with({ end: '2024-01-20' });

      expect(resolvedPeriod.end).toBe('2024-01-20');
      expect(resolvedPeriod.start).toBe('2020-06-15');
      expect(conditionPeriod.end).toBeUndefined();
    });

    it('should handle identifier validity period', () => {
      const validityPeriod = new PeriodBuilder()
        .setStart('2024-01-01')
        .setEnd('2024-12-31')
        .build();

      // Extend validity
      const extendedPeriod = validityPeriod.with({ end: '2025-12-31' });

      expect(extendedPeriod.start).toBe('2024-01-01');
      expect(extendedPeriod.end).toBe('2025-12-31');
    });

    it('should handle coverage period', () => {
      // Insurance coverage period
      const coveragePeriod = new Period({
        start: '2024-01-01',
        end: '2024-12-31',
      });

      expect(coveragePeriod.start).toBe('2024-01-01');
      expect(coveragePeriod.end).toBe('2024-12-31');

      const json = coveragePeriod.toJSON();
      expectNoUndefinedInJSON(json);
    });
  });
});
