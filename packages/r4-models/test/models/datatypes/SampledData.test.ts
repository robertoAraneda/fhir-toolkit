/**
 * SampledData Model and Builder Tests
 *
 * Tests for the SampledData datatype class and its builder.
 * SampledData represents a series of measurements taken by a device.
 */

import { describe, it, expect } from 'vitest';
import { SampledData, SampledDataBuilder } from '../../../src/index.js';
import type { ISampledData } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const sampledDataSets = {
  simple: {
    origin: {
      value: 0,
      unit: 'mV',
      system: 'http://unitsofmeasure.org',
      code: 'mV',
    },
    period: 10,
    dimensions: 1,
    data: '0 10 20 30 40 50',
  } as ISampledData,
  ecg: {
    origin: {
      value: 0,
      unit: 'mV',
      system: 'http://unitsofmeasure.org',
      code: 'mV',
    },
    period: 4,
    factor: 1.0,
    lowerLimit: -5,
    upperLimit: 5,
    dimensions: 1,
    data: '0.1 0.2 0.5 1.2 0.8 0.3 0.1 -0.1 -0.2 0.0',
  } as ISampledData,
  waveform: {
    origin: {
      value: 0,
      unit: 'mmHg',
      system: 'http://unitsofmeasure.org',
      code: 'mm[Hg]',
    },
    period: 20,
    factor: 1.0,
    dimensions: 1,
    data: '80 85 90 120 115 100 85 80',
  } as ISampledData,
  multiDimensional: {
    origin: {
      value: 0,
      unit: 'uV',
      system: 'http://unitsofmeasure.org',
      code: 'uV',
    },
    period: 2,
    dimensions: 3,
    data: '1 2 3 4 5 6 7 8 9',
  } as ISampledData,
  withSpecialValues: {
    origin: {
      value: 0,
      unit: 'mV',
    },
    period: 10,
    dimensions: 1,
    data: '1 E 3 U 5 L 7',
  } as ISampledData,
};

describe('SampledData', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const sd = new SampledData({});
        expect(sd).toBeInstanceOf(SampledData);
      });

      it('should create simple sampled data', () => {
        const sd = new SampledData(sampledDataSets.simple);
        expect(sd.origin.value).toBe(0);
        expect(sd.origin.unit).toBe('mV');
        expect(sd.period).toBe(10);
        expect(sd.dimensions).toBe(1);
        expect(sd.data).toBe('0 10 20 30 40 50');
      });

      it('should create ECG sampled data', () => {
        const sd = new SampledData(sampledDataSets.ecg);
        expect(sd.period).toBe(4);
        expect(sd.factor).toBe(1.0);
        expect(sd.lowerLimit).toBe(-5);
        expect(sd.upperLimit).toBe(5);
      });

      it('should create waveform sampled data', () => {
        const sd = new SampledData(sampledDataSets.waveform);
        expect(sd.origin.unit).toBe('mmHg');
        expect(sd.period).toBe(20);
      });

      it('should create multi-dimensional sampled data', () => {
        const sd = new SampledData(sampledDataSets.multiDimensional);
        expect(sd.dimensions).toBe(3);
        expect(sd.origin.unit).toBe('uV');
      });

      it('should create sampled data with special values', () => {
        const sd = new SampledData(sampledDataSets.withSpecialValues);
        expect(sd.data).toContain('E');
        expect(sd.data).toContain('U');
        expect(sd.data).toContain('L');
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const sd = new SampledData(sampledDataSets.ecg);
        const json = sd.toJSON();

        expect(json.origin.value).toBe(0);
        expect(json.period).toBe(4);
        expect(json.factor).toBe(1.0);
        expect(json.lowerLimit).toBe(-5);
        expect(json.upperLimit).toBe(5);
      });

      it('should omit undefined properties in JSON', () => {
        const sd = new SampledData(sampledDataSets.simple);
        const json = sd.toJSON();

        expect(json.origin).toBeDefined();
        expect(json.period).toBeDefined();
        expect(json.dimensions).toBeDefined();
        expect(json).not.toHaveProperty('factor');
        expect(json).not.toHaveProperty('lowerLimit');
        expect(json).not.toHaveProperty('upperLimit');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new SampledData(sampledDataSets.ecg);
        expectSerializationRoundtrip(original, SampledData);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: ISampledData = {
          origin: { value: 0, unit: 'mV' },
          period: 5,
          dimensions: 1,
          data: '1 2 3',
        };
        const sd = SampledData.fromJSON(json);

        expect(sd).toBeInstanceOf(SampledData);
        expect(sd.period).toBe(5);
      });

      it('should create identical instance from JSON', () => {
        const original = new SampledData(sampledDataSets.ecg);
        const json = original.toJSON();
        const restored = SampledData.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new SampledData(sampledDataSets.simple);
        const updated = original.with({ period: 20 });

        expect(updated).not.toBe(original);
        expect(updated.period).toBe(20);
        expect(original.period).toBe(10);
      });

      it('should apply transform function correctly', () => {
        const sd = new SampledData(sampledDataSets.simple);
        const transformed = sd.applyTransform((data) => ({
          data: data.data?.split(' ').map((v) => String(Number(v) * 2)).join(' '),
        }));

        expect(transformed.data).toBe('0 20 40 60 80 100');
        expect(sd.data).toBe('0 10 20 30 40 50');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new SampledData(sampledDataSets.ecg);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned origin', () => {
        const original = new SampledData(sampledDataSets.simple);
        const cloned = original.clone();

        if (cloned.origin) {
          cloned.origin.value = 100;
        }

        expect(original.origin.value).toBe(0);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const sd = new SampledData(sampledDataSets.simple);
        const str = sd.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('SampledData');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _period extension', () => {
        const sd = new SampledData({
          ...sampledDataSets.simple,
          _period: {
            extension: [
              { url: 'http://example.org/precision', valueInteger: 2 },
            ],
          },
        });

        expect(sd._period?.extension?.[0]?.valueInteger).toBe(2);
      });

      it('should handle _data extension', () => {
        const sd = new SampledData({
          ...sampledDataSets.simple,
          _data: {
            id: 'data-ext',
          },
        });

        expect(sd._data?.id).toBe('data-ext');
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const sd = new SampledData({
          id: 'sd-1',
          ...sampledDataSets.simple,
        });

        expect(sd.id).toBe('sd-1');
      });

      it('should handle extension property', () => {
        const sd = new SampledData({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          ...sampledDataSets.simple,
        });

        expect(sd.extension).toHaveLength(1);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const sd = new SampledDataBuilder().build();
        expect(sd).toBeInstanceOf(SampledData);
      });

      it('should build with required properties', () => {
        const sd = new SampledDataBuilder()
          .setOrigin({ value: 0, unit: 'mV' })
          .setPeriod(10)
          .setDimensions(1)
          .build();

        expect(sd.origin.value).toBe(0);
        expect(sd.period).toBe(10);
        expect(sd.dimensions).toBe(1);
      });

      it('should build with all properties', () => {
        const sd = new SampledDataBuilder()
          .setOrigin({ value: 0, unit: 'mV', system: 'http://unitsofmeasure.org', code: 'mV' })
          .setPeriod(4)
          .setFactor(1.0)
          .setLowerLimit(-5)
          .setUpperLimit(5)
          .setDimensions(1)
          .setData('0.1 0.2 0.5 1.2')
          .build();

        expect(sd.factor).toBe(1.0);
        expect(sd.lowerLimit).toBe(-5);
        expect(sd.upperLimit).toBe(5);
        expect(sd.data).toBe('0.1 0.2 0.5 1.2');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new SampledDataBuilder()
          .setOrigin({ value: 0, unit: 'mV' })
          .setPeriod(10)
          .setDimensions(1);

        expect(builder).toBeInstanceOf(SampledDataBuilder);
      });

      it('should allow overwriting properties', () => {
        const sd = new SampledDataBuilder()
          .setPeriod(10)
          .setPeriod(20)
          .build();

        expect(sd.period).toBe(20);
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const sd = new SampledDataBuilder()
          .setId('sd-1')
          .setOrigin({ value: 0, unit: 'mV' })
          .setPeriod(10)
          .setDimensions(1)
          .build();

        expect(sd.id).toBe('sd-1');
      });

      it('should add extension from ElementBuilder', () => {
        const sd = new SampledDataBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setOrigin({ value: 0, unit: 'mV' })
          .setPeriod(10)
          .setDimensions(1)
          .build();

        expect(sd.extension).toHaveLength(1);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const sd = new SampledDataBuilder()
          .setOrigin({ value: 0, unit: 'mV' })
          .setPeriod(10)
          .setDimensions(1)
          .setData('1 2 3')
          .build();

        const json = sd.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new SampledDataBuilder()
          .setOrigin({ value: 0, unit: 'mV' })
          .setPeriod(10)
          .setDimensions(1)
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
    it('should work in ECG observation scenario', () => {
      const ecgData = new SampledDataBuilder()
        .setOrigin({
          value: 0,
          unit: 'mV',
          system: 'http://unitsofmeasure.org',
          code: 'mV',
        })
        .setPeriod(4) // 250 Hz sampling rate
        .setFactor(1.0)
        .setLowerLimit(-5)
        .setUpperLimit(5)
        .setDimensions(1)
        .setData('0.1 0.2 0.5 1.2 0.8 0.3 0.1 -0.1 -0.2 0.0')
        .build();

      expect(ecgData.period).toBe(4);
      expect(ecgData.lowerLimit).toBe(-5);
      expect(ecgData.upperLimit).toBe(5);

      const json = ecgData.toJSON();
      const restored = SampledData.fromJSON(json);

      expect(restored.data).toBe('0.1 0.2 0.5 1.2 0.8 0.3 0.1 -0.1 -0.2 0.0');
    });

    it('should work in blood pressure waveform scenario', () => {
      const bpWaveform = new SampledData(sampledDataSets.waveform);

      expect(bpWaveform.origin.unit).toBe('mmHg');
      expect(bpWaveform.data).toContain('120');
    });

    it('should work in EEG multi-channel scenario', () => {
      const eegData = new SampledData({
        origin: { value: 0, unit: 'uV' },
        period: 2, // 500 Hz
        dimensions: 3, // 3 channels
        data: '10 20 15 12 22 18 8 25 20',
      });

      expect(eegData.dimensions).toBe(3);
    });

    it('should handle error and limit markers', () => {
      const dataWithMarkers = new SampledData(sampledDataSets.withSpecialValues);

      // E = error, U = above upper limit, L = below lower limit
      expect(dataWithMarkers.data).toContain('E');
      expect(dataWithMarkers.data).toContain('U');
      expect(dataWithMarkers.data).toContain('L');
    });

    it('should handle sampled data modification', () => {
      const original = new SampledData(sampledDataSets.simple);

      const updated = original.with({
        factor: 2.0,
      });

      expect(updated.factor).toBe(2.0);
      expect(original.factor).toBeUndefined();
    });

    it('should work in continuous monitoring scenario', () => {
      const monitoringData = new SampledDataBuilder()
        .setOrigin({ value: 0, unit: 'bpm' })
        .setPeriod(1000) // 1 sample per second
        .setDimensions(1)
        .setLowerLimit(40)
        .setUpperLimit(200)
        .setData('72 73 71 75 78 76 74 72')
        .build();

      expect(monitoringData.lowerLimit).toBe(40);
      expect(monitoringData.upperLimit).toBe(200);
    });
  });
});
