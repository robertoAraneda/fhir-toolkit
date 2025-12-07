/**
 * ParameterDefinition Model and Builder Tests
 *
 * Tests for the ParameterDefinition datatype class and its builder.
 * ParameterDefinition specifies parameters to a module (input and output parameters).
 */

import { describe, it, expect } from 'vitest';
import { ParameterDefinition, ParameterDefinitionBuilder } from '../../../src/index.js';
import type { IParameterDefinition } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const parameterDefinitions = {
  simpleInput: {
    name: 'patientId',
    use: 'in',
    type: 'string',
  } as IParameterDefinition,
  simpleOutput: {
    name: 'result',
    use: 'out',
    type: 'Bundle',
  } as IParameterDefinition,
  withMinMax: {
    name: 'observations',
    use: 'in',
    min: 0,
    max: '*',
    type: 'Observation',
    documentation: 'The observations to evaluate',
  } as IParameterDefinition,
  withProfile: {
    name: 'patient',
    use: 'in',
    min: 1,
    max: '1',
    type: 'Patient',
    profile: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient',
    documentation: 'The patient resource for evaluation',
  } as IParameterDefinition,
  requiredInput: {
    name: 'measurementPeriod',
    use: 'in',
    min: 1,
    max: '1',
    type: 'Period',
    documentation: 'The measurement period for the evaluation',
  } as IParameterDefinition,
  optionalOutput: {
    name: 'warnings',
    use: 'out',
    min: 0,
    max: '*',
    type: 'OperationOutcome',
    documentation: 'Any warnings generated during evaluation',
  } as IParameterDefinition,
};

describe('ParameterDefinition', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const pd = new ParameterDefinition({});
        expect(pd).toBeInstanceOf(ParameterDefinition);
      });

      it('should create simple input parameter', () => {
        const pd = new ParameterDefinition(parameterDefinitions.simpleInput);
        expect(pd.name).toBe('patientId');
        expect(pd.use).toBe('in');
        expect(pd.type).toBe('string');
      });

      it('should create simple output parameter', () => {
        const pd = new ParameterDefinition(parameterDefinitions.simpleOutput);
        expect(pd.name).toBe('result');
        expect(pd.use).toBe('out');
        expect(pd.type).toBe('Bundle');
      });

      it('should create parameter with min/max cardinality', () => {
        const pd = new ParameterDefinition(parameterDefinitions.withMinMax);
        expect(pd.min).toBe(0);
        expect(pd.max).toBe('*');
        expect(pd.documentation).toBeDefined();
      });

      it('should create parameter with profile', () => {
        const pd = new ParameterDefinition(parameterDefinitions.withProfile);
        expect(pd.profile).toContain('us-core-patient');
        expect(pd.min).toBe(1);
        expect(pd.max).toBe('1');
      });

      it('should create required input parameter', () => {
        const pd = new ParameterDefinition(parameterDefinitions.requiredInput);
        expect(pd.min).toBe(1);
        expect(pd.type).toBe('Period');
      });

      it('should create optional output parameter', () => {
        const pd = new ParameterDefinition(parameterDefinitions.optionalOutput);
        expect(pd.min).toBe(0);
        expect(pd.max).toBe('*');
        expect(pd.use).toBe('out');
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const pd = new ParameterDefinition(parameterDefinitions.withProfile);
        const json = pd.toJSON();

        expect(json.name).toBe('patient');
        expect(json.use).toBe('in');
        expect(json.profile).toContain('us-core');
      });

      it('should omit undefined properties in JSON', () => {
        const pd = new ParameterDefinition(parameterDefinitions.simpleInput);
        const json = pd.toJSON();

        expect(json.name).toBe('patientId');
        expect(json.use).toBe('in');
        expect(json).not.toHaveProperty('min');
        expect(json).not.toHaveProperty('max');
        expect(json).not.toHaveProperty('profile');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new ParameterDefinition(parameterDefinitions.withProfile);
        expectSerializationRoundtrip(original, ParameterDefinition);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IParameterDefinition = {
          name: 'testParam',
          use: 'in',
          type: 'string',
        };
        const pd = ParameterDefinition.fromJSON(json);

        expect(pd).toBeInstanceOf(ParameterDefinition);
        expect(pd.name).toBe('testParam');
      });

      it('should create identical instance from JSON', () => {
        const original = new ParameterDefinition(parameterDefinitions.withMinMax);
        const json = original.toJSON();
        const restored = ParameterDefinition.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new ParameterDefinition(parameterDefinitions.simpleInput);
        const updated = original.with({ name: 'newName' });

        expect(updated).not.toBe(original);
        expect(updated.name).toBe('newName');
        expect(original.name).toBe('patientId');
      });

      it('should apply transform function correctly', () => {
        const pd = new ParameterDefinition(parameterDefinitions.withMinMax);
        const transformed = pd.applyTransform((data) => ({
          documentation: data.documentation?.toUpperCase(),
        }));

        expect(transformed.documentation).toBe('THE OBSERVATIONS TO EVALUATE');
        expect(pd.documentation).toBe('The observations to evaluate');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new ParameterDefinition(parameterDefinitions.withProfile);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying clone', () => {
        const original = new ParameterDefinition(parameterDefinitions.simpleInput);
        const cloned = original.clone();

        cloned.name = 'modified';

        expect(original.name).toBe('patientId');
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const pd = new ParameterDefinition(parameterDefinitions.simpleInput);
        const str = pd.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('ParameterDefinition');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _name extension', () => {
        const pd = new ParameterDefinition({
          name: 'param',
          use: 'in',
          type: 'string',
          _name: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'name-info' },
            ],
          },
        });

        expect(pd._name?.extension?.[0]?.valueString).toBe('name-info');
      });

      it('should handle _use extension', () => {
        const pd = new ParameterDefinition({
          name: 'param',
          use: 'in',
          type: 'string',
          _use: {
            id: 'use-ext',
          },
        });

        expect(pd._use?.id).toBe('use-ext');
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const pd = new ParameterDefinition({
          id: 'pd-1',
          name: 'param',
          use: 'in',
          type: 'string',
        });

        expect(pd.id).toBe('pd-1');
      });

      it('should handle extension property', () => {
        const pd = new ParameterDefinition({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          name: 'param',
          use: 'in',
          type: 'string',
        });

        expect(pd.extension).toHaveLength(1);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const pd = new ParameterDefinitionBuilder().build();
        expect(pd).toBeInstanceOf(ParameterDefinition);
      });

      it('should build with name', () => {
        const pd = new ParameterDefinitionBuilder()
          .setName('testParam')
          .build();

        expect(pd.name).toBe('testParam');
      });

      it('should build with use', () => {
        const pd = new ParameterDefinitionBuilder()
          .setUse('in')
          .build();

        expect(pd.use).toBe('in');
      });

      it('should build with type', () => {
        const pd = new ParameterDefinitionBuilder()
          .setType('Patient')
          .build();

        expect(pd.type).toBe('Patient');
      });

      it('should build with min/max', () => {
        const pd = new ParameterDefinitionBuilder()
          .setMin(0)
          .setMax('*')
          .build();

        expect(pd.min).toBe(0);
        expect(pd.max).toBe('*');
      });

      it('should build with documentation', () => {
        const pd = new ParameterDefinitionBuilder()
          .setDocumentation('This is the parameter description')
          .build();

        expect(pd.documentation).toContain('parameter description');
      });

      it('should build with profile', () => {
        const pd = new ParameterDefinitionBuilder()
          .setType('Patient')
          .setProfile('http://hl7.org/fhir/StructureDefinition/Patient')
          .build();

        expect(pd.profile).toContain('Patient');
      });

      it('should build complete parameter definition', () => {
        const pd = new ParameterDefinitionBuilder()
          .setName('patient')
          .setUse('in')
          .setMin(1)
          .setMax('1')
          .setType('Patient')
          .setProfile('http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient')
          .setDocumentation('The patient to evaluate')
          .build();

        expect(pd.name).toBe('patient');
        expect(pd.use).toBe('in');
        expect(pd.min).toBe(1);
        expect(pd.type).toBe('Patient');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new ParameterDefinitionBuilder()
          .setName('param')
          .setUse('in')
          .setType('string');

        expect(builder).toBeInstanceOf(ParameterDefinitionBuilder);
      });

      it('should allow overwriting properties', () => {
        const pd = new ParameterDefinitionBuilder()
          .setName('first')
          .setName('second')
          .build();

        expect(pd.name).toBe('second');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const pd = new ParameterDefinitionBuilder()
          .setId('pd-1')
          .setName('param')
          .build();

        expect(pd.id).toBe('pd-1');
      });

      it('should add extension from ElementBuilder', () => {
        const pd = new ParameterDefinitionBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setName('param')
          .build();

        expect(pd.extension).toHaveLength(1);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const pd = new ParameterDefinitionBuilder()
          .setName('param')
          .setUse('in')
          .setType('string')
          .build();

        const json = pd.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new ParameterDefinitionBuilder()
          .setName('param')
          .setUse('out')
          .setType('Bundle')
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
    it('should work in library definition scenario', () => {
      const libraryParams = [
        new ParameterDefinitionBuilder()
          .setName('Patient')
          .setUse('in')
          .setMin(1)
          .setMax('1')
          .setType('Patient')
          .setDocumentation('The patient context for evaluation')
          .build(),
        new ParameterDefinitionBuilder()
          .setName('MeasurementPeriod')
          .setUse('in')
          .setMin(1)
          .setMax('1')
          .setType('Period')
          .setDocumentation('The measurement period for the evaluation')
          .build(),
        new ParameterDefinitionBuilder()
          .setName('Result')
          .setUse('out')
          .setMin(0)
          .setMax('*')
          .setType('Resource')
          .setDocumentation('The evaluation results')
          .build(),
      ];

      expect(libraryParams).toHaveLength(3);
      expect(libraryParams[0].use).toBe('in');
      expect(libraryParams[2].use).toBe('out');
    });

    it('should work in operation definition scenario', () => {
      const operationParams = new ParameterDefinition(parameterDefinitions.withProfile);

      expect(operationParams.name).toBe('patient');
      expect(operationParams.profile).toBeDefined();

      const json = operationParams.toJSON();
      const restored = ParameterDefinition.fromJSON(json);

      expect(restored.min).toBe(1);
    });

    it('should work in measure parameter scenario', () => {
      const measureParams = [
        new ParameterDefinitionBuilder()
          .setName('numerator')
          .setUse('out')
          .setMin(0)
          .setMax('1')
          .setType('integer')
          .build(),
        new ParameterDefinitionBuilder()
          .setName('denominator')
          .setUse('out')
          .setMin(0)
          .setMax('1')
          .setType('integer')
          .build(),
      ];

      expect(measureParams[0].type).toBe('integer');
      expect(measureParams[1].type).toBe('integer');
    });

    it('should handle parameter update', () => {
      const original = new ParameterDefinition(parameterDefinitions.simpleInput);

      const updated = original.with({
        documentation: 'Updated documentation',
      });

      expect(updated.documentation).toBe('Updated documentation');
      expect(original.documentation).toBeUndefined();
    });

    it('should work in CQL library parameter scenario', () => {
      const cqlParams = [
        new ParameterDefinitionBuilder()
          .setName('Encounters')
          .setUse('in')
          .setMin(0)
          .setMax('*')
          .setType('Encounter')
          .setProfile('http://hl7.org/fhir/StructureDefinition/Encounter')
          .setDocumentation('List of encounters to consider')
          .build(),
      ];

      expect(cqlParams[0].max).toBe('*');
      expect(cqlParams[0].profile).toBeDefined();
    });

    it('should work in plan definition action scenario', () => {
      const actionInputs = [
        new ParameterDefinitionBuilder()
          .setName('patient')
          .setUse('in')
          .setMin(1)
          .setMax('1')
          .setType('Patient')
          .build(),
        new ParameterDefinitionBuilder()
          .setName('condition')
          .setUse('in')
          .setMin(0)
          .setMax('1')
          .setType('Condition')
          .build(),
      ];

      const actionOutputs = [
        new ParameterDefinitionBuilder()
          .setName('recommendation')
          .setUse('out')
          .setMin(0)
          .setMax('*')
          .setType('ServiceRequest')
          .build(),
      ];

      expect(actionInputs.every((p) => p.use === 'in')).toBe(true);
      expect(actionOutputs.every((p) => p.use === 'out')).toBe(true);
    });
  });
});
