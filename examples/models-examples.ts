/**
 * FHIR Models Examples
 *
 * This file demonstrates how to create FHIR resources using direct model instantiation.
 * Models provide:
 * - Type-safe constructors with Partial<IResource> parameter
 * - toJSON() for serialization
 * - clone() for deep copying
 * - with() for immutable updates
 * - fromJSON() static factory method
 * - validate() and validateOrThrow() for validation
 */

import {
  // Resources
  Patient,
  Observation,
  Encounter,
  Practitioner,
  Organization,
  Condition,
  Bundle,
  // Datatypes
  HumanName,
  Address,
  ContactPoint,
  Identifier,
  CodeableConcept,
  Coding,
  Quantity,
  Period,
  Reference,
  // Backbones
  PatientContact,
  PatientCommunication,
  ObservationComponent,
  BundleEntry,
  EncounterParticipant,
} from '@fhir-toolkit/r4-models';

// Helper to print section headers
function section(title: string) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`  ${title}`);
  console.log('='.repeat(60));
}

// Helper to print resource
function printJSON(label: string, obj: any) {
  console.log(`\n  ${label}:`);
  console.log('  ' + JSON.stringify(obj, null, 2).split('\n').join('\n  '));
}

async function main() {
  console.log('\n');
  console.log('*'.repeat(60));
  console.log('*   FHIR Toolkit - Models Examples                         *');
  console.log('*'.repeat(60));

  // ============================================================
  // Example 1: Creating Resources with Plain Objects
  // ============================================================
  section('Example 1: Patient with Plain Objects');

  // Most direct way - pass all data as plain objects
  const patient1 = new Patient({
    id: 'patient-plain',
    active: true,
    name: [
      {
        use: 'official',
        family: 'García',
        given: ['Juan', 'Carlos'],
        prefix: ['Sr.'],
      },
    ],
    gender: 'male',
    birthDate: '1985-06-15',
    telecom: [
      {
        system: 'phone',
        value: '+56-9-1234-5678',
        use: 'mobile',
      },
      {
        system: 'email',
        value: 'juan.garcia@email.com',
        use: 'work',
      },
    ],
    address: [
      {
        use: 'home',
        line: ['Av. Providencia 1234', 'Depto 56'],
        city: 'Santiago',
        state: 'Región Metropolitana',
        postalCode: '7500000',
        country: 'Chile',
      },
    ],
  });

  console.log('\n  Patient created with plain objects:');
  console.log(`    ID: ${patient1.id}`);
  console.log(`    Name: ${patient1.name?.[0]?.given?.join(' ')} ${patient1.name?.[0]?.family}`);
  console.log(`    Gender: ${patient1.gender}`);
  console.log(`    Phone: ${patient1.telecom?.[0]?.value}`);

  // ============================================================
  // Example 2: Creating Resources with Datatype Instances
  // ============================================================
  section('Example 2: Patient with Datatype Instances');

  // Create datatypes as class instances for more control
  const officialName = new HumanName({
    use: 'official',
    family: 'Rodríguez',
    given: ['María', 'Elena'],
    prefix: ['Dra.'],
  });

  const maidenName = new HumanName({
    use: 'maiden',
    family: 'López',
  });

  const homeAddress = new Address({
    use: 'home',
    type: 'physical',
    line: ['Calle Principal 567'],
    city: 'Valparaíso',
    state: 'Valparaíso',
    postalCode: '2340000',
    country: 'Chile',
  });

  const mobilePhone = new ContactPoint({
    system: 'phone',
    value: '+56-9-8765-4321',
    use: 'mobile',
    rank: 1,
  });

  const workEmail = new ContactPoint({
    system: 'email',
    value: 'dra.rodriguez@hospital.cl',
    use: 'work',
  });

  const mrnIdentifier = new Identifier({
    system: 'http://hospital.cl/mrn',
    value: 'MRN-2024-001234',
    type: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
          code: 'MR',
          display: 'Medical Record Number',
        },
      ],
    },
  });

  const patient2 = new Patient({
    id: 'patient-datatypes',
    identifier: [mrnIdentifier.toJSON()],
    active: true,
    name: [officialName.toJSON(), maidenName.toJSON()],
    telecom: [mobilePhone.toJSON(), workEmail.toJSON()],
    gender: 'female',
    birthDate: '1978-03-22',
    address: [homeAddress.toJSON()],
    maritalStatus: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus',
          code: 'M',
          display: 'Married',
        },
      ],
    },
  });

  console.log('\n  Patient created with datatype instances:');
  console.log(`    ID: ${patient2.id}`);
  console.log(`    MRN: ${patient2.identifier?.[0]?.value}`);
  console.log(`    Names: ${patient2.name?.length} (official + maiden)`);
  console.log(`    Address: ${patient2.address?.[0]?.city}`);

  // ============================================================
  // Example 3: Using Backbone Elements
  // ============================================================
  section('Example 3: Patient with Backbone Elements');

  // PatientContact backbone element
  const emergencyContact = new PatientContact({
    relationship: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
            code: 'C',
            display: 'Emergency Contact',
          },
        ],
      },
    ],
    name: {
      family: 'García',
      given: ['Ana'],
    },
    telecom: [
      {
        system: 'phone',
        value: '+56-9-1111-2222',
        use: 'mobile',
      },
    ],
  });

  // PatientCommunication backbone element
  const spanishCommunication = new PatientCommunication({
    language: {
      coding: [
        {
          system: 'urn:ietf:bcp:47',
          code: 'es',
          display: 'Spanish',
        },
      ],
    },
    preferred: true,
  });

  const englishCommunication = new PatientCommunication({
    language: {
      coding: [
        {
          system: 'urn:ietf:bcp:47',
          code: 'en',
          display: 'English',
        },
      ],
    },
    preferred: false,
  });

  const patient3 = new Patient({
    id: 'patient-backbones',
    active: true,
    name: [{ family: 'Pérez', given: ['Roberto'] }],
    gender: 'male',
    contact: [emergencyContact.toJSON()],
    communication: [spanishCommunication.toJSON(), englishCommunication.toJSON()],
  });

  console.log('\n  Patient with backbone elements:');
  console.log(`    Emergency Contact: ${patient3.contact?.[0]?.name?.given?.[0]} ${patient3.contact?.[0]?.name?.family}`);
  console.log(`    Languages: ${patient3.communication?.map((c) => c.language?.coding?.[0]?.display).join(', ')}`);
  console.log(`    Preferred Language: ${patient3.communication?.find((c) => c.preferred)?.language?.coding?.[0]?.display}`);

  // ============================================================
  // Example 4: Observation with Components (Backbones)
  // ============================================================
  section('Example 4: Observation with Component Backbones');

  // Blood pressure observation with systolic/diastolic components
  const systolicComponent = new ObservationComponent({
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '8480-6',
          display: 'Systolic blood pressure',
        },
      ],
    },
    valueQuantity: {
      value: 120,
      unit: 'mmHg',
      system: 'http://unitsofmeasure.org',
      code: 'mm[Hg]',
    },
  });

  const diastolicComponent = new ObservationComponent({
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '8462-4',
          display: 'Diastolic blood pressure',
        },
      ],
    },
    valueQuantity: {
      value: 80,
      unit: 'mmHg',
      system: 'http://unitsofmeasure.org',
      code: 'mm[Hg]',
    },
  });

  const bloodPressure = new Observation({
    id: 'bp-observation',
    status: 'final',
    category: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/observation-category',
            code: 'vital-signs',
            display: 'Vital Signs',
          },
        ],
      },
    ],
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '85354-9',
          display: 'Blood pressure panel',
        },
      ],
      text: 'Blood Pressure',
    },
    subject: {
      reference: 'Patient/patient-plain',
    },
    effectiveDateTime: '2024-01-15T10:30:00Z',
    component: [systolicComponent.toJSON(), diastolicComponent.toJSON()],
  });

  console.log('\n  Blood Pressure Observation:');
  console.log(`    Status: ${bloodPressure.status}`);
  console.log(`    Components:`);
  bloodPressure.component?.forEach((c) => {
    console.log(`      - ${c.code?.coding?.[0]?.display}: ${c.valueQuantity?.value} ${c.valueQuantity?.unit}`);
  });

  // ============================================================
  // Example 5: Immutable Updates with .with()
  // ============================================================
  section('Example 5: Immutable Updates');

  const originalPatient = new Patient({
    id: 'immutable-example',
    active: true,
    name: [{ family: 'Original', given: ['Name'] }],
    gender: 'male',
  });

  // Create a new patient with updated name (original is unchanged)
  const updatedPatient = originalPatient.with({
    name: [{ family: 'Updated', given: ['Name'] }],
    active: false,
  });

  console.log('\n  Original Patient:');
  console.log(`    Name: ${originalPatient.name?.[0]?.family}`);
  console.log(`    Active: ${originalPatient.active}`);

  console.log('\n  Updated Patient (new instance):');
  console.log(`    Name: ${updatedPatient.name?.[0]?.family}`);
  console.log(`    Active: ${updatedPatient.active}`);

  console.log('\n  Original unchanged:', originalPatient.name?.[0]?.family === 'Original');

  // ============================================================
  // Example 6: Cloning Resources
  // ============================================================
  section('Example 6: Deep Cloning');

  const originalObs = new Observation({
    id: 'clone-example',
    status: 'preliminary',
    code: {
      coding: [{ system: 'http://loinc.org', code: '12345-6' }],
    },
  });

  const clonedObs = originalObs.clone();

  // Modify the clone
  clonedObs.status = 'final';

  console.log('\n  Original Observation status:', originalObs.status);
  console.log('  Cloned Observation status:', clonedObs.status);
  console.log('  Are they different objects:', originalObs !== clonedObs);

  // ============================================================
  // Example 7: fromJSON Factory Method
  // ============================================================
  section('Example 7: fromJSON Factory');

  // Simulating JSON received from an API
  const jsonFromAPI = {
    resourceType: 'Patient' as const,
    id: 'from-json-example',
    active: true,
    name: [
      {
        use: 'official' as const,
        family: 'FromJSON',
        given: ['Test'],
      },
    ],
    gender: 'female' as const,
  };

  const patientFromJSON = Patient.fromJSON(jsonFromAPI);

  console.log('\n  Patient created from JSON:');
  console.log(`    ID: ${patientFromJSON.id}`);
  console.log(`    Name: ${patientFromJSON.name?.[0]?.given?.[0]} ${patientFromJSON.name?.[0]?.family}`);
  console.log(`    Is Patient instance: ${patientFromJSON instanceof Patient}`);

  // ============================================================
  // Example 8: Bundle with BundleEntry Backbones
  // ============================================================
  section('Example 8: Bundle with Entry Backbones');

  const entry1 = new BundleEntry({
    fullUrl: 'urn:uuid:patient-1',
    resource: patient1.toJSON(),
    request: {
      method: 'POST',
      url: 'Patient',
    },
  });

  const entry2 = new BundleEntry({
    fullUrl: 'urn:uuid:observation-1',
    resource: bloodPressure.toJSON(),
    request: {
      method: 'POST',
      url: 'Observation',
    },
  });

  const transactionBundle = new Bundle({
    id: 'transaction-bundle',
    type: 'transaction',
    entry: [entry1.toJSON(), entry2.toJSON()],
  });

  console.log('\n  Transaction Bundle:');
  console.log(`    Type: ${transactionBundle.type}`);
  console.log(`    Entries: ${transactionBundle.entry?.length}`);
  transactionBundle.entry?.forEach((e, i) => {
    console.log(`      ${i + 1}. ${e.request?.method} ${e.request?.url} (${e.resource?.resourceType})`);
  });

  // ============================================================
  // Example 9: Encounter with Participant Backbones
  // ============================================================
  section('Example 9: Encounter with Participants');

  const participant1 = new EncounterParticipant({
    type: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
            code: 'PPRF',
            display: 'Primary performer',
          },
        ],
      },
    ],
    individual: {
      reference: 'Practitioner/doctor-1',
      display: 'Dr. García',
    },
  });

  const participant2 = new EncounterParticipant({
    type: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
            code: 'ATND',
            display: 'Attender',
          },
        ],
      },
    ],
    individual: {
      reference: 'Practitioner/nurse-1',
      display: 'Enfermera López',
    },
  });

  const encounter = new Encounter({
    id: 'encounter-example',
    status: 'finished',
    class: {
      system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
      code: 'AMB',
      display: 'ambulatory',
    },
    subject: {
      reference: 'Patient/patient-plain',
    },
    participant: [participant1.toJSON(), participant2.toJSON()],
    period: {
      start: '2024-01-15T09:00:00Z',
      end: '2024-01-15T10:00:00Z',
    },
  });

  console.log('\n  Encounter with participants:');
  console.log(`    Status: ${encounter.status}`);
  console.log(`    Participants:`);
  encounter.participant?.forEach((p) => {
    console.log(`      - ${p.type?.[0]?.coding?.[0]?.display}: ${p.individual?.display}`);
  });

  // ============================================================
  // Example 10: Validation
  // ============================================================
  section('Example 10: Resource Validation');

  const validPatient = new Patient({
    id: 'valid-patient',
    active: true,
    name: [{ family: 'Test' }],
    gender: 'male',
  });

  console.log('\n  Validating patient...');
  const outcome = await validPatient.validate();
  const hasErrors = outcome.issue?.some((i) => i.severity === 'error');
  console.log(`    Valid: ${!hasErrors}`);

  // Invalid patient for demonstration
  const invalidPatient = new Patient({
    id: 'invalid-patient',
    gender: 'invalid-gender' as any, // Invalid value
  });

  console.log('\n  Validating invalid patient...');
  const invalidOutcome = await invalidPatient.validate();
  const errors = invalidOutcome.issue?.filter((i) => i.severity === 'error') || [];
  console.log(`    Errors found: ${errors.length}`);
  errors.forEach((e) => {
    console.log(`      - ${e.diagnostics}`);
  });

  // ============================================================
  // Example 11: toJSON() for Serialization
  // ============================================================
  section('Example 11: Serialization with toJSON()');

  const patientForAPI = new Patient({
    id: 'serialize-example',
    active: true,
    name: [{ family: 'Serialize', given: ['Test'] }],
  });

  // toJSON returns a plain object ready for JSON.stringify
  const jsonData = patientForAPI.toJSON();

  console.log('\n  Serialized to JSON:');
  console.log(`    Type of toJSON(): ${typeof jsonData}`);
  console.log(`    Is plain object: ${jsonData.constructor === Object}`);
  console.log(`    resourceType: ${jsonData.resourceType}`);

  // Ready to send to API
  const jsonString = JSON.stringify(jsonData);
  console.log(`    JSON string length: ${jsonString.length} characters`);

  console.log('\n');
  console.log('*'.repeat(60));
  console.log('*   Models Examples completed!                             *');
  console.log('*'.repeat(60));
  console.log('\n');
}

main().catch(console.error);
