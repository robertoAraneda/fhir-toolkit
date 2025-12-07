/**
 * Expression Model and Builder Tests
 *
 * Tests for the Expression datatype class and its builder.
 * Expression represents a computable expression that is evaluated in a specified context.
 */

import { describe, it, expect } from 'vitest';
import { Expression, ExpressionBuilder } from '../../../src/index.js';
import type { IExpression } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const expressions = {
  fhirpath: {
    description: 'Check if patient is adult',
    name: 'isAdult',
    language: 'text/fhirpath',
    expression: 'Patient.birthDate <= today() - 18 years',
  } as IExpression,
  cql: {
    description: 'Calculate BMI',
    name: 'calculateBMI',
    language: 'text/cql',
    expression: 'weight / (height * height)',
  } as IExpression,
  fhirQuery: {
    description: 'Find active conditions',
    language: 'application/x-fhir-query',
    expression: 'Condition?clinical-status=active&patient={{%patient}}',
  } as IExpression,
  withReference: {
    description: 'Complex calculation from library',
    name: 'complexCalc',
    language: 'text/cql',
    reference: 'Library/calculation-library',
  } as IExpression,
  simple: {
    language: 'text/fhirpath',
    expression: 'Patient.name.given.first()',
  } as IExpression,
};

describe('Expression', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const expr = new Expression({});
        expect(expr).toBeInstanceOf(Expression);
      });

      it('should create FHIRPath expression', () => {
        const expr = new Expression(expressions.fhirpath);
        expect(expr.description).toBe('Check if patient is adult');
        expect(expr.name).toBe('isAdult');
        expect(expr.language).toBe('text/fhirpath');
        expect(expr.expression).toBe('Patient.birthDate <= today() - 18 years');
      });

      it('should create CQL expression', () => {
        const expr = new Expression(expressions.cql);
        expect(expr.language).toBe('text/cql');
        expect(expr.name).toBe('calculateBMI');
      });

      it('should create FHIR query expression', () => {
        const expr = new Expression(expressions.fhirQuery);
        expect(expr.language).toBe('application/x-fhir-query');
        expect(expr.expression).toContain('Condition');
      });

      it('should create expression with reference', () => {
        const expr = new Expression(expressions.withReference);
        expect(expr.reference).toBe('Library/calculation-library');
        expect(expr.expression).toBeUndefined();
      });

      it('should create simple expression', () => {
        const expr = new Expression(expressions.simple);
        expect(expr.language).toBe('text/fhirpath');
        expect(expr.description).toBeUndefined();
        expect(expr.name).toBeUndefined();
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const expr = new Expression(expressions.fhirpath);
        const json = expr.toJSON();

        expect(json.description).toBe('Check if patient is adult');
        expect(json.name).toBe('isAdult');
        expect(json.language).toBe('text/fhirpath');
        expect(json.expression).toBe('Patient.birthDate <= today() - 18 years');
      });

      it('should omit undefined properties in JSON', () => {
        const expr = new Expression(expressions.simple);
        const json = expr.toJSON();

        expect(json.language).toBe('text/fhirpath');
        expect(json.expression).toBeDefined();
        expect(json).not.toHaveProperty('description');
        expect(json).not.toHaveProperty('name');
        expect(json).not.toHaveProperty('reference');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Expression(expressions.fhirpath);
        expectSerializationRoundtrip(original, Expression);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IExpression = {
          language: 'text/fhirpath',
          expression: 'Patient.active',
        };
        const expr = Expression.fromJSON(json);

        expect(expr).toBeInstanceOf(Expression);
        expect(expr.language).toBe('text/fhirpath');
        expect(expr.expression).toBe('Patient.active');
      });

      it('should create identical instance from JSON', () => {
        const original = new Expression(expressions.fhirpath);
        const json = original.toJSON();
        const restored = Expression.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Expression(expressions.simple);
        const updated = original.with({
          expression: 'Patient.name.family',
        });

        expect(updated).not.toBe(original);
        expect(updated.expression).toBe('Patient.name.family');
        expect(original.expression).toBe('Patient.name.given.first()');
      });

      it('should allow changing multiple properties with .with()', () => {
        const original = new Expression(expressions.simple);
        const updated = original.with({
          name: 'getFamilyName',
          description: 'Get patient family name',
          expression: 'Patient.name.family',
        });

        expect(updated.name).toBe('getFamilyName');
        expect(updated.description).toBe('Get patient family name');
        expect(original.name).toBeUndefined();
      });

      it('should apply transform function correctly', () => {
        const expr = new Expression(expressions.fhirpath);
        const transformed = expr.applyTransform((data) => ({
          name: data.name?.toUpperCase(),
        }));

        expect(transformed.name).toBe('ISADULT');
        expect(expr.name).toBe('isAdult');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Expression(expressions.fhirpath);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should clone all properties', () => {
        const original = new Expression(expressions.fhirpath);
        const cloned = original.clone();

        expect(cloned.description).toBe(original.description);
        expect(cloned.name).toBe(original.name);
        expect(cloned.language).toBe(original.language);
        expect(cloned.expression).toBe(original.expression);
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const expr = new Expression(expressions.fhirpath);
        const str = expr.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Expression');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _expression extension', () => {
        const expr = new Expression({
          language: 'text/fhirpath',
          expression: 'Patient.active',
          _expression: {
            extension: [
              { url: 'http://example.org/validated', valueBoolean: true },
            ],
          },
        });

        expect(expr._expression?.extension?.[0]?.valueBoolean).toBe(true);
      });

      it('should handle _language extension', () => {
        const expr = new Expression({
          language: 'text/fhirpath',
          _language: {
            id: 'lang-ext',
          },
        });

        expect(expr._language?.id).toBe('lang-ext');
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const expr = new Expression({
          id: 'expr-1',
          language: 'text/fhirpath',
          expression: 'Patient.active',
        });

        expect(expr.id).toBe('expr-1');
      });

      it('should handle extension property', () => {
        const expr = new Expression({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          language: 'text/fhirpath',
        });

        expect(expr.extension).toHaveLength(1);
        expect(expr.extension?.[0]?.url).toBe('http://example.org/ext');
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const expr = new ExpressionBuilder().build();
        expect(expr).toBeInstanceOf(Expression);
      });

      it('should build with language only', () => {
        const expr = new ExpressionBuilder()
          .setLanguage('text/fhirpath')
          .build();

        expect(expr.language).toBe('text/fhirpath');
      });

      it('should build with all properties', () => {
        const expr = new ExpressionBuilder()
          .setDescription('Check if patient is adult')
          .setName('isAdult')
          .setLanguage('text/fhirpath')
          .setExpression('Patient.birthDate <= today() - 18 years')
          .build();

        expect(expr.description).toBe('Check if patient is adult');
        expect(expr.name).toBe('isAdult');
        expect(expr.language).toBe('text/fhirpath');
        expect(expr.expression).toBe('Patient.birthDate <= today() - 18 years');
      });

      it('should build with reference', () => {
        const expr = new ExpressionBuilder()
          .setLanguage('text/cql')
          .setName('calculation')
          .setReference('Library/my-library')
          .build();

        expect(expr.reference).toBe('Library/my-library');
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new ExpressionBuilder()
          .setLanguage('text/fhirpath')
          .setExpression('Patient.active');

        expect(builder).toBeInstanceOf(ExpressionBuilder);
      });

      it('should allow overwriting properties', () => {
        const expr = new ExpressionBuilder()
          .setExpression('first')
          .setExpression('second')
          .build();

        expect(expr.expression).toBe('second');
      });
    });

    describe('Base Element Properties', () => {
      it('should set id from ElementBuilder', () => {
        const expr = new ExpressionBuilder()
          .setId('expr-1')
          .setLanguage('text/fhirpath')
          .build();

        expect(expr.id).toBe('expr-1');
      });

      it('should add extension from ElementBuilder', () => {
        const expr = new ExpressionBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setLanguage('text/fhirpath')
          .build();

        expect(expr.extension).toHaveLength(1);
        expect(expr.extension?.[0]?.url).toBe('http://example.org/fhir/ext');
      });
    });

    describe('Builder Reset', () => {
      it('should be reusable after build', () => {
        const builder = new ExpressionBuilder().setLanguage('text/fhirpath');
        const first = builder.build();

        builder.setLanguage('text/cql');
        const second = builder.build();

        expect(first.language).toBe('text/fhirpath');
        expect(second.language).toBe('text/cql');
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const expr = new ExpressionBuilder()
          .setLanguage('text/fhirpath')
          .setExpression('Patient.active')
          .setName('isActive')
          .build();

        const json = expr.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new ExpressionBuilder()
          .setLanguage('text/fhirpath')
          .setExpression('Patient.active')
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
    it('should work in clinical decision support scenario', () => {
      const cdsExpression = new ExpressionBuilder()
        .setDescription('Check if patient needs diabetes screening')
        .setName('needsDiabetesScreening')
        .setLanguage('text/cql')
        .setExpression('AgeInYears() >= 45 and not exists [Condition: "Diabetes"]')
        .build();

      expect(cdsExpression.name).toBe('needsDiabetesScreening');
      expect(cdsExpression.language).toBe('text/cql');

      const json = cdsExpression.toJSON();
      const restored = Expression.fromJSON(json);

      expect(restored.description).toContain('diabetes screening');
    });

    it('should work in questionnaire scenario', () => {
      const enableWhen = new Expression({
        language: 'text/fhirpath',
        expression: '%resource.item.where(linkId=\'smoker\').answer.value = true',
      });

      expect(enableWhen.expression).toContain('smoker');
    });

    it('should work in measure scenario', () => {
      const measureExpression = new ExpressionBuilder()
        .setDescription('Initial population')
        .setName('InitialPopulation')
        .setLanguage('text/cql')
        .setReference('Library/BreastCancerScreening')
        .build();

      expect(measureExpression.name).toBe('InitialPopulation');
      expect(measureExpression.reference).toBe('Library/BreastCancerScreening');
    });

    it('should handle expression update', () => {
      const original = new Expression(expressions.fhirpath);

      const updated = original.with({
        expression: 'Patient.birthDate <= today() - 21 years',
        description: 'Check if patient is 21 or older',
      });

      expect(updated.expression).toContain('21 years');
      expect(updated.description).toContain('21');
      expect(original.expression).toContain('18 years');
    });

    it('should work with FHIR query expressions', () => {
      const query = new Expression(expressions.fhirQuery);

      expect(query.language).toBe('application/x-fhir-query');
      expect(query.expression).toContain('{{%patient}}');
    });

    it('should handle multiple related expressions', () => {
      const expressions_arr = [
        new Expression({
          name: 'step1',
          language: 'text/fhirpath',
          expression: 'Patient.name.first()',
        }),
        new Expression({
          name: 'step2',
          language: 'text/fhirpath',
          expression: '%step1.given.first()',
        }),
        new Expression({
          name: 'result',
          language: 'text/fhirpath',
          expression: '%step2.upper()',
        }),
      ];

      expect(expressions_arr).toHaveLength(3);
      expect(expressions_arr[0].name).toBe('step1');
      expect(expressions_arr[2].expression).toContain('%step2');
    });
  });
});
