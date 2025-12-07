/**
 * Duration Model and Builder Tests
 *
 * Tests for the Duration datatype class and its builder.
 */

import { describe, it, expect } from 'vitest';
import { Duration, DurationBuilder } from '../../../src/index.js';
import type { IDuration } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const durations = {
  simple: {
    value: 30,
    unit: 'min',
  } as IDuration,
  ucumComplete: {
    value: 2,
    unit: 'hours',
    system: 'http://unitsofmeasure.org',
    code: 'h',
  } as IDuration,
  lessThan: {
    value: 24,
    comparator: '<',
    unit: 'hours',
    system: 'http://unitsofmeasure.org',
    code: 'h',
  } as IDuration,
  days: {
    value: 7,
    unit: 'days',
    system: 'http://unitsofmeasure.org',
    code: 'd',
  } as IDuration,
  weeks: {
    value: 2,
    unit: 'weeks',
    system: 'http://unitsofmeasure.org',
    code: 'wk',
  } as IDuration,
  months: {
    value: 3,
    unit: 'months',
    system: 'http://unitsofmeasure.org',
    code: 'mo',
  } as IDuration,
};

describe('Duration', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const duration = new Duration({});
        expect(duration).toBeInstanceOf(Duration);
        expect(duration.value).toBeUndefined();
        expect(duration.unit).toBeUndefined();
      });

      it('should create simple duration', () => {
        const duration = new Duration(durations.simple);
        expect(duration.value).toBe(30);
        expect(duration.unit).toBe('min');
      });

      it('should create complete UCUM duration', () => {
        const duration = new Duration(durations.ucumComplete);
        expect(duration.value).toBe(2);
        expect(duration.unit).toBe('hours');
        expect(duration.system).toBe('http://unitsofmeasure.org');
        expect(duration.code).toBe('h');
      });

      it('should create duration with comparator', () => {
        const duration = new Duration(durations.lessThan);
        expect(duration.value).toBe(24);
        expect(duration.comparator).toBe('<');
        expect(duration.unit).toBe('hours');
      });

      it('should create duration in days', () => {
        const duration = new Duration(durations.days);
        expect(duration.value).toBe(7);
        expect(duration.code).toBe('d');
      });

      it('should create duration in weeks', () => {
        const duration = new Duration(durations.weeks);
        expect(duration.value).toBe(2);
        expect(duration.code).toBe('wk');
      });

      it('should create duration in months', () => {
        const duration = new Duration(durations.months);
        expect(duration.value).toBe(3);
        expect(duration.code).toBe('mo');
      });

      it('should create duration with all comparator types', () => {
        const comparators = ['<', '<=', '>=', '>'] as const;
        comparators.forEach((comparator) => {
          const duration = new Duration({
            value: 10,
            comparator,
            unit: 'min',
          });
          expect(duration.comparator).toBe(comparator);
        });
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const duration = new Duration(durations.ucumComplete);
        const json = duration.toJSON();

        expect(json.value).toBe(2);
        expect(json.unit).toBe('hours');
        expect(json.system).toBe('http://unitsofmeasure.org');
        expect(json.code).toBe('h');
      });

      it('should omit undefined properties in JSON', () => {
        const duration = new Duration({ value: 30 });
        const json = duration.toJSON();

        expect(json.value).toBe(30);
        expect(json).not.toHaveProperty('unit');
        expect(json).not.toHaveProperty('system');
        expect(json).not.toHaveProperty('code');
        expect(json).not.toHaveProperty('comparator');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Duration(durations.ucumComplete);
        expectSerializationRoundtrip(original, Duration);
      });

      it('should preserve comparator in JSON', () => {
        const duration = new Duration(durations.lessThan);
        const json = duration.toJSON();

        expect(json.comparator).toBe('<');
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IDuration = {
          value: 45,
          unit: 'min',
          system: 'http://unitsofmeasure.org',
          code: 'min',
        };
        const duration = Duration.fromJSON(json);

        expect(duration).toBeInstanceOf(Duration);
        expect(duration.value).toBe(45);
        expect(duration.unit).toBe('min');
      });

      it('should create identical instance from JSON', () => {
        const original = new Duration(durations.ucumComplete);
        const json = original.toJSON();
        const restored = Duration.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Duration({ value: 30, unit: 'min' });
        const updated = original.with({ value: 60 });

        expect(updated).not.toBe(original);
        expect(updated.value).toBe(60);
        expect(updated.unit).toBe('min');
        expect(original.value).toBe(30);
      });

      it('should allow changing multiple properties with .with()', () => {
        const original = new Duration(durations.simple);
        const updated = original.with({
          value: 2,
          unit: 'h',
          code: 'h',
        });

        expect(updated.value).toBe(2);
        expect(updated.unit).toBe('h');
        expect(updated.code).toBe('h');
        expect(original.value).toBe(30);
      });

      it('should apply transform function correctly', () => {
        const duration = new Duration({ value: 30, unit: 'min' });
        const doubled = duration.applyTransform((data) => ({
          value: (data.value ?? 0) * 2,
        }));

        expect(doubled.value).toBe(60);
        expect(duration.value).toBe(30);
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Duration(durations.ucumComplete);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should clone all properties', () => {
        const original = new Duration(durations.lessThan);
        const cloned = original.clone();

        expect(cloned.value).toBe(original.value);
        expect(cloned.comparator).toBe(original.comparator);
        expect(cloned.unit).toBe(original.unit);
        expect(cloned.system).toBe(original.system);
        expect(cloned.code).toBe(original.code);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const duration = new Duration(durations.simple);
        const str = duration.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Duration');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _value extension', () => {
        const duration = new Duration({
          value: 30,
          _value: {
            extension: [
              { url: 'http://example.org/precision', valueInteger: 2 },
            ],
          },
        });

        expect(duration._value?.extension?.[0]?.valueInteger).toBe(2);
      });

      it('should handle _comparator extension', () => {
        const duration = new Duration({
          value: 24,
          comparator: '<',
          _comparator: {
            id: 'comp-ext',
          },
        });

        expect(duration._comparator?.id).toBe('comp-ext');
      });

      it('should serialize extension properties', () => {
        const duration = new Duration({
          value: 30,
          unit: 'min',
          _unit: {
            extension: [{ url: 'http://example.org', valueBoolean: true }],
          },
        });
        const json = duration.toJSON();

        expect(json._unit?.extension?.[0]?.valueBoolean).toBe(true);
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const duration = new Duration({
          id: 'dur-1',
          value: 30,
          unit: 'min',
        });

        expect(duration.id).toBe('dur-1');
      });

      it('should handle extension property', () => {
        const duration = new Duration({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          value: 30,
        });

        expect(duration.extension).toHaveLength(1);
        expect(duration.extension?.[0]?.url).toBe('http://example.org/ext');
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const duration = new DurationBuilder().build();
        expect(duration).toBeInstanceOf(Duration);
      });

      it('should build with value only', () => {
        const duration = new DurationBuilder()
          .setValue(30)
          .build();

        expect(duration.value).toBe(30);
      });

      it('should build with all properties', () => {
        const duration = new DurationBuilder()
          .setValue(2)
          .setUnit('hours')
          .setSystem('http://unitsofmeasure.org')
          .setCode('h')
          .build();

        expect(duration.value).toBe(2);
        expect(duration.unit).toBe('hours');
        expect(duration.system).toBe('http://unitsofmeasure.org');
        expect(duration.code).toBe('h');
      });

      it('should build with comparator', () => {
        const duration = new DurationBuilder()
          .setValue(24)
          .setComparator('<')
          .setUnit('hours')
          .build();

        expect(duration.value).toBe(24);
        expect(duration.comparator).toBe('<');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new DurationBuilder()
          .setValue(30)
          .setUnit('min')
          .setSystem('http://unitsofmeasure.org');

        expect(builder).toBeInstanceOf(DurationBuilder);
      });

      it('should allow overwriting properties', () => {
        const duration = new DurationBuilder()
          .setValue(30)
          .setValue(60)
          .build();

        expect(duration.value).toBe(60);
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const duration = new DurationBuilder()
          .setId('dur-1')
          .setValue(30)
          .build();

        expect(duration.id).toBe('dur-1');
      });

      it('should add extension from ElementBuilder', () => {
        const duration = new DurationBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setValue(30)
          .build();

        expect(duration.extension).toHaveLength(1);
        expect(duration.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });

      it('should accumulate multiple extensions', () => {
        const duration = new DurationBuilder()
          .addExtension({ url: 'http://example.org/ext1', valueString: 'one' })
          .addExtension({ url: 'http://example.org/ext2', valueInteger: 2 })
          .build();

        expect(duration.extension).toHaveLength(2);
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new DurationBuilder().setValue(30);
        const first = builder.build();

        builder.setValue(60);
        const second = builder.build();

        expect(first.value).toBe(30);
        expect(second.value).toBe(60);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const duration = new DurationBuilder()
          .setValue(2)
          .setUnit('h')
          .setSystem('http://unitsofmeasure.org')
          .setCode('h')
          .build();

        const json = duration.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new DurationBuilder()
          .setValue(30)
          .setUnit('min')
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
    it('should work in medication administration scenario', () => {
      const infusionDuration = new DurationBuilder()
        .setValue(30)
        .setUnit('min')
        .setSystem('http://unitsofmeasure.org')
        .setCode('min')
        .build();

      expect(infusionDuration.value).toBe(30);
      expect(infusionDuration.unit).toBe('min');

      const json = infusionDuration.toJSON();
      const restored = Duration.fromJSON(json);

      expect(restored.value).toBe(30);
      expect(restored.code).toBe('min');
    });

    it('should work in procedure duration scenario', () => {
      const procedureDuration = new Duration({
        value: 2,
        unit: 'h',
        system: 'http://unitsofmeasure.org',
        code: 'h',
      });

      expect(procedureDuration.value).toBe(2);
      expect(procedureDuration.code).toBe('h');
    });

    it('should work in appointment duration scenario', () => {
      const appointmentSlot = new DurationBuilder()
        .setValue(15)
        .setUnit('min')
        .setSystem('http://unitsofmeasure.org')
        .setCode('min')
        .build();

      expect(appointmentSlot.value).toBe(15);
    });

    it('should handle duration modification', () => {
      const original = new Duration(durations.simple);

      const extended = original.with({
        value: 45,
      });

      expect(extended.value).toBe(45);
      expect(extended.unit).toBe('min');
      expect(original.value).toBe(30);
    });

    it('should handle treatment course duration', () => {
      const courseDuration = new DurationBuilder()
        .setValue(7)
        .setUnit('d')
        .setSystem('http://unitsofmeasure.org')
        .setCode('d')
        .build();

      // Double the course length
      const extendedCourse = courseDuration.applyTransform((data) => ({
        value: (data.value ?? 0) * 2,
      }));

      expect(extendedCourse.value).toBe(14);
      expect(courseDuration.value).toBe(7);
    });

    it('should handle maximum duration constraint', () => {
      const maxDuration = new Duration({
        value: 4,
        comparator: '<=',
        unit: 'h',
        system: 'http://unitsofmeasure.org',
        code: 'h',
      });

      expect(maxDuration.comparator).toBe('<=');
      expect(maxDuration.value).toBe(4);
    });

    it('should work in pregnancy duration scenario', () => {
      const gestationalAge = new DurationBuilder()
        .setValue(38)
        .setUnit('wk')
        .setSystem('http://unitsofmeasure.org')
        .setCode('wk')
        .build();

      expect(gestationalAge.value).toBe(38);
      expect(gestationalAge.code).toBe('wk');
    });
  });
});
