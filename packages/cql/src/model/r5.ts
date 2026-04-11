import { StaticModelInfo } from './model-info.js';
import { registerFhirPrimitiveTypes, registerFhirComplexTypes } from './fhir-types.js';

/**
 * Returns a minimal R5 (5.0.0) model info with common clinical types.
 *
 * Key differences from R4:
 * - Encounter.class changed from Coding to CodeableConcept (list)
 * - MedicationRequest.medication is now a CodeableReference (not a choice type)
 * - Observation.effective adds instant as a choice option
 * - Condition.onset adds instant as a choice option
 * - AllergyIntolerance.type removed (replaced by AllergyIntolerance.type being a CodeableConcept)
 */
export function createR5ModelInfo(): StaticModelInfo {
  const mi = new StaticModelInfo('5.0.0');

  // Standard contexts
  mi.addContext('Patient', 'Patient');
  mi.addContext('Practitioner', 'Practitioner');
  mi.addContext('Encounter', 'Encounter');

  // Primary code paths
  mi.setCodePath('Condition', 'code');
  mi.setCodePath('Procedure', 'code');
  mi.setCodePath('Observation', 'code');
  mi.setCodePath('MedicationRequest', 'medication');
  mi.setCodePath('Medication', 'code');
  mi.setCodePath('DiagnosticReport', 'code');
  mi.setCodePath('Encounter', 'type');
  mi.setCodePath('AllergyIntolerance', 'code');
  mi.setCodePath('Immunization', 'vaccineCode');
  mi.setCodePath('ServiceRequest', 'code');

  // FHIR primitive and complex types (shared across versions)
  registerFhirPrimitiveTypes(mi);
  registerFhirComplexTypes(mi);

  // --- Type registrations ---

  mi.addType({
    name: 'Patient',
    namespace: 'FHIR',
    baseName: 'FHIR.DomainResource',
    primaryKey: '',
    elements: [
      { name: 'id', type: 'FHIR.id', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'birthDate', type: 'FHIR.date', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'gender', type: 'FHIR.code', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'name', type: 'FHIR.HumanName', isList: true, isChoice: false, choiceTypes: [] },
      { name: 'identifier', type: 'FHIR.Identifier', isList: true, isChoice: false, choiceTypes: [] },
      { name: 'active', type: 'FHIR.boolean', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'deceased', type: '', isList: false, isChoice: true, choiceTypes: ['FHIR.boolean', 'FHIR.dateTime'] },
      { name: 'address', type: 'FHIR.Address', isList: true, isChoice: false, choiceTypes: [] },
      { name: 'telecom', type: 'FHIR.ContactPoint', isList: true, isChoice: false, choiceTypes: [] },
    ],
  });

  mi.addType({
    name: 'Condition',
    namespace: 'FHIR',
    baseName: 'FHIR.DomainResource',
    primaryKey: 'code',
    elements: [
      { name: 'id', type: 'FHIR.id', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'code', type: 'FHIR.CodeableConcept', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'subject', type: 'FHIR.Reference', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'onset', type: '', isList: false, isChoice: true, choiceTypes: ['FHIR.dateTime', 'FHIR.Age', 'FHIR.Period', 'FHIR.Range', 'FHIR.string'] },
      { name: 'clinicalStatus', type: 'FHIR.CodeableConcept', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'verificationStatus', type: 'FHIR.CodeableConcept', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'category', type: 'FHIR.CodeableConcept', isList: true, isChoice: false, choiceTypes: [] },
    ],
  });

  mi.addType({
    name: 'Observation',
    namespace: 'FHIR',
    baseName: 'FHIR.DomainResource',
    primaryKey: 'code',
    elements: [
      { name: 'id', type: 'FHIR.id', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'code', type: 'FHIR.CodeableConcept', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'subject', type: 'FHIR.Reference', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'value', type: '', isList: false, isChoice: true, choiceTypes: ['FHIR.Quantity', 'FHIR.CodeableConcept', 'FHIR.string', 'FHIR.boolean', 'FHIR.integer', 'FHIR.Range', 'FHIR.Ratio', 'FHIR.SampledData', 'FHIR.dateTime', 'FHIR.Period', 'FHIR.Attachment'] },
      { name: 'effective', type: '', isList: false, isChoice: true, choiceTypes: ['FHIR.dateTime', 'FHIR.Period', 'FHIR.Timing', 'FHIR.dateTime'] },
      { name: 'status', type: 'FHIR.code', isList: false, isChoice: false, choiceTypes: [] },
    ],
  });

  // R5: Encounter.class is now CodeableConcept (list) instead of Coding
  mi.addType({
    name: 'Encounter',
    namespace: 'FHIR',
    baseName: 'FHIR.DomainResource',
    primaryKey: 'type',
    elements: [
      { name: 'id', type: 'FHIR.id', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'type', type: 'FHIR.CodeableConcept', isList: true, isChoice: false, choiceTypes: [] },
      { name: 'class', type: 'FHIR.CodeableConcept', isList: true, isChoice: false, choiceTypes: [] },
      { name: 'status', type: 'FHIR.code', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'actualPeriod', type: 'FHIR.Period', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'subject', type: 'FHIR.Reference', isList: false, isChoice: false, choiceTypes: [] },
    ],
  });

  mi.addType({
    name: 'Procedure',
    namespace: 'FHIR',
    baseName: 'FHIR.DomainResource',
    primaryKey: 'code',
    elements: [
      { name: 'id', type: 'FHIR.id', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'code', type: 'FHIR.CodeableConcept', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'subject', type: 'FHIR.Reference', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'occurrence', type: '', isList: false, isChoice: true, choiceTypes: ['FHIR.dateTime', 'FHIR.Period', 'FHIR.string', 'FHIR.Age', 'FHIR.Range', 'FHIR.Timing'] },
      { name: 'status', type: 'FHIR.code', isList: false, isChoice: false, choiceTypes: [] },
    ],
  });

  // R5: MedicationRequest.medication is CodeableReference (not a choice type)
  mi.addType({
    name: 'MedicationRequest',
    namespace: 'FHIR',
    baseName: 'FHIR.DomainResource',
    primaryKey: 'medication',
    elements: [
      { name: 'id', type: 'FHIR.id', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'medication', type: 'FHIR.CodeableReference', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'subject', type: 'FHIR.Reference', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'status', type: 'FHIR.code', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'authoredOn', type: 'FHIR.dateTime', isList: false, isChoice: false, choiceTypes: [] },
    ],
  });

  mi.addType({
    name: 'Medication',
    namespace: 'FHIR',
    baseName: 'FHIR.DomainResource',
    primaryKey: 'code',
    elements: [
      { name: 'id', type: 'FHIR.id', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'code', type: 'FHIR.CodeableConcept', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'status', type: 'FHIR.code', isList: false, isChoice: false, choiceTypes: [] },
    ],
  });

  mi.addType({
    name: 'DiagnosticReport',
    namespace: 'FHIR',
    baseName: 'FHIR.DomainResource',
    primaryKey: 'code',
    elements: [
      { name: 'id', type: 'FHIR.id', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'code', type: 'FHIR.CodeableConcept', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'subject', type: 'FHIR.Reference', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'effective', type: '', isList: false, isChoice: true, choiceTypes: ['FHIR.dateTime', 'FHIR.Period'] },
      { name: 'status', type: 'FHIR.code', isList: false, isChoice: false, choiceTypes: [] },
    ],
  });

  mi.addType({
    name: 'AllergyIntolerance',
    namespace: 'FHIR',
    baseName: 'FHIR.DomainResource',
    primaryKey: 'code',
    elements: [
      { name: 'id', type: 'FHIR.id', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'code', type: 'FHIR.CodeableConcept', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'patient', type: 'FHIR.Reference', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'clinicalStatus', type: 'FHIR.CodeableConcept', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'verificationStatus', type: 'FHIR.CodeableConcept', isList: false, isChoice: false, choiceTypes: [] },
    ],
  });

  mi.addType({
    name: 'Immunization',
    namespace: 'FHIR',
    baseName: 'FHIR.DomainResource',
    primaryKey: 'vaccineCode',
    elements: [
      { name: 'id', type: 'FHIR.id', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'vaccineCode', type: 'FHIR.CodeableConcept', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'patient', type: 'FHIR.Reference', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'occurrence', type: '', isList: false, isChoice: true, choiceTypes: ['FHIR.dateTime', 'FHIR.string'] },
      { name: 'status', type: 'FHIR.code', isList: false, isChoice: false, choiceTypes: [] },
    ],
  });

  mi.addType({
    name: 'ServiceRequest',
    namespace: 'FHIR',
    baseName: 'FHIR.DomainResource',
    primaryKey: 'code',
    elements: [
      { name: 'id', type: 'FHIR.id', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'code', type: 'FHIR.CodeableConcept', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'subject', type: 'FHIR.Reference', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'status', type: 'FHIR.code', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'authoredOn', type: 'FHIR.dateTime', isList: false, isChoice: false, choiceTypes: [] },
    ],
  });

  return mi;
}
