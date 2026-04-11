import { StaticModelInfo } from './model-info.js';
import { registerFhirPrimitiveTypes, registerFhirComplexTypes } from './fhir-types.js';

/**
 * Returns a minimal R4B (4.3.0) model info with common clinical types.
 *
 * R4B is largely identical to R4 with minor technical corrections.
 * Key differences from R4:
 * - Version string is 4.3.0
 * - Some CodeSystem/ValueSet canonical URLs updated
 * - No structural element changes for common clinical resources
 */
export function createR4BModelInfo(): StaticModelInfo {
  const mi = new StaticModelInfo('4.3.0');

  // Standard contexts (same as R4)
  mi.addContext('Patient', 'Patient');
  mi.addContext('Practitioner', 'Practitioner');
  mi.addContext('Encounter', 'Encounter');

  // Primary code paths (same as R4)
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

  // --- Type registrations (structurally identical to R4) ---

  mi.addType({
    name: 'Patient',
    namespace: 'FHIR',
    baseName: 'FHIR.DomainResource',
    primaryKey: '',
    elements: [
      { name: 'id', type: 'System.String', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'birthDate', type: 'System.Date', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'gender', type: 'System.String', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'name', type: 'FHIR.HumanName', isList: true, isChoice: false, choiceTypes: [] },
      { name: 'identifier', type: 'FHIR.Identifier', isList: true, isChoice: false, choiceTypes: [] },
      { name: 'active', type: 'System.Boolean', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'deceased', type: '', isList: false, isChoice: true, choiceTypes: ['System.Boolean', 'System.DateTime'] },
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
      { name: 'id', type: 'System.String', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'code', type: 'FHIR.CodeableConcept', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'subject', type: 'FHIR.Reference', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'onset', type: '', isList: false, isChoice: true, choiceTypes: ['System.DateTime', 'FHIR.Age', 'FHIR.Period', 'FHIR.Range', 'System.String'] },
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
      { name: 'id', type: 'System.String', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'code', type: 'FHIR.CodeableConcept', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'subject', type: 'FHIR.Reference', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'value', type: '', isList: false, isChoice: true, choiceTypes: ['FHIR.Quantity', 'FHIR.CodeableConcept', 'System.String', 'System.Boolean', 'System.Integer', 'FHIR.Range', 'FHIR.Ratio', 'FHIR.SampledData', 'System.DateTime', 'FHIR.Period'] },
      { name: 'effective', type: '', isList: false, isChoice: true, choiceTypes: ['System.DateTime', 'FHIR.Period', 'FHIR.Timing', 'System.DateTime'] },
      { name: 'status', type: 'System.String', isList: false, isChoice: false, choiceTypes: [] },
    ],
  });

  mi.addType({
    name: 'Encounter',
    namespace: 'FHIR',
    baseName: 'FHIR.DomainResource',
    primaryKey: 'type',
    elements: [
      { name: 'id', type: 'System.String', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'type', type: 'FHIR.CodeableConcept', isList: true, isChoice: false, choiceTypes: [] },
      { name: 'class', type: 'FHIR.Coding', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'status', type: 'System.String', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'period', type: 'FHIR.Period', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'subject', type: 'FHIR.Reference', isList: false, isChoice: false, choiceTypes: [] },
    ],
  });

  mi.addType({
    name: 'Procedure',
    namespace: 'FHIR',
    baseName: 'FHIR.DomainResource',
    primaryKey: 'code',
    elements: [
      { name: 'id', type: 'System.String', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'code', type: 'FHIR.CodeableConcept', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'subject', type: 'FHIR.Reference', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'performed', type: '', isList: false, isChoice: true, choiceTypes: ['System.DateTime', 'FHIR.Period', 'System.String', 'FHIR.Age', 'FHIR.Range'] },
      { name: 'status', type: 'System.String', isList: false, isChoice: false, choiceTypes: [] },
    ],
  });

  mi.addType({
    name: 'MedicationRequest',
    namespace: 'FHIR',
    baseName: 'FHIR.DomainResource',
    primaryKey: 'medication',
    elements: [
      { name: 'id', type: 'System.String', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'medication', type: '', isList: false, isChoice: true, choiceTypes: ['FHIR.CodeableConcept', 'FHIR.Reference'] },
      { name: 'subject', type: 'FHIR.Reference', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'status', type: 'System.String', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'authoredOn', type: 'System.DateTime', isList: false, isChoice: false, choiceTypes: [] },
    ],
  });

  mi.addType({
    name: 'Medication',
    namespace: 'FHIR',
    baseName: 'FHIR.DomainResource',
    primaryKey: 'code',
    elements: [
      { name: 'id', type: 'System.String', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'code', type: 'FHIR.CodeableConcept', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'status', type: 'System.String', isList: false, isChoice: false, choiceTypes: [] },
    ],
  });

  mi.addType({
    name: 'DiagnosticReport',
    namespace: 'FHIR',
    baseName: 'FHIR.DomainResource',
    primaryKey: 'code',
    elements: [
      { name: 'id', type: 'System.String', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'code', type: 'FHIR.CodeableConcept', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'subject', type: 'FHIR.Reference', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'effective', type: '', isList: false, isChoice: true, choiceTypes: ['System.DateTime', 'FHIR.Period'] },
      { name: 'status', type: 'System.String', isList: false, isChoice: false, choiceTypes: [] },
    ],
  });

  mi.addType({
    name: 'AllergyIntolerance',
    namespace: 'FHIR',
    baseName: 'FHIR.DomainResource',
    primaryKey: 'code',
    elements: [
      { name: 'id', type: 'System.String', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'code', type: 'FHIR.CodeableConcept', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'patient', type: 'FHIR.Reference', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'clinicalStatus', type: 'FHIR.CodeableConcept', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'verificationStatus', type: 'FHIR.CodeableConcept', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'type', type: 'System.String', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'category', type: 'System.String', isList: true, isChoice: false, choiceTypes: [] },
    ],
  });

  mi.addType({
    name: 'Immunization',
    namespace: 'FHIR',
    baseName: 'FHIR.DomainResource',
    primaryKey: 'vaccineCode',
    elements: [
      { name: 'id', type: 'System.String', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'vaccineCode', type: 'FHIR.CodeableConcept', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'patient', type: 'FHIR.Reference', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'occurrence', type: '', isList: false, isChoice: true, choiceTypes: ['System.DateTime', 'System.String'] },
      { name: 'status', type: 'System.String', isList: false, isChoice: false, choiceTypes: [] },
    ],
  });

  mi.addType({
    name: 'ServiceRequest',
    namespace: 'FHIR',
    baseName: 'FHIR.DomainResource',
    primaryKey: 'code',
    elements: [
      { name: 'id', type: 'System.String', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'code', type: 'FHIR.CodeableConcept', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'subject', type: 'FHIR.Reference', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'status', type: 'System.String', isList: false, isChoice: false, choiceTypes: [] },
      { name: 'authoredOn', type: 'System.DateTime', isList: false, isChoice: false, choiceTypes: [] },
    ],
  });

  return mi;
}
