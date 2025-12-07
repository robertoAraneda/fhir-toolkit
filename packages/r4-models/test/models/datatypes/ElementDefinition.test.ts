/**
 * ElementDefinition Model and Builder Tests
 *
 * Tests for the ElementDefinition datatype class and its builder.
 * ElementDefinition captures constraints on each element within the resource, profile, or extension.
 */

import { describe, it, expect } from 'vitest';
import { ElementDefinition, ElementDefinitionBuilder } from '../../../src/index.js';
import type { IElementDefinition } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const elementDefinitions = {
  simpleElement: {
    path: 'Patient.name',
    min: 0,
    max: '*',
    short: 'A name associated with the patient',
    definition: 'A name associated with the individual.',
  } as IElementDefinition,
  requiredElement: {
    path: 'Patient.identifier',
    min: 1,
    max: '*',
    mustSupport: true,
    isSummary: true,
  } as IElementDefinition,
  withType: {
    path: 'Patient.birthDate',
    min: 0,
    max: '1',
    type: [
      {
        code: 'date',
      },
    ],
  } as IElementDefinition,
  withBinding: {
    path: 'Patient.gender',
    min: 0,
    max: '1',
    type: [{ code: 'code' }],
    binding: {
      strength: 'required',
      valueSet: 'http://hl7.org/fhir/ValueSet/administrative-gender',
    },
  } as IElementDefinition,
  withConstraint: {
    path: 'Patient.contact',
    min: 0,
    max: '*',
    constraint: [
      {
        key: 'pat-1',
        severity: 'error',
        human: 'SHALL at least contain a contact\'s details or a reference to an organization',
        expression: 'name.exists() or telecom.exists() or address.exists() or organization.exists()',
      },
    ],
  } as IElementDefinition,
  withSlicing: {
    path: 'Patient.identifier',
    slicing: {
      discriminator: [
        {
          type: 'value',
          path: 'system',
        },
      ],
      rules: 'open',
    },
    min: 0,
    max: '*',
  } as IElementDefinition,
  slice: {
    path: 'Patient.identifier',
    sliceName: 'MRN',
    min: 1,
    max: '1',
    type: [{ code: 'Identifier' }],
  } as IElementDefinition,
  withFixedValue: {
    path: 'Patient.identifier.system',
    min: 1,
    max: '1',
    fixedUri: 'http://hospital.example.org/identifiers/mrn',
  } as IElementDefinition,
  withPatternValue: {
    path: 'Patient.identifier.type',
    min: 0,
    max: '1',
    patternCodeableConcept: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
          code: 'MR',
        },
      ],
    },
  } as IElementDefinition,
  withDefaultValue: {
    path: 'Observation.status',
    min: 1,
    max: '1',
    defaultValueCode: 'preliminary',
  } as IElementDefinition,
  withMinMaxValue: {
    path: 'Observation.valueQuantity.value',
    min: 0,
    max: '1',
    minValueDecimal: 0,
    maxValueDecimal: 100,
  } as IElementDefinition,
  withBase: {
    path: 'Patient.name',
    base: {
      path: 'Patient.name',
      min: 0,
      max: '*',
    },
    min: 1,
    max: '*',
  } as IElementDefinition,
  modifier: {
    path: 'Patient.active',
    min: 0,
    max: '1',
    isModifier: true,
    isModifierReason: 'This element is labelled as a modifier because it may be used to mark that the record should not be treated as valid',
  } as IElementDefinition,
  complex: {
    path: 'Patient.contact.telecom',
    sliceName: 'phone',
    label: 'Phone Contact',
    short: 'Phone number for contact',
    definition: 'A phone number for the contact person',
    comment: 'Use for primary phone contact',
    requirements: 'People have phones',
    alias: ['telephone', 'cell'],
    min: 0,
    max: '*',
    type: [{ code: 'ContactPoint' }],
    mustSupport: true,
    isSummary: false,
    code: [
      {
        system: 'http://example.org/codes',
        code: 'phone',
        display: 'Phone',
      },
    ],
    mapping: [
      {
        identity: 'v2',
        map: 'PID-13',
      },
    ],
  } as IElementDefinition,
};

describe('ElementDefinition', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const ed = new ElementDefinition({});
        expect(ed).toBeInstanceOf(ElementDefinition);
      });

      it('should create simple element definition', () => {
        const ed = new ElementDefinition(elementDefinitions.simpleElement);
        expect(ed.path).toBe('Patient.name');
        expect(ed.min).toBe(0);
        expect(ed.max).toBe('*');
        expect(ed.short).toBe('A name associated with the patient');
      });

      it('should create required element definition', () => {
        const ed = new ElementDefinition(elementDefinitions.requiredElement);
        expect(ed.min).toBe(1);
        expect(ed.mustSupport).toBe(true);
        expect(ed.isSummary).toBe(true);
      });

      it('should create element with type', () => {
        const ed = new ElementDefinition(elementDefinitions.withType);
        expect(ed.type).toHaveLength(1);
        expect(ed.type?.[0].code).toBe('date');
      });

      it('should create element with binding', () => {
        const ed = new ElementDefinition(elementDefinitions.withBinding);
        expect(ed.binding?.strength).toBe('required');
        expect(ed.binding?.valueSet).toBe('http://hl7.org/fhir/ValueSet/administrative-gender');
      });

      it('should create element with constraint', () => {
        const ed = new ElementDefinition(elementDefinitions.withConstraint);
        expect(ed.constraint).toHaveLength(1);
        expect(ed.constraint?.[0].key).toBe('pat-1');
        expect(ed.constraint?.[0].severity).toBe('error');
      });

      it('should create element with slicing', () => {
        const ed = new ElementDefinition(elementDefinitions.withSlicing);
        expect(ed.slicing?.discriminator).toHaveLength(1);
        expect(ed.slicing?.rules).toBe('open');
      });

      it('should create slice element', () => {
        const ed = new ElementDefinition(elementDefinitions.slice);
        expect(ed.sliceName).toBe('MRN');
      });

      it('should create element with fixed value', () => {
        const ed = new ElementDefinition(elementDefinitions.withFixedValue);
        expect(ed.fixedUri).toBe('http://hospital.example.org/identifiers/mrn');
      });

      it('should create element with pattern value', () => {
        const ed = new ElementDefinition(elementDefinitions.withPatternValue);
        expect(ed.patternCodeableConcept?.coding?.[0].code).toBe('MR');
      });

      it('should create element with default value', () => {
        const ed = new ElementDefinition(elementDefinitions.withDefaultValue);
        expect(ed.defaultValueCode).toBe('preliminary');
      });

      it('should create element with min/max values', () => {
        const ed = new ElementDefinition(elementDefinitions.withMinMaxValue);
        expect(ed.minValueDecimal).toBe(0);
        expect(ed.maxValueDecimal).toBe(100);
      });

      it('should create modifier element', () => {
        const ed = new ElementDefinition(elementDefinitions.modifier);
        expect(ed.isModifier).toBe(true);
        expect(ed.isModifierReason).toContain('modifier');
      });

      it('should create complex element definition', () => {
        const ed = new ElementDefinition(elementDefinitions.complex);
        expect(ed.sliceName).toBe('phone');
        expect(ed.label).toBe('Phone Contact');
        expect(ed.alias).toContain('telephone');
        expect(ed.code).toHaveLength(1);
        expect(ed.mapping).toHaveLength(1);
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const ed = new ElementDefinition(elementDefinitions.complex);
        const json = ed.toJSON();

        expect(json.path).toBe('Patient.contact.telecom');
        expect(json.sliceName).toBe('phone');
        expect(json.alias).toContain('cell');
      });

      it('should omit undefined properties in JSON', () => {
        const ed = new ElementDefinition(elementDefinitions.simpleElement);
        const json = ed.toJSON();

        expect(json.path).toBeDefined();
        expect(json.min).toBeDefined();
        expect(json).not.toHaveProperty('slicing');
        expect(json).not.toHaveProperty('binding');
        expect(json).not.toHaveProperty('constraint');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new ElementDefinition(elementDefinitions.complex);
        expectSerializationRoundtrip(original, ElementDefinition);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IElementDefinition = {
          path: 'Test.element',
          min: 0,
          max: '1',
        };
        const ed = ElementDefinition.fromJSON(json);

        expect(ed).toBeInstanceOf(ElementDefinition);
        expect(ed.path).toBe('Test.element');
      });

      it('should create identical instance from JSON', () => {
        const original = new ElementDefinition(elementDefinitions.complex);
        const json = original.toJSON();
        const restored = ElementDefinition.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new ElementDefinition(elementDefinitions.simpleElement);
        const updated = original.with({ min: 1 });

        expect(updated).not.toBe(original);
        expect(updated.min).toBe(1);
        expect(original.min).toBe(0);
      });

      it('should apply transform function correctly', () => {
        const ed = new ElementDefinition(elementDefinitions.simpleElement);
        const transformed = ed.applyTransform((data) => ({
          min: (data.min || 0) + 1,
        }));

        expect(transformed.min).toBe(1);
        expect(ed.min).toBe(0);
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new ElementDefinition(elementDefinitions.complex);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned type', () => {
        const original = new ElementDefinition(elementDefinitions.withType);
        const cloned = original.clone();

        if (cloned.type && cloned.type[0]) {
          cloned.type[0].code = 'string';
        }

        expect(original.type?.[0].code).toBe('date');
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const ed = new ElementDefinition(elementDefinitions.simpleElement);
        const str = ed.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('ElementDefinition');
      });
    });

    describe('Extension Properties', () => {
      it('should handle _path extension', () => {
        const ed = new ElementDefinition({
          path: 'Patient.name',
          _path: {
            extension: [
              { url: 'http://example.org/ext', valueString: 'path-info' },
            ],
          },
        });

        expect(ed._path?.extension?.[0]?.valueString).toBe('path-info');
      });

      it('should handle _min extension', () => {
        const ed = new ElementDefinition({
          path: 'Patient.name',
          min: 0,
          _min: {
            id: 'min-ext',
          },
        });

        expect(ed._min?.id).toBe('min-ext');
      });
    });

    describe('Element Properties', () => {
      it('should handle id property', () => {
        const ed = new ElementDefinition({
          id: 'ed-1',
          path: 'Patient.name',
        });

        expect(ed.id).toBe('ed-1');
      });

      it('should handle extension property', () => {
        const ed = new ElementDefinition({
          extension: [
            { url: 'http://example.org/ext', valueString: 'test' },
          ],
          path: 'Patient.name',
        });

        expect(ed.extension).toHaveLength(1);
      });
    });

    describe('Choice Types', () => {
      it('should handle defaultValue choice types', () => {
        const ed = new ElementDefinition({
          path: 'Test.value',
          defaultValueString: 'default text',
        });
        expect(ed.defaultValueString).toBe('default text');
      });

      it('should handle fixed choice types', () => {
        const ed = new ElementDefinition({
          path: 'Test.value',
          fixedCode: 'fixed-code',
        });
        expect(ed.fixedCode).toBe('fixed-code');
      });

      it('should handle pattern choice types', () => {
        const ed = new ElementDefinition({
          path: 'Test.value',
          patternCoding: {
            system: 'http://example.org',
            code: 'test',
          },
        });
        expect(ed.patternCoding?.code).toBe('test');
      });

      it('should handle minValue choice types', () => {
        const ed = new ElementDefinition({
          path: 'Test.value',
          minValueInteger: 0,
        });
        expect(ed.minValueInteger).toBe(0);
      });

      it('should handle maxValue choice types', () => {
        const ed = new ElementDefinition({
          path: 'Test.value',
          maxValueQuantity: {
            value: 100,
            unit: 'mg',
          },
        });
        expect(ed.maxValueQuantity?.value).toBe(100);
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const ed = new ElementDefinitionBuilder().build();
        expect(ed).toBeInstanceOf(ElementDefinition);
      });

      it('should build with path', () => {
        const ed = new ElementDefinitionBuilder()
          .setPath('Patient.name')
          .build();

        expect(ed.path).toBe('Patient.name');
      });

      it('should build with cardinality', () => {
        const ed = new ElementDefinitionBuilder()
          .setPath('Patient.name')
          .setMin(0)
          .setMax('*')
          .build();

        expect(ed.min).toBe(0);
        expect(ed.max).toBe('*');
      });

      it('should build with short and definition', () => {
        const ed = new ElementDefinitionBuilder()
          .setPath('Patient.name')
          .setShort('Patient name')
          .setDefinition('A name associated with the patient')
          .build();

        expect(ed.short).toBe('Patient name');
        expect(ed.definition).toBe('A name associated with the patient');
      });

      it('should build with slicing', () => {
        const ed = new ElementDefinitionBuilder()
          .setPath('Patient.identifier')
          .setSlicing({
            discriminator: [{ type: 'value', path: 'system' }],
            rules: 'open',
          })
          .build();

        expect(ed.slicing?.rules).toBe('open');
      });

      it('should build with binding', () => {
        const ed = new ElementDefinitionBuilder()
          .setPath('Patient.gender')
          .setBinding({
            strength: 'required',
            valueSet: 'http://hl7.org/fhir/ValueSet/administrative-gender',
          })
          .build();

        expect(ed.binding?.strength).toBe('required');
      });

      it('should build with base', () => {
        const ed = new ElementDefinitionBuilder()
          .setPath('Patient.name')
          .setBase({ path: 'Patient.name', min: 0, max: '*' })
          .build();

        expect(ed.base?.path).toBe('Patient.name');
      });

      it('should build modifier element', () => {
        const ed = new ElementDefinitionBuilder()
          .setPath('Patient.active')
          .setIsModifier(true)
          .setIsModifierReason('Modifies interpretation of resource')
          .build();

        expect(ed.isModifier).toBe(true);
        expect(ed.isModifierReason).toContain('Modifies');
      });

      it('should build with mustSupport and isSummary', () => {
        const ed = new ElementDefinitionBuilder()
          .setPath('Patient.name')
          .setMustSupport(true)
          .setIsSummary(true)
          .build();

        expect(ed.mustSupport).toBe(true);
        expect(ed.isSummary).toBe(true);
      });

      it('should build with maxLength', () => {
        const ed = new ElementDefinitionBuilder()
          .setPath('Patient.name.text')
          .setMaxLength(100)
          .build();

        expect(ed.maxLength).toBe(100);
      });
    });

    describe('Array Properties', () => {
      it('should add types', () => {
        const ed = new ElementDefinitionBuilder()
          .setPath('Patient.deceased')
          .addType({ code: 'boolean' })
          .addType({ code: 'dateTime' })
          .build();

        expect(ed.type).toHaveLength(2);
        expect(ed.type?.[0].code).toBe('boolean');
        expect(ed.type?.[1].code).toBe('dateTime');
      });

      it('should add constraints', () => {
        const ed = new ElementDefinitionBuilder()
          .setPath('Patient.contact')
          .addConstraint({
            key: 'pat-1',
            severity: 'error',
            human: 'Test constraint',
          })
          .build();

        expect(ed.constraint).toHaveLength(1);
        expect(ed.constraint?.[0].key).toBe('pat-1');
      });

      it('should add codes', () => {
        const ed = new ElementDefinitionBuilder()
          .setPath('Patient.name')
          .addCode({ system: 'http://example.org', code: 'name' })
          .build();

        expect(ed.code).toHaveLength(1);
      });

      it('should add aliases', () => {
        const ed = new ElementDefinitionBuilder()
          .setPath('Patient.name')
          .addAlias('nombre')
          .addAlias('nom')
          .build();

        expect(ed.alias).toHaveLength(2);
        expect(ed.alias).toContain('nombre');
      });

      it('should add mappings', () => {
        const ed = new ElementDefinitionBuilder()
          .setPath('Patient.name')
          .addMapping({ identity: 'v2', map: 'PID-5' })
          .addMapping({ identity: 'rim', map: 'name' })
          .build();

        expect(ed.mapping).toHaveLength(2);
      });

      it('should add examples', () => {
        const ed = new ElementDefinitionBuilder()
          .setPath('Patient.birthDate')
          .addExample({ label: 'Example', valueDate: '1970-01-01' })
          .build();

        expect(ed.example).toHaveLength(1);
        expect(ed.example?.[0].label).toBe('Example');
      });

      it('should add conditions', () => {
        const ed = new ElementDefinitionBuilder()
          .setPath('Patient.name')
          .addCondition('pat-1')
          .build();

        expect(ed.condition).toHaveLength(1);
        expect(ed.condition?.[0]).toBe('pat-1');
      });

      it('should add representations', () => {
        const ed = new ElementDefinitionBuilder()
          .setPath('Patient.name')
          .addRepresentation('xmlAttr')
          .build();

        expect(ed.representation).toHaveLength(1);
      });
    });

    describe('Slice Building', () => {
      it('should build slice with sliceName', () => {
        const ed = new ElementDefinitionBuilder()
          .setPath('Patient.identifier')
          .setSliceName('MRN')
          .build();

        expect(ed.sliceName).toBe('MRN');
      });

      it('should build with sliceIsConstraining', () => {
        const ed = new ElementDefinitionBuilder()
          .setPath('Patient.identifier')
          .setSliceName('MRN')
          .setSliceIsConstraining(true)
          .build();

        expect(ed.sliceIsConstraining).toBe(true);
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new ElementDefinitionBuilder()
          .setPath('Patient.name')
          .setMin(0)
          .setMax('*')
          .setMustSupport(true);

        expect(builder).toBeInstanceOf(ElementDefinitionBuilder);
      });

      it('should allow overwriting properties', () => {
        const ed = new ElementDefinitionBuilder()
          .setMin(0)
          .setMin(1)
          .build();

        expect(ed.min).toBe(1);
      });
    });

    describe('Base Element Properties', () => {
      it('should set id', () => {
        const ed = new ElementDefinitionBuilder()
          .setId('ed-1')
          .setPath('Patient.name')
          .build();

        expect(ed.id).toBe('ed-1');
      });

      it('should add extension', () => {
        const ed = new ElementDefinitionBuilder()
          .addExtension({
            url: 'http://example.org/fhir/ext',
            valueString: 'extended value',
          })
          .setPath('Patient.name')
          .build();

        expect(ed.extension).toHaveLength(1);
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const ed = new ElementDefinitionBuilder()
          .setPath('Patient.name')
          .setMin(0)
          .setMax('*')
          .setShort('Patient name')
          .build();

        const json = ed.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new ElementDefinitionBuilder()
          .setPath('Patient.name')
          .setMin(0)
          .setMax('*')
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
    it('should work in profile definition scenario', () => {
      const nameElement = new ElementDefinitionBuilder()
        .setPath('Patient.name')
        .setMin(1)
        .setMax('*')
        .setMustSupport(true)
        .addConstraint({
          key: 'pat-name-1',
          severity: 'error',
          human: 'At least family or given must be present',
          expression: 'family.exists() or given.exists()',
        })
        .build();

      expect(nameElement.min).toBe(1);
      expect(nameElement.constraint?.[0].key).toBe('pat-name-1');

      const json = nameElement.toJSON();
      const restored = ElementDefinition.fromJSON(json);

      expect(restored.mustSupport).toBe(true);
    });

    it('should work in slicing scenario', () => {
      const identifierBase = new ElementDefinitionBuilder()
        .setPath('Patient.identifier')
        .setSlicing({
          discriminator: [{ type: 'value', path: 'system' }],
          rules: 'open',
        })
        .setMin(0)
        .setMax('*')
        .build();

      const mrnSlice = new ElementDefinitionBuilder()
        .setPath('Patient.identifier')
        .setSliceName('MRN')
        .setMin(1)
        .setMax('1')
        .addType({ code: 'Identifier' })
        .build();

      expect(identifierBase.slicing?.rules).toBe('open');
      expect(mrnSlice.sliceName).toBe('MRN');
    });

    it('should work in extension definition scenario', () => {
      const extensionDef = new ElementDefinitionBuilder()
        .setPath('Extension')
        .setShort('Birth place')
        .setDefinition('The place where the patient was born')
        .setMin(0)
        .setMax('1')
        .addType({ code: 'Extension' })
        .build();

      const valueElement = new ElementDefinitionBuilder()
        .setPath('Extension.value[x]')
        .setMin(1)
        .setMax('1')
        .addType({ code: 'Address' })
        .build();

      expect(extensionDef.short).toBe('Birth place');
      expect(valueElement.type?.[0].code).toBe('Address');
    });

    it('should handle element definition update', () => {
      const original = new ElementDefinition(elementDefinitions.simpleElement);

      const updated = original.with({
        min: 1,
        mustSupport: true,
      });

      expect(updated.min).toBe(1);
      expect(updated.mustSupport).toBe(true);
      expect(original.min).toBe(0);
    });

    it('should work in valueset binding scenario', () => {
      const genderElement = new ElementDefinitionBuilder()
        .setPath('Patient.gender')
        .setMin(0)
        .setMax('1')
        .addType({ code: 'code' })
        .setBinding({
          strength: 'required',
          valueSet: 'http://hl7.org/fhir/ValueSet/administrative-gender',
          description: 'The gender of a person used for administrative purposes',
        })
        .build();

      expect(genderElement.binding?.strength).toBe('required');
      expect(genderElement.binding?.description).toContain('administrative');
    });

    it('should work in reference type scenario', () => {
      const subjectElement = new ElementDefinitionBuilder()
        .setPath('Observation.subject')
        .setMin(0)
        .setMax('1')
        .addType({
          code: 'Reference',
          targetProfile: ['http://hl7.org/fhir/StructureDefinition/Patient'],
        })
        .build();

      expect(subjectElement.type?.[0].targetProfile?.[0]).toContain('Patient');
    });

    it('should work in mapping scenario', () => {
      const nameElement = new ElementDefinitionBuilder()
        .setPath('Patient.name')
        .setMin(0)
        .setMax('*')
        .addMapping({ identity: 'v2', map: 'PID-5, PID-9' })
        .addMapping({ identity: 'rim', map: 'name' })
        .addMapping({ identity: 'cda', map: '.patient.name' })
        .build();

      expect(nameElement.mapping).toHaveLength(3);
      expect(nameElement.mapping?.[0].identity).toBe('v2');
    });

    it('should work in fixed value profile scenario', () => {
      const typeCodeElement = new ElementDefinitionBuilder()
        .setPath('Identifier.type.coding.code')
        .setMin(1)
        .setMax('1')
        .setFixedPositiveInt(1) // Using a numeric fixed value
        .build();

      expect(typeCodeElement.fixedPositiveInt).toBe(1);
    });

    it('should work in pattern matching scenario', () => {
      const typeElement = new ElementDefinitionBuilder()
        .setPath('Identifier.type')
        .setMin(1)
        .setMax('1')
        .setPatternPositiveInt(1)
        .build();

      expect(typeElement.patternPositiveInt).toBe(1);
    });
  });
});
