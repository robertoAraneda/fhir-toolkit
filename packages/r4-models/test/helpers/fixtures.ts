/**
 * Test fixtures for FHIR Toolkit
 *
 * Reusable sample data for testing models and builders.
 */

import type {
  IIdentifier,
  ICoding,
  ICodeableConcept,
  IReference,
  IPeriod,
  IQuantity,
  IHumanName,
  IAddress,
  IContactPoint,
  IMeta,
  IExtension,
  IAnnotation,
  IAttachment,
  IPatient,
  IObservation,
  IEncounter,
  ICondition,
  IPractitioner,
  IOrganization,
  IBundle,
} from '@fhir-toolkit/r4-types';

// ============================================================================
// Extension Fixtures
// ============================================================================

export const extensions: Record<string, IExtension> = {
  simple: {
    url: 'http://example.org/fhir/StructureDefinition/simple-extension',
    valueString: 'test value',
  },
  complex: {
    url: 'http://example.org/fhir/StructureDefinition/complex-extension',
    extension: [
      { url: 'part1', valueString: 'value1' },
      { url: 'part2', valueInteger: 42 },
    ],
  },
  birthPlace: {
    url: 'http://hl7.org/fhir/StructureDefinition/patient-birthPlace',
    valueAddress: {
      city: 'Santiago',
      country: 'Chile',
    },
  },
};

// ============================================================================
// Identifier Fixtures
// ============================================================================

export const identifiers: Record<string, IIdentifier> = {
  minimal: {
    value: 'test-123',
  },
  mrn: {
    use: 'official',
    type: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
          code: 'MR',
          display: 'Medical Record Number',
        },
      ],
    },
    system: 'http://hospital.example.org/mrn',
    value: 'MRN-123456',
  },
  run: {
    use: 'official',
    type: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
          code: 'NI',
          display: 'National Identifier',
        },
      ],
      text: 'RUN',
    },
    system: 'http://minsal.cl/run',
    value: '12.345.678-9',
  },
  withPeriod: {
    use: 'temp',
    value: 'temp-123',
    period: {
      start: '2024-01-01',
      end: '2024-12-31',
    },
  },
};

// ============================================================================
// Coding Fixtures
// ============================================================================

export const codings: Record<string, ICoding> = {
  snomed: {
    system: 'http://snomed.info/sct',
    code: '38341003',
    display: 'Hypertensive disorder, systemic arterial',
  },
  loinc: {
    system: 'http://loinc.org',
    code: '8310-5',
    display: 'Body temperature',
  },
  icd10: {
    system: 'http://hl7.org/fhir/sid/icd-10',
    code: 'I10',
    display: 'Essential (primary) hypertension',
  },
};

// ============================================================================
// CodeableConcept Fixtures
// ============================================================================

export const codeableConcepts: Record<string, ICodeableConcept> = {
  minimal: {
    text: 'Simple concept',
  },
  hypertension: {
    coding: [codings.snomed, codings.icd10],
    text: 'Hypertension',
  },
  gender: {
    coding: [
      {
        system: 'http://hl7.org/fhir/administrative-gender',
        code: 'male',
        display: 'Male',
      },
    ],
  },
  maritalStatus: {
    coding: [
      {
        system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus',
        code: 'M',
        display: 'Married',
      },
    ],
    text: 'Married',
  },
  maritalStatusSingle: {
    coding: [
      {
        system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus',
        code: 'S',
        display: 'Never Married',
      },
    ],
    text: 'Single',
  },
  conditionActive: {
    coding: [
      {
        system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
        code: 'active',
        display: 'Active',
      },
    ],
    text: 'Active',
  },
};

// ============================================================================
// Reference Fixtures
// ============================================================================

export const references: Record<string, IReference> = {
  patient: {
    reference: 'Patient/123',
    display: 'John Smith',
  },
  practitioner: {
    reference: 'Practitioner/456',
    type: 'Practitioner',
    display: 'Dr. Maria Garcia',
  },
  organization: {
    reference: 'Organization/789',
    identifier: {
      system: 'http://example.org/org-ids',
      value: 'ORG-001',
    },
    display: 'General Hospital',
  },
  contained: {
    reference: '#practitioner-1',
  },
};

// ============================================================================
// Period Fixtures
// ============================================================================

export const periods: Record<string, IPeriod> = {
  year2024: {
    start: '2024-01-01',
    end: '2024-12-31',
  },
  hospitalization: {
    start: '2024-01-15T08:00:00Z',
    end: '2024-01-20T14:00:00Z',
  },
  ongoing: {
    start: '2020-06-15',
  },
};

// ============================================================================
// Quantity Fixtures
// ============================================================================

export const quantities: Record<string, IQuantity> = {
  weight: {
    value: 75.5,
    unit: 'kg',
    system: 'http://unitsofmeasure.org',
    code: 'kg',
  },
  temperature: {
    value: 37.2,
    unit: 'Cel',
    system: 'http://unitsofmeasure.org',
    code: 'Cel',
  },
  bloodPressure: {
    value: 120,
    unit: 'mmHg',
    system: 'http://unitsofmeasure.org',
    code: 'mm[Hg]',
  },
  age: {
    value: 45,
    unit: 'years',
    system: 'http://unitsofmeasure.org',
    code: 'a',
  },
};

// ============================================================================
// HumanName Fixtures
// ============================================================================

export const humanNames: Record<string, IHumanName> = {
  simple: {
    family: 'Smith',
    given: ['John'],
  },
  complete: {
    use: 'official',
    text: 'Dr. Juan Carlos García López',
    family: 'García López',
    given: ['Juan', 'Carlos'],
    prefix: ['Dr.'],
    suffix: ['MD', 'PhD'],
    period: periods.ongoing,
  },
  maiden: {
    use: 'maiden',
    family: 'Rodríguez',
  },
};

// ============================================================================
// Address Fixtures
// ============================================================================

export const addresses: Record<string, IAddress> = {
  home: {
    use: 'home',
    type: 'physical',
    line: ['Av. Providencia 1234', 'Depto 56'],
    city: 'Providencia',
    state: 'Región Metropolitana',
    postalCode: '7500000',
    country: 'Chile',
  },
  work: {
    use: 'work',
    type: 'both',
    line: ['Av. Libertador Bernardo O\'Higgins 3363'],
    city: 'Santiago',
    country: 'Chile',
  },
};

// ============================================================================
// ContactPoint Fixtures
// ============================================================================

export const contactPoints: Record<string, IContactPoint> = {
  phone: {
    system: 'phone',
    value: '+56 9 1234 5678',
    use: 'mobile',
    rank: 1,
  },
  email: {
    system: 'email',
    value: 'juan.garcia@hospital.cl',
    use: 'work',
  },
  workPhone: {
    system: 'phone',
    value: '+56 2 2345 6789',
    use: 'work',
    rank: 2,
  },
};

// ============================================================================
// Meta Fixtures
// ============================================================================

export const metas: Record<string, IMeta> = {
  simple: {
    versionId: '1',
    lastUpdated: '2024-01-15T10:30:00Z',
  },
  complete: {
    versionId: '3',
    lastUpdated: '2024-01-15T15:00:00Z',
    source: 'http://hospital.example.org/fhir',
    profile: ['http://hl7.org/fhir/StructureDefinition/Patient'],
    security: [
      {
        system: 'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
        code: 'R',
        display: 'Restricted',
      },
    ],
    tag: [
      {
        system: 'http://hospital.example.org/tags',
        code: 'reviewed',
        display: 'Reviewed by physician',
      },
    ],
  },
};

// ============================================================================
// Annotation Fixtures
// ============================================================================

export const annotations: Record<string, IAnnotation> = {
  simple: {
    text: 'Simple note',
  },
  complete: {
    authorString: 'Dr. García',
    time: '2024-01-15T11:00:00Z',
    text: 'Patient shows significant improvement. Continue current treatment.',
  },
};

// ============================================================================
// Attachment Fixtures
// ============================================================================

export const attachments: Record<string, IAttachment> = {
  xray: {
    contentType: 'image/jpeg',
    url: 'http://hospital.example.org/images/xray-12345.jpg',
    title: 'Chest X-Ray',
    size: 2048576,
    creation: '2024-01-15',
  },
  pdf: {
    contentType: 'application/pdf',
    data: 'JVBERi0xLjQK...', // Base64 encoded
    title: 'Lab Report',
  },
};

// ============================================================================
// Resource Fixtures
// ============================================================================

export const patients: Record<string, IPatient> = {
  minimal: {
    resourceType: 'Patient',
    name: [humanNames.simple],
  },
  complete: {
    resourceType: 'Patient',
    id: 'patient-123',
    meta: metas.complete,
    identifier: [identifiers.run, identifiers.mrn],
    active: true,
    name: [humanNames.complete, humanNames.maiden],
    telecom: [contactPoints.phone, contactPoints.email],
    gender: 'male',
    birthDate: '1979-05-15',
    address: [addresses.home, addresses.work],
    maritalStatus: codeableConcepts.maritalStatus,
    contact: [
      {
        relationship: [{ text: 'Emergency Contact' }],
        name: { family: 'García', given: ['María'] },
        telecom: [{ system: 'phone', value: '+56 9 8765 4321' }],
      },
    ],
    communication: [
      {
        language: {
          coding: [{ system: 'urn:ietf:bcp:47', code: 'es-CL' }],
          text: 'Spanish (Chile)',
        },
        preferred: true,
      },
    ],
  },
};

export const observations: Record<string, IObservation> = {
  temperature: {
    resourceType: 'Observation',
    status: 'final',
    code: {
      coding: [codings.loinc],
      text: 'Body Temperature',
    },
    subject: references.patient,
    effectiveDateTime: '2024-01-15T10:30:00Z',
    valueQuantity: quantities.temperature,
  },
  bloodPressure: {
    resourceType: 'Observation',
    status: 'final',
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '85354-9',
          display: 'Blood pressure panel',
        },
      ],
    },
    subject: references.patient,
    effectiveDateTime: '2024-01-15T10:30:00Z',
    component: [
      {
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '8480-6',
              display: 'Systolic blood pressure',
            },
          ],
        },
        valueQuantity: { value: 120, unit: 'mmHg' },
      },
      {
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '8462-4',
              display: 'Diastolic blood pressure',
            },
          ],
        },
        valueQuantity: { value: 80, unit: 'mmHg' },
      },
    ],
  },
};

export const conditions: Record<string, ICondition> = {
  hypertension: {
    resourceType: 'Condition',
    clinicalStatus: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
          code: 'active',
        },
      ],
    },
    verificationStatus: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
          code: 'confirmed',
        },
      ],
    },
    code: codeableConcepts.hypertension,
    subject: references.patient,
    onsetDateTime: '2020-06-15',
  },
};

export const practitioners: Record<string, IPractitioner> = {
  doctor: {
    resourceType: 'Practitioner',
    id: 'practitioner-456',
    identifier: [
      {
        system: 'http://minsal.cl/rnp',
        value: 'RNP-12345',
      },
    ],
    active: true,
    name: [humanNames.complete],
    telecom: [contactPoints.workPhone, contactPoints.email],
    gender: 'female',
    qualification: [
      {
        code: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0360',
              code: 'MD',
              display: 'Doctor of Medicine',
            },
          ],
        },
      },
    ],
  },
};

export const organizations: Record<string, IOrganization> = {
  hospital: {
    resourceType: 'Organization',
    id: 'org-789',
    identifier: [
      {
        system: 'http://example.org/org-ids',
        value: 'ORG-001',
      },
    ],
    active: true,
    type: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/organization-type',
            code: 'prov',
            display: 'Healthcare Provider',
          },
        ],
      },
    ],
    name: 'General Hospital',
    telecom: [contactPoints.workPhone],
    address: [addresses.work],
  },
};

export const bundles: Record<string, IBundle> = {
  searchset: {
    resourceType: 'Bundle',
    type: 'searchset',
    total: 2,
    entry: [
      {
        fullUrl: 'http://example.org/fhir/Patient/123',
        resource: patients.minimal,
        search: { mode: 'match' },
      },
    ],
  },
  transaction: {
    resourceType: 'Bundle',
    type: 'transaction',
    entry: [
      {
        fullUrl: 'urn:uuid:new-patient',
        resource: patients.minimal,
        request: {
          method: 'POST',
          url: 'Patient',
        },
      },
    ],
  },
};
