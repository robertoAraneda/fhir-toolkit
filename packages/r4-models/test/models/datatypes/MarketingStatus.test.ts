/**
 * MarketingStatus Model and Builder Tests
 *
 * Tests for the MarketingStatus datatype class and its builder.
 * MarketingStatus describes the marketing status of a medicinal product.
 */

import { describe, it, expect } from 'vitest';
import { MarketingStatus, MarketingStatusBuilder } from '../../../src/index.js';
import type { IMarketingStatus } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const marketingStatuses = {
  marketed: {
    country: {
      coding: [
        {
          system: 'urn:iso:std:iso:3166',
          code: 'US',
          display: 'United States of America',
        },
      ],
    },
    status: {
      coding: [
        {
          system: 'http://hl7.org/fhir/publication-status',
          code: 'active',
          display: 'Active',
        },
      ],
      text: 'Product is actively marketed',
    },
    dateRange: {
      start: '2020-01-01',
    },
  } as IMarketingStatus,
  withdrawn: {
    country: {
      coding: [
        {
          system: 'urn:iso:std:iso:3166',
          code: 'GB',
          display: 'United Kingdom',
        },
      ],
    },
    status: {
      coding: [
        {
          system: 'http://hl7.org/fhir/publication-status',
          code: 'retired',
          display: 'Retired',
        },
      ],
      text: 'Product withdrawn from market',
    },
    dateRange: {
      start: '2018-06-15',
      end: '2023-03-31',
    },
  } as IMarketingStatus,
  withJurisdiction: {
    country: {
      coding: [
        {
          system: 'urn:iso:std:iso:3166',
          code: 'DE',
          display: 'Germany',
        },
      ],
    },
    jurisdiction: {
      coding: [
        {
          system: 'urn:iso:std:iso:3166:-2',
          code: 'DE-BY',
          display: 'Bavaria',
        },
      ],
    },
    status: {
      coding: [{ code: 'active' }],
    },
    dateRange: {
      start: '2022-01-01',
    },
  } as IMarketingStatus,
  withRestoreDate: {
    country: {
      coding: [
        {
          system: 'urn:iso:std:iso:3166',
          code: 'FR',
          display: 'France',
        },
      ],
    },
    status: {
      coding: [
        {
          code: 'suspended',
          display: 'Suspended',
        },
      ],
    },
    dateRange: {
      start: '2021-01-01',
      end: '2023-06-30',
    },
    restoreDate: '2024-01-01',
  } as IMarketingStatus,
  euMarket: {
    country: {
      coding: [
        {
          system: 'urn:iso:std:iso:3166',
          code: 'EU',
          display: 'European Union',
        },
      ],
      text: 'European Union (centralized authorization)',
    },
    status: {
      coding: [
        {
          system: 'http://example.org/marketing-status',
          code: 'authorized',
          display: 'Authorized',
        },
      ],
    },
    dateRange: {
      start: '2019-07-01',
    },
  } as IMarketingStatus,
};

describe('MarketingStatus', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const ms = new MarketingStatus({});
        expect(ms).toBeInstanceOf(MarketingStatus);
      });

      it('should create marketed status', () => {
        const ms = new MarketingStatus(marketingStatuses.marketed);
        expect(ms.country.coding?.[0].code).toBe('US');
        expect(ms.status.coding?.[0].code).toBe('active');
        expect(ms.dateRange.start).toBe('2020-01-01');
      });

      it('should create withdrawn status', () => {
        const ms = new MarketingStatus(marketingStatuses.withdrawn);
        expect(ms.country.coding?.[0].code).toBe('GB');
        expect(ms.status.coding?.[0].code).toBe('retired');
        expect(ms.dateRange.end).toBe('2023-03-31');
      });

      it('should create status with jurisdiction', () => {
        const ms = new MarketingStatus(marketingStatuses.withJurisdiction);
        expect(ms.jurisdiction?.coding?.[0].code).toBe('DE-BY');
      });

      it('should create status with restore date', () => {
        const ms = new MarketingStatus(marketingStatuses.withRestoreDate);
        expect(ms.restoreDate).toBe('2024-01-01');
      });

      it('should create EU market status', () => {
        const ms = new MarketingStatus(marketingStatuses.euMarket);
        expect(ms.country.coding?.[0].code).toBe('EU');
        expect(ms.country.text).toContain('centralized');
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const ms = new MarketingStatus(marketingStatuses.marketed);
        const json = ms.toJSON();

        expect(json.country.coding?.[0].code).toBe('US');
        expect(json.status.text).toContain('actively marketed');
      });

      it('should omit undefined properties in JSON', () => {
        const ms = new MarketingStatus(marketingStatuses.marketed);
        const json = ms.toJSON();

        expect(json.country).toBeDefined();
        expect(json.status).toBeDefined();
        expect(json.dateRange).toBeDefined();
        expect(json).not.toHaveProperty('jurisdiction');
        expect(json).not.toHaveProperty('restoreDate');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new MarketingStatus(marketingStatuses.withRestoreDate);
        expectSerializationRoundtrip(original, MarketingStatus);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IMarketingStatus = {
          country: { coding: [{ code: 'US' }] },
          status: { coding: [{ code: 'active' }] },
          dateRange: { start: '2024-01-01' },
        };
        const ms = MarketingStatus.fromJSON(json);

        expect(ms).toBeInstanceOf(MarketingStatus);
        expect(ms.country.coding?.[0].code).toBe('US');
      });

      it('should create identical instance from JSON', () => {
        const original = new MarketingStatus(marketingStatuses.withJurisdiction);
        const json = original.toJSON();
        const restored = MarketingStatus.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new MarketingStatus(marketingStatuses.marketed);
        const updated = original.with({
          status: {
            coding: [{ code: 'suspended' }],
          },
        });

        expect(updated).not.toBe(original);
        expect(updated.status.coding?.[0].code).toBe('suspended');
        expect(original.status.coding?.[0].code).toBe('active');
      });

      it('should apply transform function correctly', () => {
        const ms = new MarketingStatus(marketingStatuses.marketed);
        const transformed = ms.applyTransform((data) => ({
          status: {
            ...data.status,
            text: data.status.text?.toUpperCase(),
          },
        }));

        expect(transformed.status.text).toBe('PRODUCT IS ACTIVELY MARKETED');
        expect(ms.status.text).toBe('Product is actively marketed');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new MarketingStatus(marketingStatuses.withJurisdiction);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned country', () => {
        const original = new MarketingStatus(marketingStatuses.marketed);
        const cloned = original.clone();

        if (cloned.country.coding?.[0]) {
          cloned.country.coding[0].code = 'CA';
        }

        expect(original.country.coding?.[0].code).toBe('US');
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const ms = new MarketingStatus(marketingStatuses.marketed);
        const str = ms.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('MarketingStatus');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _restoreDate extension', () => {
        const ms = new MarketingStatus({
          country: { coding: [{ code: 'US' }] },
          status: { coding: [{ code: 'active' }] },
          dateRange: { start: '2024-01-01' },
          restoreDate: '2025-01-01',
          _restoreDate: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'restore-info' },
            ],
          },
        });

        expect(ms._restoreDate?.extension?.[0]?.valueString).toBe('restore-info');
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const ms = new MarketingStatus({
          id: 'ms-1',
          country: { coding: [{ code: 'US' }] },
          status: { coding: [{ code: 'active' }] },
          dateRange: { start: '2024-01-01' },
        });

        expect(ms.id).toBe('ms-1');
      });

      it('should handle extension property', () => {
        const ms = new MarketingStatus({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          country: { coding: [{ code: 'US' }] },
          status: { coding: [{ code: 'active' }] },
          dateRange: { start: '2024-01-01' },
        });

        expect(ms.extension).toHaveLength(1);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const ms = new MarketingStatusBuilder().build();
        expect(ms).toBeInstanceOf(MarketingStatus);
      });

      it('should build with country', () => {
        const ms = new MarketingStatusBuilder()
          .setCountry({
            coding: [{ code: 'US', display: 'United States' }],
          })
          .build();

        expect(ms.country.coding?.[0].code).toBe('US');
      });

      it('should build with status', () => {
        const ms = new MarketingStatusBuilder()
          .setStatus({
            coding: [{ code: 'active' }],
          })
          .build();

        expect(ms.status.coding?.[0].code).toBe('active');
      });

      it('should build with date range', () => {
        const ms = new MarketingStatusBuilder()
          .setDateRange({
            start: '2024-01-01',
            end: '2024-12-31',
          })
          .build();

        expect(ms.dateRange.start).toBe('2024-01-01');
        expect(ms.dateRange.end).toBe('2024-12-31');
      });

      it('should build with jurisdiction', () => {
        const ms = new MarketingStatusBuilder()
          .setJurisdiction({
            coding: [{ code: 'US-CA', display: 'California' }],
          })
          .build();

        expect(ms.jurisdiction?.coding?.[0].code).toBe('US-CA');
      });

      it('should build with restore date', () => {
        const ms = new MarketingStatusBuilder()
          .setRestoreDate('2025-01-01')
          .build();

        expect(ms.restoreDate).toBe('2025-01-01');
      });

      it('should build complete marketing status', () => {
        const ms = new MarketingStatusBuilder()
          .setCountry({
            coding: [{ system: 'urn:iso:std:iso:3166', code: 'US' }],
          })
          .setJurisdiction({
            coding: [{ code: 'US-NY' }],
          })
          .setStatus({
            coding: [{ code: 'active' }],
          })
          .setDateRange({
            start: '2024-01-01',
          })
          .build();

        expect(ms.country.coding?.[0].code).toBe('US');
        expect(ms.jurisdiction?.coding?.[0].code).toBe('US-NY');
        expect(ms.status.coding?.[0].code).toBe('active');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new MarketingStatusBuilder()
          .setCountry({ coding: [{ code: 'US' }] })
          .setStatus({ coding: [{ code: 'active' }] });

        expect(builder).toBeInstanceOf(MarketingStatusBuilder);
      });

      it('should allow overwriting properties', () => {
        const ms = new MarketingStatusBuilder()
          .setCountry({ coding: [{ code: 'US' }] })
          .setCountry({ coding: [{ code: 'CA' }] })
          .build();

        expect(ms.country.coding?.[0].code).toBe('CA');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const ms = new MarketingStatusBuilder()
          .setId('ms-1')
          .setCountry({ coding: [{ code: 'US' }] })
          .build();

        expect(ms.id).toBe('ms-1');
      });

      it('should add extension from ElementBuilder', () => {
        const ms = new MarketingStatusBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setCountry({ coding: [{ code: 'US' }] })
          .build();

        expect(ms.extension).toHaveLength(1);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const ms = new MarketingStatusBuilder()
          .setCountry({ coding: [{ code: 'US' }] })
          .setStatus({ coding: [{ code: 'active' }] })
          .setDateRange({ start: '2024-01-01' })
          .build();

        const json = ms.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new MarketingStatusBuilder()
          .setCountry({ coding: [{ code: 'US' }] })
          .setStatus({ coding: [{ code: 'active' }] })
          .setDateRange({ start: '2024-01-01' })
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
    it('should work in medicinal product definition scenario', () => {
      const productMarketingStatuses = [
        new MarketingStatusBuilder()
          .setCountry({
            coding: [{ system: 'urn:iso:std:iso:3166', code: 'US' }],
          })
          .setStatus({
            coding: [{ code: 'active', display: 'Actively marketed' }],
          })
          .setDateRange({ start: '2020-01-15' })
          .build(),
        new MarketingStatusBuilder()
          .setCountry({
            coding: [{ system: 'urn:iso:std:iso:3166', code: 'CA' }],
          })
          .setStatus({
            coding: [{ code: 'active', display: 'Actively marketed' }],
          })
          .setDateRange({ start: '2020-06-01' })
          .build(),
      ];

      expect(productMarketingStatuses).toHaveLength(2);
      expect(productMarketingStatuses[0].country.coding?.[0].code).toBe('US');
      expect(productMarketingStatuses[1].country.coding?.[0].code).toBe('CA');
    });

    it('should work in product withdrawal scenario', () => {
      const withdrawalStatus = new MarketingStatus(marketingStatuses.withdrawn);

      expect(withdrawalStatus.status.coding?.[0].code).toBe('retired');
      expect(withdrawalStatus.dateRange.end).toBeDefined();

      const json = withdrawalStatus.toJSON();
      const restored = MarketingStatus.fromJSON(json);

      expect(restored.dateRange.end).toBe('2023-03-31');
    });

    it('should work in regional authorization scenario', () => {
      const regionalStatus = new MarketingStatus(marketingStatuses.withJurisdiction);

      expect(regionalStatus.country.coding?.[0].code).toBe('DE');
      expect(regionalStatus.jurisdiction?.coding?.[0].code).toBe('DE-BY');
    });

    it('should handle status update', () => {
      const original = new MarketingStatus(marketingStatuses.marketed);

      const updated = original.with({
        status: {
          coding: [{ code: 'suspended', display: 'Suspended' }],
          text: 'Product temporarily suspended',
        },
        dateRange: {
          ...original.dateRange,
          end: '2024-06-30',
        },
      });

      expect(updated.status.coding?.[0].code).toBe('suspended');
      expect(updated.dateRange.end).toBe('2024-06-30');
      expect(original.status.coding?.[0].code).toBe('active');
    });

    it('should work in multi-country authorization scenario', () => {
      const multiCountryStatuses = [
        new MarketingStatusBuilder()
          .setCountry({ coding: [{ code: 'DE' }] })
          .setStatus({ coding: [{ code: 'active' }] })
          .setDateRange({ start: '2020-01-01' })
          .build(),
        new MarketingStatusBuilder()
          .setCountry({ coding: [{ code: 'FR' }] })
          .setStatus({ coding: [{ code: 'active' }] })
          .setDateRange({ start: '2020-03-01' })
          .build(),
        new MarketingStatusBuilder()
          .setCountry({ coding: [{ code: 'IT' }] })
          .setStatus({ coding: [{ code: 'pending' }] })
          .setDateRange({ start: '2024-01-01' })
          .build(),
      ];

      expect(multiCountryStatuses.map((s) => s.country.coding?.[0].code)).toEqual(['DE', 'FR', 'IT']);
      expect(multiCountryStatuses[2].status.coding?.[0].code).toBe('pending');
    });

    it('should work in product restoration scenario', () => {
      const suspendedStatus = new MarketingStatus(marketingStatuses.withRestoreDate);

      expect(suspendedStatus.status.coding?.[0].code).toBe('suspended');
      expect(suspendedStatus.restoreDate).toBe('2024-01-01');
    });

    it('should work in EU centralized authorization scenario', () => {
      const euStatus = new MarketingStatus(marketingStatuses.euMarket);

      expect(euStatus.country.coding?.[0].code).toBe('EU');
      expect(euStatus.country.text).toContain('centralized');
    });
  });
});
