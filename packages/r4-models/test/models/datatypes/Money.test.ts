/**
 * Money Model and Builder Tests
 *
 * Tests for the Money datatype class and its builder.
 * Money represents an amount of economic utility in some recognized currency.
 */

import { describe, it, expect } from 'vitest';
import { Money, MoneyBuilder } from '../../../src/index.js';
import type { IMoney } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const moneyAmounts = {
  simple: {
    value: 100.00,
    currency: 'USD',
  } as IMoney,
  euros: {
    value: 85.50,
    currency: 'EUR',
  } as IMoney,
  pounds: {
    value: 72.25,
    currency: 'GBP',
  } as IMoney,
  yen: {
    value: 15000,
    currency: 'JPY',
  } as IMoney,
  precise: {
    value: 1234.56,
    currency: 'USD',
  } as IMoney,
  large: {
    value: 1000000.00,
    currency: 'USD',
  } as IMoney,
};

describe('Money', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const money = new Money({});
        expect(money).toBeInstanceOf(Money);
        expect(money.value).toBeUndefined();
        expect(money.currency).toBeUndefined();
      });

      it('should create simple USD money', () => {
        const money = new Money(moneyAmounts.simple);
        expect(money.value).toBe(100.00);
        expect(money.currency).toBe('USD');
      });

      it('should create EUR money', () => {
        const money = new Money(moneyAmounts.euros);
        expect(money.value).toBe(85.50);
        expect(money.currency).toBe('EUR');
      });

      it('should create GBP money', () => {
        const money = new Money(moneyAmounts.pounds);
        expect(money.value).toBe(72.25);
        expect(money.currency).toBe('GBP');
      });

      it('should create JPY money', () => {
        const money = new Money(moneyAmounts.yen);
        expect(money.value).toBe(15000);
        expect(money.currency).toBe('JPY');
      });

      it('should create money with precise decimal', () => {
        const money = new Money(moneyAmounts.precise);
        expect(money.value).toBe(1234.56);
      });

      it('should create large money amount', () => {
        const money = new Money(moneyAmounts.large);
        expect(money.value).toBe(1000000.00);
      });

      it('should create money with value only', () => {
        const money = new Money({ value: 50.00 });
        expect(money.value).toBe(50.00);
        expect(money.currency).toBeUndefined();
      });

      it('should create money with currency only', () => {
        const money = new Money({ currency: 'USD' });
        expect(money.value).toBeUndefined();
        expect(money.currency).toBe('USD');
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const money = new Money(moneyAmounts.simple);
        const json = money.toJSON();

        expect(json.value).toBe(100.00);
        expect(json.currency).toBe('USD');
      });

      it('should omit undefined properties in JSON', () => {
        const money = new Money({ value: 50.00 });
        const json = money.toJSON();

        expect(json.value).toBe(50.00);
        expect(json).not.toHaveProperty('currency');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Money(moneyAmounts.precise);
        expectSerializationRoundtrip(original, Money);
      });

      it('should preserve decimal precision in JSON', () => {
        const money = new Money({ value: 123.45, currency: 'USD' });
        const json = money.toJSON();

        expect(json.value).toBe(123.45);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IMoney = {
          value: 250.00,
          currency: 'CAD',
        };
        const money = Money.fromJSON(json);

        expect(money).toBeInstanceOf(Money);
        expect(money.value).toBe(250.00);
        expect(money.currency).toBe('CAD');
      });

      it('should create identical instance from JSON', () => {
        const original = new Money(moneyAmounts.euros);
        const json = original.toJSON();
        const restored = Money.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Money({ value: 100, currency: 'USD' });
        const updated = original.with({ value: 150 });

        expect(updated).not.toBe(original);
        expect(updated.value).toBe(150);
        expect(updated.currency).toBe('USD');
        expect(original.value).toBe(100);
      });

      it('should allow changing currency with .with()', () => {
        const original = new Money(moneyAmounts.simple);
        const updated = original.with({ currency: 'EUR' });

        expect(updated.currency).toBe('EUR');
        expect(updated.value).toBe(100.00);
        expect(original.currency).toBe('USD');
      });

      it('should apply transform function correctly', () => {
        const money = new Money({ value: 100, currency: 'USD' });
        const doubled = money.applyTransform((data) => ({
          value: (data.value ?? 0) * 2,
        }));

        expect(doubled.value).toBe(200);
        expect(money.value).toBe(100);
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Money(moneyAmounts.precise);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should clone all properties', () => {
        const original = new Money(moneyAmounts.euros);
        const cloned = original.clone();

        expect(cloned.value).toBe(original.value);
        expect(cloned.currency).toBe(original.currency);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const money = new Money(moneyAmounts.simple);
        const str = money.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Money');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _value extension', () => {
        const money = new Money({
          value: 100.00,
          _value: {
            extension: [
              { url: 'http://example.org/precision', valueInteger: 2 },
            ],
          },
        });

        expect(money._value?.extension?.[0]?.valueInteger).toBe(2);
      });

      it('should handle _currency extension', () => {
        const money = new Money({
          value: 100.00,
          currency: 'USD',
          _currency: {
            id: 'curr-ext',
          },
        });

        expect(money._currency?.id).toBe('curr-ext');
      });

      it('should serialize extension properties', () => {
        const money = new Money({
          value: 100.00,
          currency: 'USD',
          _currency: {
            extension: [{ url: 'http://example.org', valueBoolean: true }],
          },
        });
        const json = money.toJSON();

        expect(json._currency?.extension?.[0]?.valueBoolean).toBe(true);
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const money = new Money({
          id: 'money-1',
          value: 100.00,
          currency: 'USD',
        });

        expect(money.id).toBe('money-1');
      });

      it('should handle extension property', () => {
        const money = new Money({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          value: 100.00,
        });

        expect(money.extension).toHaveLength(1);
        expect(money.extension?.[0]?.url).toBe('http://example.org/ext');
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const money = new MoneyBuilder().build();
        expect(money).toBeInstanceOf(Money);
      });

      it('should build with value only', () => {
        const money = new MoneyBuilder()
          .setValue(100.00)
          .build();

        expect(money.value).toBe(100.00);
      });

      it('should build with currency only', () => {
        const money = new MoneyBuilder()
          .setCurrency('USD')
          .build();

        expect(money.currency).toBe('USD');
      });

      it('should build with all properties', () => {
        const money = new MoneyBuilder()
          .setValue(250.50)
          .setCurrency('EUR')
          .build();

        expect(money.value).toBe(250.50);
        expect(money.currency).toBe('EUR');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new MoneyBuilder()
          .setValue(100)
          .setCurrency('USD');

        expect(builder).toBeInstanceOf(MoneyBuilder);
      });

      it('should allow overwriting properties', () => {
        const money = new MoneyBuilder()
          .setValue(100)
          .setValue(200)
          .build();

        expect(money.value).toBe(200);
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const money = new MoneyBuilder()
          .setId('money-1')
          .setValue(100)
          .build();

        expect(money.id).toBe('money-1');
      });

      it('should add extension from ElementBuilder', () => {
        const money = new MoneyBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setValue(100)
          .build();

        expect(money.extension).toHaveLength(1);
        expect(money.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });

      it('should accumulate multiple extensions', () => {
        const money = new MoneyBuilder()
          .addExtension({ url: 'http://example.org/ext1', valueString: 'one' })
          .addExtension({ url: 'http://example.org/ext2', valueInteger: 2 })
          .build();

        expect(money.extension).toHaveLength(2);
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new MoneyBuilder().setValue(100);
        const first = builder.build();

        builder.setValue(200);
        const second = builder.build();

        expect(first.value).toBe(100);
        expect(second.value).toBe(200);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const money = new MoneyBuilder()
          .setValue(1234.56)
          .setCurrency('USD')
          .build();

        const json = money.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new MoneyBuilder()
          .setValue(100)
          .setCurrency('USD')
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
    it('should work in claim cost scenario', () => {
      const claimCost = new MoneyBuilder()
        .setValue(1500.00)
        .setCurrency('USD')
        .build();

      expect(claimCost.value).toBe(1500.00);
      expect(claimCost.currency).toBe('USD');

      const json = claimCost.toJSON();
      const restored = Money.fromJSON(json);

      expect(restored.value).toBe(1500.00);
      expect(restored.currency).toBe('USD');
    });

    it('should work in medication price scenario', () => {
      const drugPrice = new Money({
        value: 89.99,
        currency: 'USD',
      });

      expect(drugPrice.value).toBe(89.99);
    });

    it('should work in copay scenario', () => {
      const copay = new MoneyBuilder()
        .setValue(25.00)
        .setCurrency('USD')
        .build();

      expect(copay.value).toBe(25.00);
    });

    it('should handle price adjustment', () => {
      const originalPrice = new Money(moneyAmounts.simple);

      // Apply 10% discount
      const discountedPrice = originalPrice.applyTransform((data) => ({
        value: (data.value ?? 0) * 0.9,
      }));

      expect(discountedPrice.value).toBe(90);
      expect(originalPrice.value).toBe(100);
    });

    it('should handle currency change scenario', () => {
      const usdAmount = new Money(moneyAmounts.simple);

      // Simulated conversion (not actual exchange rate)
      const eurAmount = usdAmount.with({
        value: (usdAmount.value ?? 0) * 0.85,
        currency: 'EUR',
      });

      expect(eurAmount.currency).toBe('EUR');
      expect(eurAmount.value).toBe(85);
      expect(usdAmount.currency).toBe('USD');
    });

    it('should work in insurance deductible scenario', () => {
      const deductible = new MoneyBuilder()
        .setValue(500.00)
        .setCurrency('USD')
        .build();

      const paidAmount = new MoneyBuilder()
        .setValue(350.00)
        .setCurrency('USD')
        .build();

      expect(deductible.value).toBe(500);
      expect(paidAmount.value).toBe(350);
    });

    it('should handle international pricing', () => {
      const prices = [
        new Money({ value: 100, currency: 'USD' }),
        new Money({ value: 85, currency: 'EUR' }),
        new Money({ value: 72, currency: 'GBP' }),
        new Money({ value: 15000, currency: 'JPY' }),
      ];

      expect(prices).toHaveLength(4);
      expect(prices[0].currency).toBe('USD');
      expect(prices[1].currency).toBe('EUR');
      expect(prices[2].currency).toBe('GBP');
      expect(prices[3].currency).toBe('JPY');
    });
  });
});
