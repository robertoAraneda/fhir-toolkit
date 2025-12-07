/**
 * MoneyQuantity Model and Builder Tests
 *
 * Tests for the MoneyQuantity datatype class and its builder.
 * MoneyQuantity is a specialized Quantity for monetary values with currency.
 */

import { describe, it, expect } from 'vitest';
import { MoneyQuantity, MoneyQuantityBuilder } from '../../../src/index.js';
import type { IMoneyQuantity } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const moneyQuantities = {
  usd: {
    value: 100.50,
    unit: 'USD',
    system: 'urn:iso:std:iso:4217',
    code: 'USD',
  } as IMoneyQuantity,
  eur: {
    value: 85.25,
    unit: 'EUR',
    system: 'urn:iso:std:iso:4217',
    code: 'EUR',
  } as IMoneyQuantity,
  gbp: {
    value: 75.00,
    unit: 'GBP',
    system: 'urn:iso:std:iso:4217',
    code: 'GBP',
  } as IMoneyQuantity,
  withComparator: {
    value: 500,
    comparator: '<=',
    unit: 'USD',
    system: 'urn:iso:std:iso:4217',
    code: 'USD',
  } as IMoneyQuantity,
  jpy: {
    value: 10000,
    unit: 'JPY',
    system: 'urn:iso:std:iso:4217',
    code: 'JPY',
  } as IMoneyQuantity,
  chf: {
    value: 95.50,
    unit: 'CHF',
    system: 'urn:iso:std:iso:4217',
    code: 'CHF',
  } as IMoneyQuantity,
  largeAmount: {
    value: 1000000,
    unit: 'USD',
    system: 'urn:iso:std:iso:4217',
    code: 'USD',
  } as IMoneyQuantity,
};

describe('MoneyQuantity', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const mq = new MoneyQuantity({});
        expect(mq).toBeInstanceOf(MoneyQuantity);
      });

      it('should create USD money quantity', () => {
        const mq = new MoneyQuantity(moneyQuantities.usd);
        expect(mq.value).toBe(100.50);
        expect(mq.unit).toBe('USD');
        expect(mq.system).toBe('urn:iso:std:iso:4217');
        expect(mq.code).toBe('USD');
      });

      it('should create EUR money quantity', () => {
        const mq = new MoneyQuantity(moneyQuantities.eur);
        expect(mq.value).toBe(85.25);
        expect(mq.code).toBe('EUR');
      });

      it('should create GBP money quantity', () => {
        const mq = new MoneyQuantity(moneyQuantities.gbp);
        expect(mq.value).toBe(75.00);
        expect(mq.code).toBe('GBP');
      });

      it('should create money quantity with comparator', () => {
        const mq = new MoneyQuantity(moneyQuantities.withComparator);
        expect(mq.comparator).toBe('<=');
        expect(mq.value).toBe(500);
      });

      it('should create JPY money quantity', () => {
        const mq = new MoneyQuantity(moneyQuantities.jpy);
        expect(mq.value).toBe(10000);
        expect(mq.code).toBe('JPY');
      });

      it('should create large amount money quantity', () => {
        const mq = new MoneyQuantity(moneyQuantities.largeAmount);
        expect(mq.value).toBe(1000000);
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const mq = new MoneyQuantity(moneyQuantities.usd);
        const json = mq.toJSON();

        expect(json.value).toBe(100.50);
        expect(json.unit).toBe('USD');
        expect(json.system).toBe('urn:iso:std:iso:4217');
      });

      it('should omit undefined properties in JSON', () => {
        const mq = new MoneyQuantity(moneyQuantities.usd);
        const json = mq.toJSON();

        expect(json.value).toBeDefined();
        expect(json.unit).toBeDefined();
        expect(json).not.toHaveProperty('comparator');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new MoneyQuantity(moneyQuantities.withComparator);
        expectSerializationRoundtrip(original, MoneyQuantity);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IMoneyQuantity = {
          value: 250.75,
          unit: 'CAD',
          code: 'CAD',
        };
        const mq = MoneyQuantity.fromJSON(json);

        expect(mq).toBeInstanceOf(MoneyQuantity);
        expect(mq.value).toBe(250.75);
        expect(mq.code).toBe('CAD');
      });

      it('should create identical instance from JSON', () => {
        const original = new MoneyQuantity(moneyQuantities.usd);
        const json = original.toJSON();
        const restored = MoneyQuantity.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new MoneyQuantity(moneyQuantities.usd);
        const updated = original.with({ value: 200 });

        expect(updated).not.toBe(original);
        expect(updated.value).toBe(200);
        expect(original.value).toBe(100.50);
      });

      it('should apply transform function correctly', () => {
        const mq = new MoneyQuantity(moneyQuantities.usd);
        const transformed = mq.applyTransform((data) => ({
          value: (data.value || 0) * 1.1,
        }));

        expect(transformed.value).toBeCloseTo(110.55, 2);
        expect(mq.value).toBe(100.50);
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new MoneyQuantity(moneyQuantities.usd);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying clone', () => {
        const original = new MoneyQuantity(moneyQuantities.usd);
        const cloned = original.clone();

        cloned.value = 999;

        expect(original.value).toBe(100.50);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const mq = new MoneyQuantity(moneyQuantities.usd);
        const str = mq.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('MoneyQuantity');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _value extension', () => {
        const mq = new MoneyQuantity({
          value: 100,
          _value: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'value-info' },
            ],
          },
          code: 'USD',
        });

        expect(mq._value?.extension?.[0]?.valueString).toBe('value-info');
      });

      it('should handle _code extension', () => {
        const mq = new MoneyQuantity({
          value: 100,
          code: 'USD',
          _code: {
            id: 'code-ext',
          },
        });

        expect(mq._code?.id).toBe('code-ext');
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const mq = new MoneyQuantity({
          id: 'mq-1',
          value: 100,
          code: 'USD',
        });

        expect(mq.id).toBe('mq-1');
      });

      it('should handle extension property', () => {
        const mq = new MoneyQuantity({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          value: 100,
          code: 'USD',
        });

        expect(mq.extension).toHaveLength(1);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const mq = new MoneyQuantityBuilder().build();
        expect(mq).toBeInstanceOf(MoneyQuantity);
      });

      it('should build with value', () => {
        const mq = new MoneyQuantityBuilder()
          .setValue(100)
          .build();

        expect(mq.value).toBe(100);
      });

      it('should build with unit', () => {
        const mq = new MoneyQuantityBuilder()
          .setUnit('USD')
          .build();

        expect(mq.unit).toBe('USD');
      });

      it('should build with system', () => {
        const mq = new MoneyQuantityBuilder()
          .setSystem('urn:iso:std:iso:4217')
          .build();

        expect(mq.system).toBe('urn:iso:std:iso:4217');
      });

      it('should build with code', () => {
        const mq = new MoneyQuantityBuilder()
          .setCode('USD')
          .build();

        expect(mq.code).toBe('USD');
      });

      it('should build with comparator', () => {
        const mq = new MoneyQuantityBuilder()
          .setComparator('>=')
          .build();

        expect(mq.comparator).toBe('>=');
      });

      it('should build complete money quantity', () => {
        const mq = new MoneyQuantityBuilder()
          .setValue(100.50)
          .setUnit('USD')
          .setSystem('urn:iso:std:iso:4217')
          .setCode('USD')
          .build();

        expect(mq.value).toBe(100.50);
        expect(mq.unit).toBe('USD');
        expect(mq.system).toBe('urn:iso:std:iso:4217');
        expect(mq.code).toBe('USD');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new MoneyQuantityBuilder()
          .setValue(100)
          .setUnit('USD')
          .setCode('USD');

        expect(builder).toBeInstanceOf(MoneyQuantityBuilder);
      });

      it('should allow overwriting properties', () => {
        const mq = new MoneyQuantityBuilder()
          .setValue(100)
          .setValue(200)
          .build();

        expect(mq.value).toBe(200);
      });
    });

    describe('Base Element Properties', () => {
      it('should set id', () => {
        const mq = new MoneyQuantityBuilder()
          .setId('mq-1')
          .setValue(100)
          .build();

        expect(mq.id).toBe('mq-1');
      });

      it('should add extension', () => {
        const mq = new MoneyQuantityBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setValue(100)
          .build();

        expect(mq.extension).toHaveLength(1);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const mq = new MoneyQuantityBuilder()
          .setValue(100.50)
          .setUnit('USD')
          .setSystem('urn:iso:std:iso:4217')
          .setCode('USD')
          .build();

        const json = mq.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new MoneyQuantityBuilder()
          .setValue(100)
          .setCode('USD')
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
    it('should work in claim amount scenario', () => {
      const claimAmount = new MoneyQuantityBuilder()
        .setValue(1500.00)
        .setUnit('USD')
        .setSystem('urn:iso:std:iso:4217')
        .setCode('USD')
        .build();

      expect(claimAmount.value).toBe(1500.00);
      expect(claimAmount.code).toBe('USD');

      const json = claimAmount.toJSON();
      const restored = MoneyQuantity.fromJSON(json);

      expect(restored.value).toBe(1500.00);
    });

    it('should work in coverage benefit scenario', () => {
      const benefitAmount = new MoneyQuantity(moneyQuantities.withComparator);

      expect(benefitAmount.comparator).toBe('<=');
      expect(benefitAmount.value).toBe(500);
    });

    it('should work in international currency scenario', () => {
      const currencies = [
        new MoneyQuantity(moneyQuantities.usd),
        new MoneyQuantity(moneyQuantities.eur),
        new MoneyQuantity(moneyQuantities.gbp),
        new MoneyQuantity(moneyQuantities.jpy),
        new MoneyQuantity(moneyQuantities.chf),
      ];

      expect(currencies.map((c) => c.code)).toEqual(['USD', 'EUR', 'GBP', 'JPY', 'CHF']);
    });

    it('should handle amount update', () => {
      const original = new MoneyQuantity(moneyQuantities.usd);

      const updated = original.with({
        value: 150.75,
      });

      expect(updated.value).toBe(150.75);
      expect(original.value).toBe(100.50);
    });

    it('should work in payment reconciliation scenario', () => {
      const payments = [
        new MoneyQuantityBuilder()
          .setValue(500)
          .setCode('USD')
          .setSystem('urn:iso:std:iso:4217')
          .build(),
        new MoneyQuantityBuilder()
          .setValue(750)
          .setCode('USD')
          .setSystem('urn:iso:std:iso:4217')
          .build(),
      ];

      const total = payments.reduce((sum, p) => sum + (p.value || 0), 0);
      expect(total).toBe(1250);
    });

    it('should work in contract value scenario', () => {
      const contractValue = new MoneyQuantity(moneyQuantities.largeAmount);

      expect(contractValue.value).toBe(1000000);
    });

    it('should work in explanation of benefit scenario', () => {
      const eobAmounts = {
        submitted: new MoneyQuantityBuilder()
          .setValue(1000)
          .setCode('USD')
          .build(),
        eligible: new MoneyQuantityBuilder()
          .setValue(800)
          .setCode('USD')
          .build(),
        benefit: new MoneyQuantityBuilder()
          .setValue(640)
          .setCode('USD')
          .build(),
      };

      expect(eobAmounts.submitted.value).toBe(1000);
      expect(eobAmounts.eligible.value).toBe(800);
      expect(eobAmounts.benefit.value).toBe(640);
    });
  });
});
