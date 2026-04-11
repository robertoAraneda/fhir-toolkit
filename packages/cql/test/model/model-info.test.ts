import { describe, it, expect } from 'vitest';
import {
  createR4ModelInfo,
  createR4BModelInfo,
  createR5ModelInfo,
  resolveModelInfo,
  type ModelInfo,
} from '../../src/model/index.js';

describe('R4 ModelInfo', () => {
  const mi = createR4ModelInfo();

  it('has version 4.0.1', () => {
    expect(mi.version()).toBe('4.0.1');
  });

  it('returns typeInfo for Patient', () => {
    const ti = mi.typeInfo('Patient');
    expect(ti).not.toBeNull();
    expect(ti!.name).toBe('Patient');
    expect(ti!.namespace).toBe('FHIR');
    expect(ti!.baseName).toBe('FHIR.DomainResource');
  });

  it('Patient has birthDate element', () => {
    const ti = mi.typeInfo('Patient');
    const birthDate = ti!.elements.find((e) => e.name === 'birthDate');
    expect(birthDate).toBeDefined();
    expect(birthDate!.type).toBe('System.Date');
    expect(birthDate!.isList).toBe(false);
  });

  it('Patient.deceased is a choice type', () => {
    expect(mi.isChoiceType('Patient.deceased')).toBe(true);
  });

  it('Patient.birthDate is not a choice type', () => {
    expect(mi.isChoiceType('Patient.birthDate')).toBe(false);
  });

  it('returns elementType for Patient.birthDate', () => {
    expect(mi.elementType('Patient.birthDate')).toBe('System.Date');
  });

  it('returns null for unknown element', () => {
    expect(mi.elementType('Patient.nonExistent')).toBeNull();
  });

  it('returns null for unknown type', () => {
    expect(mi.typeInfo('UnknownResource')).toBeNull();
  });

  it('primaryCodePath for Condition is code', () => {
    expect(mi.primaryCodePath('Condition')).toBe('code');
  });

  it('primaryCodePath for MedicationRequest is medication', () => {
    expect(mi.primaryCodePath('MedicationRequest')).toBe('medication');
  });

  it('primaryCodePath for Encounter is type', () => {
    expect(mi.primaryCodePath('Encounter')).toBe('type');
  });

  it('primaryCodePath for Immunization is vaccineCode', () => {
    expect(mi.primaryCodePath('Immunization')).toBe('vaccineCode');
  });

  it('primaryCodePath defaults to code for unknown resource', () => {
    expect(mi.primaryCodePath('Unknown')).toBe('code');
  });

  it('contextType returns Patient for Patient context', () => {
    expect(mi.contextType('Patient')).toBe('Patient');
  });

  it('contextType defaults to context name for unknown context', () => {
    expect(mi.contextType('Organization')).toBe('Organization');
  });

  it('includes all 11 required resource types', () => {
    const expected = [
      'Patient', 'Condition', 'Procedure', 'Observation', 'Medication',
      'MedicationRequest', 'DiagnosticReport', 'Encounter',
      'AllergyIntolerance', 'Immunization', 'ServiceRequest',
    ];
    for (const name of expected) {
      expect(mi.typeInfo(name)).not.toBeNull();
    }
  });
});

describe('R4B ModelInfo', () => {
  const mi = createR4BModelInfo();

  it('has version 4.3.0', () => {
    expect(mi.version()).toBe('4.3.0');
  });

  it('has Patient type', () => {
    expect(mi.typeInfo('Patient')).not.toBeNull();
  });

  it('primaryCodePath for Condition is code', () => {
    expect(mi.primaryCodePath('Condition')).toBe('code');
  });
});

describe('R5 ModelInfo', () => {
  const mi = createR5ModelInfo();

  it('has version 5.0.0', () => {
    expect(mi.version()).toBe('5.0.0');
  });

  it('has Patient type', () => {
    expect(mi.typeInfo('Patient')).not.toBeNull();
  });

  it('Encounter.class is CodeableConcept list (not Coding)', () => {
    const ti = mi.typeInfo('Encounter');
    const classElem = ti!.elements.find((e) => e.name === 'class');
    expect(classElem).toBeDefined();
    expect(classElem!.type).toBe('FHIR.CodeableConcept');
    expect(classElem!.isList).toBe(true);
  });

  it('MedicationRequest.medication is CodeableReference (not choice)', () => {
    const ti = mi.typeInfo('MedicationRequest');
    const med = ti!.elements.find((e) => e.name === 'medication');
    expect(med).toBeDefined();
    expect(med!.type).toBe('FHIR.CodeableReference');
    expect(med!.isChoice).toBe(false);
  });

  it('Procedure uses occurrence instead of performed', () => {
    const ti = mi.typeInfo('Procedure');
    const occurrence = ti!.elements.find((e) => e.name === 'occurrence');
    expect(occurrence).toBeDefined();
    expect(occurrence!.isChoice).toBe(true);
  });
});

describe('FHIR primitive types', () => {
  const mi = createR4ModelInfo();

  it('registers FHIR.decimal with a value element of System.Decimal', () => {
    const ti = mi.typeInfo('decimal');
    expect(ti).not.toBeNull();
    expect(ti!.namespace).toBe('FHIR');
    expect(ti!.elements).toHaveLength(1);
    expect(ti!.elements[0].name).toBe('value');
    expect(ti!.elements[0].type).toBe('System.Decimal');
  });

  it('registers FHIR.string with a value element of System.String', () => {
    const ti = mi.typeInfo('string');
    expect(ti).not.toBeNull();
    expect(ti!.elements[0].type).toBe('System.String');
  });

  it('registers FHIR.dateTime with a value element of System.DateTime', () => {
    const ti = mi.typeInfo('dateTime');
    expect(ti).not.toBeNull();
    expect(ti!.elements[0].type).toBe('System.DateTime');
  });

  it('registers all 20 FHIR primitive types', () => {
    const primitives = [
      'boolean', 'integer', 'decimal', 'string', 'date', 'dateTime', 'time',
      'instant', 'uri', 'url', 'canonical', 'code', 'id', 'oid', 'uuid',
      'markdown', 'base64Binary', 'unsignedInt', 'positiveInt', 'xhtml',
    ];
    for (const p of primitives) {
      expect(mi.typeInfo(p)).not.toBeNull();
    }
  });
});

describe('FHIR complex types', () => {
  const mi = createR4ModelInfo();

  it('registers Quantity with FHIR-typed elements', () => {
    const ti = mi.typeInfo('Quantity');
    expect(ti).not.toBeNull();
    const valueElem = ti!.elements.find(e => e.name === 'value');
    expect(valueElem!.type).toBe('FHIR.decimal');
    const unitElem = ti!.elements.find(e => e.name === 'unit');
    expect(unitElem!.type).toBe('FHIR.string');
  });

  it('registers Coding with FHIR-typed elements', () => {
    const ti = mi.typeInfo('Coding');
    expect(ti).not.toBeNull();
    const codeElem = ti!.elements.find(e => e.name === 'code');
    expect(codeElem!.type).toBe('FHIR.code');
  });

  it('registers CodeableConcept with coding list', () => {
    const ti = mi.typeInfo('CodeableConcept');
    expect(ti).not.toBeNull();
    const codingElem = ti!.elements.find(e => e.name === 'coding');
    expect(codingElem!.type).toBe('FHIR.Coding');
    expect(codingElem!.isList).toBe(true);
  });

  it('registers Period with FHIR.dateTime elements', () => {
    const ti = mi.typeInfo('Period');
    expect(ti).not.toBeNull();
    const startElem = ti!.elements.find(e => e.name === 'start');
    expect(startElem!.type).toBe('FHIR.dateTime');
  });

  it('registers Reference with FHIR-typed elements', () => {
    const ti = mi.typeInfo('Reference');
    expect(ti).not.toBeNull();
    const refElem = ti!.elements.find(e => e.name === 'reference');
    expect(refElem!.type).toBe('FHIR.string');
  });

  it('registers Quantity profiles (Age, Duration, etc.)', () => {
    for (const name of ['Age', 'Count', 'Distance', 'Duration', 'SimpleQuantity', 'MoneyQuantity']) {
      const ti = mi.typeInfo(name);
      expect(ti).not.toBeNull();
      expect(ti!.baseName).toBe('FHIR.Quantity');
    }
  });
});

describe('resolveModelInfo', () => {
  it('resolves R4 string to R4 model', () => {
    const mi = resolveModelInfo('R4');
    expect(mi.version()).toBe('4.0.1');
  });

  it('resolves R4B string to R4B model', () => {
    const mi = resolveModelInfo('R4B');
    expect(mi.version()).toBe('4.3.0');
  });

  it('resolves R5 string to R5 model', () => {
    const mi = resolveModelInfo('R5');
    expect(mi.version()).toBe('5.0.0');
  });

  it('passes through a custom ModelInfo object', () => {
    const custom: ModelInfo = {
      typeInfo: () => null,
      elementType: () => null,
      isChoiceType: () => false,
      contextType: (name) => name,
      primaryCodePath: () => 'code',
      version: () => '99.0.0',
    };
    const result = resolveModelInfo(custom as ModelInfo);
    expect(result).toBe(custom);
    expect(result.version()).toBe('99.0.0');
  });
});
