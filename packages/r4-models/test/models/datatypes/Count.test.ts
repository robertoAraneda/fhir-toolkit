/**
 * Count Model and Builder Tests
 *
 * Tests for the Count datatype class and its builder.
 * Count represents a measured amount as a whole number.
 */

import { describe, it, expect } from 'vitest';
import { Count, CountBuilder } from '../../../src/index.js';
import type { ICount } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const counts = {
  simple: {
    value: 5,
    unit: 'tablets',
  } as ICount,
  ucumComplete: {
    value: 30,
    unit: '{tablets}',
    system: 'http://unitsofmeasure.org',
    code: '{tbl}',
  } as ICount,
  doses: {
    value: 10,
    unit: 'doses',
    system: 'http://unitsofmeasure.org',
    code: '{dose}',
  } as ICount,
  refills: {
    value: 3,
    unit: 'refills',
  } as ICount,
  lessThan: {
    value: 10,
    comparator: '<',
    unit: 'capsules',
  } as ICount,
  greaterThan: {
    value: 5,
    comparator: '>',
    unit: 'tablets',
  } as ICount,
};

describe('Count', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const count = new Count({});
        expect(count).toBeInstanceOf(Count);
        expect(count.value).toBeUndefined();
        expect(count.unit).toBeUndefined();
      });

      it('should create simple count', () => {
        const count = new Count(counts.simple);
        expect(count.value).toBe(5);
        expect(count.unit).toBe('tablets');
      });

      it('should create complete UCUM count', () => {
        const count = new Count(counts.ucumComplete);
        expect(count.value).toBe(30);
        expect(count.unit).toBe('{tablets}');
        expect(count.system).toBe('http://unitsofmeasure.org');
        expect(count.code).toBe('{tbl}');
      });

      it('should create dose count', () => {
        const count = new Count(counts.doses);
        expect(count.value).toBe(10);
        expect(count.code).toBe('{dose}');
      });

      it('should create refill count', () => {
        const count = new Count(counts.refills);
        expect(count.value).toBe(3);
        expect(count.unit).toBe('refills');
      });

      it('should create count with less than comparator', () => {
        const count = new Count(counts.lessThan);
        expect(count.value).toBe(10);
        expect(count.comparator).toBe('<');
      });

      it('should create count with greater than comparator', () => {
        const count = new Count(counts.greaterThan);
        expect(count.value).toBe(5);
        expect(count.comparator).toBe('>');
      });

      it('should handle all comparator types', () => {
        const comparators = ['<', '<=', '>=', '>'] as const;
        comparators.forEach((comparator) => {
          const count = new Count({
            value: 10,
            comparator,
            unit: 'items',
          });
          expect(count.comparator).toBe(comparator);
        });
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const count = new Count(counts.ucumComplete);
        const json = count.toJSON();

        expect(json.value).toBe(30);
        expect(json.unit).toBe('{tablets}');
        expect(json.system).toBe('http://unitsofmeasure.org');
        expect(json.code).toBe('{tbl}');
      });

      it('should omit undefined properties in JSON', () => {
        const count = new Count({ value: 5 });
        const json = count.toJSON();

        expect(json.value).toBe(5);
        expect(json).not.toHaveProperty('unit');
        expect(json).not.toHaveProperty('system');
        expect(json).not.toHaveProperty('code');
        expect(json).not.toHaveProperty('comparator');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Count(counts.ucumComplete);
        expectSerializationRoundtrip(original, Count);
      });

      it('should preserve comparator in JSON', () => {
        const count = new Count(counts.lessThan);
        const json = count.toJSON();

        expect(json.comparator).toBe('<');
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: ICount = {
          value: 20,
          unit: 'pills',
          system: 'http://unitsofmeasure.org',
          code: '{pill}',
        };
        const count = Count.fromJSON(json);

        expect(count).toBeInstanceOf(Count);
        expect(count.value).toBe(20);
        expect(count.unit).toBe('pills');
      });

      it('should create identical instance from JSON', () => {
        const original = new Count(counts.ucumComplete);
        const json = original.toJSON();
        const restored = Count.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Count({ value: 5, unit: 'tablets' });
        const updated = original.with({ value: 10 });

        expect(updated).not.toBe(original);
        expect(updated.value).toBe(10);
        expect(updated.unit).toBe('tablets');
        expect(original.value).toBe(5);
      });

      it('should allow changing multiple properties with .with()', () => {
        const original = new Count(counts.simple);
        const updated = original.with({
          value: 10,
          unit: 'capsules',
        });

        expect(updated.value).toBe(10);
        expect(updated.unit).toBe('capsules');
        expect(original.value).toBe(5);
      });

      it('should apply transform function correctly', () => {
        const count = new Count({ value: 5, unit: 'tablets' });
        const doubled = count.applyTransform((data) => ({
          value: (data.value ?? 0) * 2,
        }));

        expect(doubled.value).toBe(10);
        expect(count.value).toBe(5);
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Count(counts.ucumComplete);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should clone all properties', () => {
        const original = new Count(counts.lessThan);
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
        const count = new Count(counts.simple);
        const str = count.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Count');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _value extension', () => {
        const count = new Count({
          value: 10,
          _value: {
            extension: [
              { url: 'http://example.org/precision', valueInteger: 0 },
            ],
          },
        });

        expect(count._value?.extension?.[0]?.valueInteger).toBe(0);
      });

      it('should serialize extension properties', () => {
        const count = new Count({
          value: 10,
          unit: 'tablets',
          _unit: {
            extension: [{ url: 'http://example.org', valueBoolean: true }],
          },
        });
        const json = count.toJSON();

        expect(json._unit?.extension?.[0]?.valueBoolean).toBe(true);
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const count = new Count({
          id: 'count-1',
          value: 10,
          unit: 'tablets',
        });

        expect(count.id).toBe('count-1');
      });

      it('should handle extension property', () => {
        const count = new Count({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          value: 10,
        });

        expect(count.extension).toHaveLength(1);
        expect(count.extension?.[0]?.url).toBe('http://example.org/ext');
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const count = new CountBuilder().build();
        expect(count).toBeInstanceOf(Count);
      });

      it('should build with value only', () => {
        const count = new CountBuilder()
          .setValue(5)
          .build();

        expect(count.value).toBe(5);
      });

      it('should build with all properties', () => {
        const count = new CountBuilder()
          .setValue(30)
          .setUnit('{tablets}')
          .setSystem('http://unitsofmeasure.org')
          .setCode('{tbl}')
          .build();

        expect(count.value).toBe(30);
        expect(count.unit).toBe('{tablets}');
        expect(count.system).toBe('http://unitsofmeasure.org');
        expect(count.code).toBe('{tbl}');
      });

      it('should build with comparator', () => {
        const count = new CountBuilder()
          .setValue(10)
          .setComparator('<')
          .setUnit('capsules')
          .build();

        expect(count.value).toBe(10);
        expect(count.comparator).toBe('<');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new CountBuilder()
          .setValue(10)
          .setUnit('tablets')
          .setSystem('http://unitsofmeasure.org');

        expect(builder).toBeInstanceOf(CountBuilder);
      });

      it('should allow overwriting properties', () => {
        const count = new CountBuilder()
          .setValue(5)
          .setValue(10)
          .build();

        expect(count.value).toBe(10);
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const count = new CountBuilder()
          .setId('count-1')
          .setValue(10)
          .build();

        expect(count.id).toBe('count-1');
      });

      it('should add extension from ElementBuilder', () => {
        const count = new CountBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setValue(10)
          .build();

        expect(count.extension).toHaveLength(1);
        expect(count.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });

      it('should accumulate multiple extensions', () => {
        const count = new CountBuilder()
          .addExtension({ url: 'http://example.org/ext1', valueString: 'one' })
          .addExtension({ url: 'http://example.org/ext2', valueInteger: 2 })
          .build();

        expect(count.extension).toHaveLength(2);
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new CountBuilder().setValue(5);
        const first = builder.build();

        builder.setValue(10);
        const second = builder.build();

        expect(first.value).toBe(5);
        expect(second.value).toBe(10);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const count = new CountBuilder()
          .setValue(20)
          .setUnit('tablets')
          .setSystem('http://unitsofmeasure.org')
          .setCode('{tbl}')
          .build();

        const json = count.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new CountBuilder()
          .setValue(10)
          .setUnit('tablets')
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
    it('should work in medication dispense scenario', () => {
      const dispenseQuantity = new CountBuilder()
        .setValue(30)
        .setUnit('{tablets}')
        .setSystem('http://unitsofmeasure.org')
        .setCode('{tbl}')
        .build();

      expect(dispenseQuantity.value).toBe(30);
      expect(dispenseQuantity.unit).toBe('{tablets}');

      const json = dispenseQuantity.toJSON();
      const restored = Count.fromJSON(json);

      expect(restored.value).toBe(30);
    });

    it('should work in prescription refills scenario', () => {
      const refillsRemaining = new Count({
        value: 3,
        unit: 'refills',
      });

      expect(refillsRemaining.value).toBe(3);
    });

    it('should work in supply request scenario', () => {
      const supplyCount = new CountBuilder()
        .setValue(100)
        .setUnit('units')
        .build();

      expect(supplyCount.value).toBe(100);
    });

    it('should handle count decrement', () => {
      const original = new Count(counts.refills);

      const afterRefill = original.with({
        value: (original.value ?? 0) - 1,
      });

      expect(afterRefill.value).toBe(2);
      expect(original.value).toBe(3);
    });

    it('should handle minimum count constraint', () => {
      const minCount = new CountBuilder()
        .setValue(5)
        .setComparator('>=')
        .setUnit('items')
        .build();

      expect(minCount.comparator).toBe('>=');
      expect(minCount.value).toBe(5);
    });

    it('should handle maximum count constraint', () => {
      const maxCount = new CountBuilder()
        .setValue(10)
        .setComparator('<=')
        .setUnit('doses')
        .build();

      expect(maxCount.comparator).toBe('<=');
      expect(maxCount.value).toBe(10);
    });

    it('should work in inventory tracking', () => {
      const inventoryItems = [
        new Count({ value: 100, unit: 'tablets' }),
        new Count({ value: 50, unit: 'capsules' }),
        new Count({ value: 25, unit: 'vials' }),
      ];

      expect(inventoryItems).toHaveLength(3);
      expect(inventoryItems[0].value).toBe(100);
      expect(inventoryItems[1].value).toBe(50);
      expect(inventoryItems[2].value).toBe(25);
    });

    it('should handle count multiplication', () => {
      const baseCount = new Count({ value: 5, unit: 'tablets' });

      // Double the count
      const doubledCount = baseCount.applyTransform((data) => ({
        value: (data.value ?? 0) * 2,
      }));

      expect(doubledCount.value).toBe(10);
      expect(baseCount.value).toBe(5);
    });
  });
});
