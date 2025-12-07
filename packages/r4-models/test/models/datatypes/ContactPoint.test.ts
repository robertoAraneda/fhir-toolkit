/**
 * ContactPoint Model and Builder Tests
 *
 * Tests for the ContactPoint datatype class and its builder.
 */

import { describe, it, expect } from 'vitest';
import { ContactPoint, ContactPointBuilder } from '../../../src/index.js';
import type { IContactPoint } from '@fhir-toolkit/r4-types';
import { contactPoints } from '../../helpers/fixtures.js';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

describe('ContactPoint', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const cp = new ContactPoint({});
        expect(cp).toBeInstanceOf(ContactPoint);
        expect(cp.system).toBeUndefined();
        expect(cp.value).toBeUndefined();
      });

      it('should create instance with value only', () => {
        const cp = new ContactPoint({ value: '+56 9 1234 5678' });
        expect(cp.value).toBe('+56 9 1234 5678');
      });

      it('should create phone contact point', () => {
        const cp = new ContactPoint(contactPoints.phone);
        expect(cp.system).toBe('phone');
        expect(cp.value).toBe('+56 9 1234 5678');
        expect(cp.use).toBe('mobile');
        expect(cp.rank).toBe(1);
      });

      it('should create email contact point', () => {
        const cp = new ContactPoint(contactPoints.email);
        expect(cp.system).toBe('email');
        expect(cp.value).toBe('juan.garcia@hospital.cl');
        expect(cp.use).toBe('work');
      });

      it('should create work phone contact point', () => {
        const cp = new ContactPoint(contactPoints.workPhone);
        expect(cp.system).toBe('phone');
        expect(cp.use).toBe('work');
        expect(cp.rank).toBe(2);
      });

      it('should create contact point with period', () => {
        const cp = new ContactPoint({
          system: 'phone',
          value: '+1 555 1234',
          period: { start: '2020-01-01', end: '2024-12-31' },
        });
        expect(cp.period?.start).toBe('2020-01-01');
        expect(cp.period?.end).toBe('2024-12-31');
      });
    });

    describe('System Property', () => {
      it.each([
        ['phone', 'phone'],
        ['fax', 'fax'],
        ['email', 'email'],
        ['pager', 'pager'],
        ['url', 'url'],
        ['sms', 'sms'],
        ['other', 'other'],
      ] as const)('should handle system value %s', (input, expected) => {
        const cp = new ContactPoint({ system: input, value: 'test' });
        expect(cp.system).toBe(expected);
      });
    });

    describe('Use Property', () => {
      it.each([
        ['home', 'home'],
        ['work', 'work'],
        ['temp', 'temp'],
        ['old', 'old'],
        ['mobile', 'mobile'],
      ] as const)('should handle use value %s', (input, expected) => {
        const cp = new ContactPoint({ use: input, value: 'test' });
        expect(cp.use).toBe(expected);
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const cp = new ContactPoint(contactPoints.phone);
        const json = cp.toJSON();

        expect(json.system).toBe('phone');
        expect(json.value).toBe('+56 9 1234 5678');
        expect(json.use).toBe('mobile');
        expect(json.rank).toBe(1);
      });

      it('should omit undefined properties in JSON', () => {
        const cp = new ContactPoint({ value: '+1 555 1234' });
        const json = cp.toJSON();

        expect(json.value).toBe('+1 555 1234');
        expect(json).not.toHaveProperty('system');
        expect(json).not.toHaveProperty('use');
        expect(json).not.toHaveProperty('rank');
        expect(json).not.toHaveProperty('period');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new ContactPoint(contactPoints.phone);
        expectSerializationRoundtrip(original, ContactPoint);
      });

      it('should preserve rank as number', () => {
        const cp = new ContactPoint({ rank: 1 });
        const json = cp.toJSON();
        expect(json.rank).toBe(1);
        expect(typeof json.rank).toBe('number');
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IContactPoint = {
          system: 'email',
          value: 'test@example.com',
          use: 'work',
        };
        const cp = ContactPoint.fromJSON(json);

        expect(cp).toBeInstanceOf(ContactPoint);
        expect(cp.system).toBe('email');
        expect(cp.value).toBe('test@example.com');
      });

      it('should create identical instance from JSON', () => {
        const original = new ContactPoint(contactPoints.phone);
        const json = original.toJSON();
        const restored = ContactPoint.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new ContactPoint({ system: 'phone', value: '+1 555 1234' });
        const updated = original.with({ value: '+1 555 5678' });

        expect(updated).not.toBe(original);
        expect(updated.value).toBe('+1 555 5678');
        expect(updated.system).toBe('phone');
        expect(original.value).toBe('+1 555 1234');
      });

      it('should allow changing multiple properties with .with()', () => {
        const original = new ContactPoint({ system: 'phone', use: 'home' });
        const updated = original.with({ system: 'email', use: 'work' });

        expect(updated.system).toBe('email');
        expect(updated.use).toBe('work');
        expect(original.system).toBe('phone');
        expect(original.use).toBe('home');
      });

      it('should apply transform function correctly', () => {
        const cp = new ContactPoint({ value: 'test@example.com' });
        const transformed = cp.applyTransform((data) => ({
          value: data.value?.toUpperCase(),
        }));

        expect(transformed.value).toBe('TEST@EXAMPLE.COM');
        expect(cp.value).toBe('test@example.com');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new ContactPoint(contactPoints.phone);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should clone nested period', () => {
        const original = new ContactPoint({
          value: '+1 555 1234',
          period: { start: '2020-01-01' },
        });
        const cloned = original.clone();

        expect(cloned.period?.start).toBe('2020-01-01');
      });

      it('should clone all properties', () => {
        const original = new ContactPoint({
          system: 'phone',
          value: '+1 555 1234',
          use: 'mobile',
          rank: 1,
        });
        const cloned = original.clone();

        expect(cloned.system).toBe(original.system);
        expect(cloned.value).toBe(original.value);
        expect(cloned.use).toBe(original.use);
        expect(cloned.rank).toBe(original.rank);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const cp = new ContactPoint({ value: '+1 555 1234' });
        const str = cp.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('ContactPoint');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _value extension', () => {
        const cp = new ContactPoint({
          value: '+1 555 1234',
          _value: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'formatted' },
            ],
          },
        });

        expect(cp._value?.extension?.[0]?.valueString).toBe('formatted');
      });

      it('should serialize extension properties', () => {
        const cp = new ContactPoint({
          value: '+1 555 1234',
          _value: {
            id: 'value-ext',
            extension: [{ url: 'http://example.org', valueBoolean: true }],
          },
        });
        const json = cp.toJSON();

        expect(json._value?.id).toBe('value-ext');
        expect(json._value?.extension?.[0]?.valueBoolean).toBe(true);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const cp = new ContactPointBuilder().build();
        expect(cp).toBeInstanceOf(ContactPoint);
      });

      it('should build with value only', () => {
        const cp = new ContactPointBuilder()
          .setValue('+1 555 1234')
          .build();

        expect(cp.value).toBe('+1 555 1234');
      });

      it('should build with system and value', () => {
        const cp = new ContactPointBuilder()
          .setSystem('phone')
          .setValue('+1 555 1234')
          .build();

        expect(cp.system).toBe('phone');
        expect(cp.value).toBe('+1 555 1234');
      });

      it('should build with all properties', () => {
        const cp = new ContactPointBuilder()
          .setSystem('phone')
          .setValue('+1 555 1234')
          .setUse('mobile')
          .setRank(1)
          .setPeriod({ start: '2020-01-01' })
          .build();

        expect(cp.system).toBe('phone');
        expect(cp.value).toBe('+1 555 1234');
        expect(cp.use).toBe('mobile');
        expect(cp.rank).toBe(1);
        expect(cp.period?.start).toBe('2020-01-01');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new ContactPointBuilder()
          .setSystem('phone')
          .setValue('+1 555 1234')
          .setUse('mobile');

        expect(builder).toBeInstanceOf(ContactPointBuilder);
      });

      it('should allow overwriting properties', () => {
        const cp = new ContactPointBuilder()
          .setValue('+1 555 1234')
          .setValue('+1 555 5678')
          .build();

        expect(cp.value).toBe('+1 555 5678');
      });
    });

    describe('System Property', () => {
      it.each([
        ['phone', 'phone'],
        ['fax', 'fax'],
        ['email', 'email'],
        ['pager', 'pager'],
        ['url', 'url'],
        ['sms', 'sms'],
        ['other', 'other'],
      ] as const)('should set system to %s', (input, expected) => {
        const cp = new ContactPointBuilder()
          .setSystem(input)
          .build();

        expect(cp.system).toBe(expected);
      });
    });

    describe('Use Property', () => {
      it.each([
        ['home', 'home'],
        ['work', 'work'],
        ['temp', 'temp'],
        ['old', 'old'],
        ['mobile', 'mobile'],
      ] as const)('should set use to %s', (input, expected) => {
        const cp = new ContactPointBuilder()
          .setUse(input)
          .build();

        expect(cp.use).toBe(expected);
      });
    });

    describe('Common Contact Types', () => {
      it('should build mobile phone', () => {
        const cp = new ContactPointBuilder()
          .setSystem('phone')
          .setValue('+56 9 1234 5678')
          .setUse('mobile')
          .setRank(1)
          .build();

        expect(cp.system).toBe('phone');
        expect(cp.use).toBe('mobile');
        expect(cp.rank).toBe(1);
      });

      it('should build work email', () => {
        const cp = new ContactPointBuilder()
          .setSystem('email')
          .setValue('john.doe@company.com')
          .setUse('work')
          .build();

        expect(cp.system).toBe('email');
        expect(cp.use).toBe('work');
      });

      it('should build fax number', () => {
        const cp = new ContactPointBuilder()
          .setSystem('fax')
          .setValue('+1 555 1234')
          .setUse('work')
          .build();

        expect(cp.system).toBe('fax');
      });

      it('should build website URL', () => {
        const cp = new ContactPointBuilder()
          .setSystem('url')
          .setValue('https://www.example.com')
          .setUse('work')
          .build();

        expect(cp.system).toBe('url');
        expect(cp.value).toBe('https://www.example.com');
      });

      it('should build SMS contact', () => {
        const cp = new ContactPointBuilder()
          .setSystem('sms')
          .setValue('+1 555 1234')
          .setUse('mobile')
          .build();

        expect(cp.system).toBe('sms');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const cp = new ContactPointBuilder()
          .setId('cp-1')
          .setValue('+1 555 1234')
          .build();

        expect(cp.id).toBe('cp-1');
      });

      it('should add extension from ElementBuilder', () => {
        const cp = new ContactPointBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setValue('+1 555 1234')
          .build();

        expect(cp.extension).toHaveLength(1);
        expect(cp.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });

      it('should accumulate multiple extensions', () => {
        const cp = new ContactPointBuilder()
          .addExtension({ url: 'http://example.org/ext1', valueString: 'one' })
          .addExtension({ url: 'http://example.org/ext2', valueInteger: 2 })
          .build();

        expect(cp.extension).toHaveLength(2);
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new ContactPointBuilder().setValue('+1 555 1234');
        const first = builder.build();

        builder.setValue('+1 555 5678');
        const second = builder.build();

        expect(first.value).toBe('+1 555 1234');
        expect(second.value).toBe('+1 555 5678');
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const cp = new ContactPointBuilder()
          .setSystem('phone')
          .setValue('+1 555 1234')
          .setUse('mobile')
          .build();

        const json = cp.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new ContactPointBuilder()
          .setSystem('phone')
          .setValue('+1 555 1234')
          .setRank(1)
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
    it('should work in typical patient telecom scenario', () => {
      const mobilePhone = new ContactPointBuilder()
        .setSystem('phone')
        .setValue('+56 9 1234 5678')
        .setUse('mobile')
        .setRank(1)
        .build();

      const workEmail = new ContactPointBuilder()
        .setSystem('email')
        .setValue('patient@example.com')
        .setUse('work')
        .setRank(2)
        .build();

      expect(mobilePhone.rank).toBe(1);
      expect(workEmail.rank).toBe(2);

      const json = mobilePhone.toJSON();
      const restored = ContactPoint.fromJSON(json);

      expect(restored.system).toBe('phone');
      expect(restored.use).toBe('mobile');
    });

    it('should handle practitioner contact list', () => {
      const officePhone = new ContactPoint({
        system: 'phone',
        value: '+1 555 1000',
        use: 'work',
        rank: 1,
      });

      const directLine = new ContactPoint({
        system: 'phone',
        value: '+1 555 1001',
        use: 'work',
        rank: 2,
      });

      const email = new ContactPoint({
        system: 'email',
        value: 'dr.smith@hospital.com',
        use: 'work',
        rank: 3,
      });

      expect(officePhone.rank).toBe(1);
      expect(directLine.rank).toBe(2);
      expect(email.rank).toBe(3);
    });

    it('should handle contact point change scenario', () => {
      const oldPhone = new ContactPoint({
        system: 'phone',
        value: '+1 555 OLD',
        use: 'old',
        period: { end: '2024-01-01' },
      });

      const newPhone = new ContactPoint({
        system: 'phone',
        value: '+1 555 NEW',
        use: 'mobile',
        period: { start: '2024-01-01' },
      });

      expect(oldPhone.use).toBe('old');
      expect(oldPhone.period?.end).toBe('2024-01-01');
      expect(newPhone.use).toBe('mobile');
      expect(newPhone.period?.start).toBe('2024-01-01');
    });

    it('should update value while preserving other fields', () => {
      const original = new ContactPoint({
        system: 'phone',
        value: '+1 555 1234',
        use: 'mobile',
        rank: 1,
      });

      const updated = original.with({ value: '+1 555 5678' });

      expect(updated.value).toBe('+1 555 5678');
      expect(updated.system).toBe('phone');
      expect(updated.use).toBe('mobile');
      expect(updated.rank).toBe(1);
      expect(original.value).toBe('+1 555 1234');
    });
  });
});
