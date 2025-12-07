/**
 * Address Model and Builder Tests
 *
 * Tests for the Address datatype class and its builder.
 */

import { describe, it, expect } from 'vitest';
import { Address, AddressBuilder } from '../../../src/index.js';
import type { IAddress } from '@fhir-toolkit/r4-types';
import { addresses, periods } from '../../helpers/fixtures.js';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

describe('Address', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const addr = new Address({});
        expect(addr).toBeInstanceOf(Address);
        expect(addr.city).toBeUndefined();
        expect(addr.line).toBeUndefined();
      });

      it('should create instance with city only', () => {
        const addr = new Address({ city: 'Santiago' });
        expect(addr.city).toBe('Santiago');
      });

      it('should create home address', () => {
        const addr = new Address(addresses.home);
        expect(addr.use).toBe('home');
        expect(addr.type).toBe('physical');
        expect(addr.line).toEqual(['Av. Providencia 1234', 'Depto 56']);
        expect(addr.city).toBe('Providencia');
        expect(addr.state).toBe('Región Metropolitana');
        expect(addr.postalCode).toBe('7500000');
        expect(addr.country).toBe('Chile');
      });

      it('should create work address', () => {
        const addr = new Address(addresses.work);
        expect(addr.use).toBe('work');
        expect(addr.type).toBe('both');
        expect(addr.city).toBe('Santiago');
        expect(addr.country).toBe('Chile');
      });

      it('should create address with multiple lines', () => {
        const addr = new Address({
          line: ['123 Main St', 'Suite 400', 'Building A'],
          city: 'New York',
        });
        expect(addr.line).toHaveLength(3);
        expect(addr.line?.[0]).toBe('123 Main St');
        expect(addr.line?.[2]).toBe('Building A');
      });

      it('should create address with period', () => {
        const addr = new Address({
          city: 'Santiago',
          period: { start: '2020-01-01', end: '2024-12-31' },
        });
        expect(addr.period?.start).toBe('2020-01-01');
        expect(addr.period?.end).toBe('2024-12-31');
      });
    });

    describe('Use Property', () => {
      it.each([
        ['home', 'home'],
        ['work', 'work'],
        ['temp', 'temp'],
        ['old', 'old'],
        ['billing', 'billing'],
      ] as const)('should handle use value %s', (input, expected) => {
        const addr = new Address({ use: input, city: 'Test' });
        expect(addr.use).toBe(expected);
      });
    });

    describe('Type Property', () => {
      it.each([
        ['postal', 'postal'],
        ['physical', 'physical'],
        ['both', 'both'],
      ] as const)('should handle type value %s', (input, expected) => {
        const addr = new Address({ type: input, city: 'Test' });
        expect(addr.type).toBe(expected);
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const addr = new Address(addresses.home);
        const json = addr.toJSON();

        expect(json.use).toBe('home');
        expect(json.type).toBe('physical');
        expect(json.city).toBe('Providencia');
        expect(json.country).toBe('Chile');
      });

      it('should omit undefined properties in JSON', () => {
        const addr = new Address({ city: 'Santiago' });
        const json = addr.toJSON();

        expect(json.city).toBe('Santiago');
        expect(json).not.toHaveProperty('use');
        expect(json).not.toHaveProperty('type');
        expect(json).not.toHaveProperty('line');
        expect(json).not.toHaveProperty('state');
        expect(json).not.toHaveProperty('postalCode');
        expect(json).not.toHaveProperty('country');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Address(addresses.home);
        expectSerializationRoundtrip(original, Address);
      });

      it('should preserve line array in JSON', () => {
        const addr = new Address({
          line: ['Line 1', 'Line 2'],
        });
        const json = addr.toJSON();

        expect(json.line).toEqual(['Line 1', 'Line 2']);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IAddress = {
          use: 'home',
          city: 'Santiago',
          country: 'Chile',
        };
        const addr = Address.fromJSON(json);

        expect(addr).toBeInstanceOf(Address);
        expect(addr.use).toBe('home');
        expect(addr.city).toBe('Santiago');
      });

      it('should create identical instance from JSON', () => {
        const original = new Address(addresses.home);
        const json = original.toJSON();
        const restored = Address.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Address({ city: 'Santiago', country: 'Chile' });
        const updated = original.with({ city: 'Valparaíso' });

        expect(updated).not.toBe(original);
        expect(updated.city).toBe('Valparaíso');
        expect(updated.country).toBe('Chile');
        expect(original.city).toBe('Santiago');
      });

      it('should allow changing multiple properties with .with()', () => {
        const original = new Address({ city: 'Santiago', use: 'home' });
        const updated = original.with({ city: 'Valparaíso', use: 'work' });

        expect(updated.city).toBe('Valparaíso');
        expect(updated.use).toBe('work');
        expect(original.city).toBe('Santiago');
        expect(original.use).toBe('home');
      });

      it('should apply transform function correctly', () => {
        const addr = new Address({ city: 'santiago', country: 'chile' });
        const transformed = addr.applyTransform((data) => ({
          city: data.city?.toUpperCase(),
          country: data.country?.toUpperCase(),
        }));

        expect(transformed.city).toBe('SANTIAGO');
        expect(transformed.country).toBe('CHILE');
        expect(addr.city).toBe('santiago');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Address(addresses.home);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned arrays', () => {
        const original = new Address({
          line: ['Line 1', 'Line 2'],
          city: 'Santiago',
        });
        const cloned = original.clone();

        if (cloned.line) {
          cloned.line[0] = 'MODIFIED';
        }

        expect(original.line?.[0]).toBe('Line 1');
      });

      it('should clone nested period', () => {
        const original = new Address({
          city: 'Santiago',
          period: { start: '2020-01-01' },
        });
        const cloned = original.clone();

        expect(cloned.period?.start).toBe('2020-01-01');
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const addr = new Address({ city: 'Santiago' });
        const str = addr.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Address');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _city extension', () => {
        const addr = new Address({
          city: 'Santiago',
          _city: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'official name' },
            ],
          },
        });

        expect(addr._city?.extension?.[0]?.valueString).toBe('official name');
      });

      it('should serialize extension properties', () => {
        const addr = new Address({
          city: 'Santiago',
          _city: {
            id: 'city-ext',
            extension: [{ url: 'http://example.org', valueBoolean: true }],
          },
        });
        const json = addr.toJSON();

        expect(json._city?.id).toBe('city-ext');
        expect(json._city?.extension?.[0]?.valueBoolean).toBe(true);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const addr = new AddressBuilder().build();
        expect(addr).toBeInstanceOf(Address);
      });

      it('should build with city only', () => {
        const addr = new AddressBuilder()
          .setCity('Santiago')
          .build();

        expect(addr.city).toBe('Santiago');
      });

      it('should build with all scalar properties', () => {
        const addr = new AddressBuilder()
          .setUse('home')
          .setType('physical')
          .setText('Av. Providencia 1234, Providencia, Chile')
          .setCity('Providencia')
          .setDistrict('Santiago')
          .setState('Región Metropolitana')
          .setPostalCode('7500000')
          .setCountry('Chile')
          .build();

        expect(addr.use).toBe('home');
        expect(addr.type).toBe('physical');
        expect(addr.city).toBe('Providencia');
        expect(addr.district).toBe('Santiago');
        expect(addr.state).toBe('Región Metropolitana');
        expect(addr.postalCode).toBe('7500000');
        expect(addr.country).toBe('Chile');
      });

      it('should build with lines', () => {
        const addr = new AddressBuilder()
          .addLine('123 Main St')
          .addLine('Apt 4B')
          .setCity('New York')
          .build();

        expect(addr.line).toEqual(['123 Main St', 'Apt 4B']);
        expect(addr.city).toBe('New York');
      });

      it('should build with period', () => {
        const addr = new AddressBuilder()
          .setCity('Santiago')
          .setPeriod({ start: '2020-01-01' })
          .build();

        expect(addr.period?.start).toBe('2020-01-01');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new AddressBuilder()
          .setUse('home')
          .setCity('Santiago')
          .setCountry('Chile');

        expect(builder).toBeInstanceOf(AddressBuilder);
      });

      it('should allow overwriting scalar properties', () => {
        const addr = new AddressBuilder()
          .setCity('Santiago')
          .setCity('Valparaíso')
          .build();

        expect(addr.city).toBe('Valparaíso');
      });

      it('should accumulate lines', () => {
        const addr = new AddressBuilder()
          .addLine('Line 1')
          .addLine('Line 2')
          .addLine('Line 3')
          .build();

        expect(addr.line).toHaveLength(3);
        expect(addr.line).toEqual(['Line 1', 'Line 2', 'Line 3']);
      });
    });

    describe('Use Property', () => {
      it.each([
        ['home', 'home'],
        ['work', 'work'],
        ['temp', 'temp'],
        ['old', 'old'],
        ['billing', 'billing'],
      ] as const)('should set use to %s', (input, expected) => {
        const addr = new AddressBuilder()
          .setUse(input)
          .build();

        expect(addr.use).toBe(expected);
      });
    });

    describe('Type Property', () => {
      it.each([
        ['postal', 'postal'],
        ['physical', 'physical'],
        ['both', 'both'],
      ] as const)('should set type to %s', (input, expected) => {
        const addr = new AddressBuilder()
          .setType(input)
          .build();

        expect(addr.type).toBe(expected);
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const addr = new AddressBuilder()
          .setId('addr-1')
          .setCity('Santiago')
          .build();

        expect(addr.id).toBe('addr-1');
      });

      it('should add extension from ElementBuilder', () => {
        const addr = new AddressBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setCity('Santiago')
          .build();

        expect(addr.extension).toHaveLength(1);
        expect(addr.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });

      it('should accumulate multiple extensions', () => {
        const addr = new AddressBuilder()
          .addExtension({ url: 'http://example.org/ext1', valueString: 'one' })
          .addExtension({ url: 'http://example.org/ext2', valueInteger: 2 })
          .build();

        expect(addr.extension).toHaveLength(2);
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new AddressBuilder().setCity('Santiago');
        const first = builder.build();

        builder.setCity('Valparaíso');
        const second = builder.build();

        expect(first.city).toBe('Santiago');
        expect(second.city).toBe('Valparaíso');
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const addr = new AddressBuilder()
          .setUse('home')
          .setCity('Santiago')
          .addLine('Main St 123')
          .build();

        const json = addr.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new AddressBuilder()
          .setCity('Santiago')
          .addLine('Main St 123')
          .setCountry('Chile')
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
    it('should work in typical patient address scenario', () => {
      const homeAddress = new AddressBuilder()
        .setUse('home')
        .setType('physical')
        .addLine('Av. Providencia 1234')
        .addLine('Depto 56')
        .setCity('Providencia')
        .setState('Región Metropolitana')
        .setPostalCode('7500000')
        .setCountry('Chile')
        .build();

      expect(homeAddress.use).toBe('home');
      expect(homeAddress.line).toHaveLength(2);

      const json = homeAddress.toJSON();
      const restored = Address.fromJSON(json);

      expect(restored.city).toBe('Providencia');
      expect(restored.line).toEqual(['Av. Providencia 1234', 'Depto 56']);
    });

    it('should handle organization billing address', () => {
      const billingAddress = new AddressBuilder()
        .setUse('billing')
        .setType('postal')
        .addLine('P.O. Box 12345')
        .setCity('Miami')
        .setState('FL')
        .setPostalCode('33101')
        .setCountry('USA')
        .build();

      expect(billingAddress.use).toBe('billing');
      expect(billingAddress.type).toBe('postal');
    });

    it('should handle address change scenario', () => {
      const oldAddress = new Address({
        use: 'old',
        city: 'Santiago',
        period: { end: '2024-01-01' },
      });

      const newAddress = new Address({
        use: 'home',
        city: 'Valparaíso',
        period: { start: '2024-01-01' },
      });

      expect(oldAddress.use).toBe('old');
      expect(oldAddress.period?.end).toBe('2024-01-01');
      expect(newAddress.use).toBe('home');
      expect(newAddress.period?.start).toBe('2024-01-01');
    });

    it('should update city while preserving other fields', () => {
      const original = new Address({
        use: 'home',
        city: 'Santiago',
        country: 'Chile',
      });

      const updated = original.with({ city: 'Valparaíso' });

      expect(updated.city).toBe('Valparaíso');
      expect(updated.use).toBe('home');
      expect(updated.country).toBe('Chile');
      expect(original.city).toBe('Santiago');
    });
  });
});
