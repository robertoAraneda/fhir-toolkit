/**
 * FHIR Backbone Elements Examples
 *
 * Backbone elements are complex types that are specific to a particular resource.
 * Unlike DataTypes which are reusable across resources, backbones are defined
 * within a specific resource context.
 *
 * Examples:
 * - Patient.contact (PatientContact)
 * - Patient.communication (PatientCommunication)
 * - Observation.component (ObservationComponent)
 * - Bundle.entry (BundleEntry)
 * - Encounter.participant (EncounterParticipant)
 * - MedicationRequest.dosageInstruction (uses Dosage datatype)
 */

import {
  // Resources
  Patient,
  Observation,
  Bundle,
  Encounter,
  Condition,
  AllergyIntolerance,
  CarePlan,
  DiagnosticReport,
  Immunization,
  MedicationRequest,

  // Backbone Elements
  PatientContact,
  PatientCommunication,
  PatientLink,
  ObservationComponent,
  ObservationReferenceRange,
  BundleEntry,
  BundleEntryRequest,
  BundleEntryResponse,
  BundleLink,
  EncounterParticipant,
  EncounterDiagnosis,
  EncounterHospitalization,
  EncounterLocation,
  ConditionStage,
  ConditionEvidence,
  AllergyIntoleranceReaction,
  CarePlanActivity,
  CarePlanActivityDetail,
  DiagnosticReportMedia,
  ImmunizationPerformer,
  ImmunizationProtocolApplied,

  // DataTypes (for use in backbones)
  CodeableConcept,
  Reference,
  Period,
  Quantity,
  Dosage,
} from '@fhir-toolkit/r4-models';

// Helper to print section headers
function section(title: string) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`  ${title}`);
  console.log('='.repeat(60));
}

async function main() {
  console.log('\n');
  console.log('*'.repeat(60));
  console.log('*   FHIR Toolkit - Backbone Elements Examples              *');
  console.log('*'.repeat(60));

  // ============================================================
  // Patient Backbone Elements
  // ============================================================
  section('1. Patient Backbones');

  // PatientContact - Emergency contact
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
        text: 'Contacto de Emergencia',
      },
    ],
    name: {
      use: 'official',
      family: 'García',
      given: ['María', 'Elena'],
    },
    telecom: [
      {
        system: 'phone',
        value: '+56 9 8765 4321',
        use: 'mobile',
      },
      {
        system: 'email',
        value: 'maria.garcia@email.com',
      },
    ],
    address: {
      use: 'home',
      line: ['Av. Los Leones 1234'],
      city: 'Santiago',
      country: 'Chile',
    },
    gender: 'female',
    period: {
      start: '2020-01-01',
    },
  });

  console.log('\n  Emergency Contact:');
  console.log(`    Name: ${emergencyContact.name?.given?.join(' ')} ${emergencyContact.name?.family}`);
  console.log(`    Relationship: ${emergencyContact.relationship?.[0]?.text}`);
  console.log(`    Phone: ${emergencyContact.telecom?.[0]?.value}`);

  // PatientCommunication - Languages
  const spanishComm = new PatientCommunication({
    language: {
      coding: [
        {
          system: 'urn:ietf:bcp:47',
          code: 'es-CL',
          display: 'Spanish (Chile)',
        },
      ],
      text: 'Español (Chile)',
    },
    preferred: true,
  });

  const englishComm = new PatientCommunication({
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

  console.log('\n  Patient Communications:');
  console.log(`    Spanish: preferred=${spanishComm.preferred}`);
  console.log(`    English: preferred=${englishComm.preferred}`);

  // PatientLink - Linking patient records
  const patientLink = new PatientLink({
    other: {
      reference: 'Patient/old-record-123',
      display: 'Previous patient record',
    },
    type: 'replaces',
  });

  console.log('\n  Patient Link:');
  console.log(`    Type: ${patientLink.type}`);
  console.log(`    Other: ${patientLink.other?.reference}`);

  // Create Patient with all backbone elements
  const patientWithBackbones = new Patient({
    id: 'patient-with-backbones',
    active: true,
    name: [{ family: 'Pérez', given: ['Juan'] }],
    gender: 'male',
    contact: [emergencyContact.toJSON()],
    communication: [spanishComm.toJSON(), englishComm.toJSON()],
    link: [patientLink.toJSON()],
  });

  console.log('\n  Complete Patient:');
  console.log(`    Contacts: ${patientWithBackbones.contact?.length}`);
  console.log(`    Languages: ${patientWithBackbones.communication?.length}`);
  console.log(`    Links: ${patientWithBackbones.link?.length}`);

  // ============================================================
  // Observation Backbone Elements
  // ============================================================
  section('2. Observation Backbones');

  // ObservationComponent - Blood pressure components
  const systolicComponent = new ObservationComponent({
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '8480-6',
          display: 'Systolic blood pressure',
        },
      ],
      text: 'Presión Sistólica',
    },
    valueQuantity: {
      value: 125,
      unit: 'mmHg',
      system: 'http://unitsofmeasure.org',
      code: 'mm[Hg]',
    },
    interpretation: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
            code: 'H',
            display: 'High',
          },
        ],
      },
    ],
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
      text: 'Presión Diastólica',
    },
    valueQuantity: {
      value: 82,
      unit: 'mmHg',
      system: 'http://unitsofmeasure.org',
      code: 'mm[Hg]',
    },
    interpretation: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
            code: 'N',
            display: 'Normal',
          },
        ],
      },
    ],
  });

  console.log('\n  Blood Pressure Components:');
  console.log(`    Systolic: ${systolicComponent.valueQuantity?.value} ${systolicComponent.valueQuantity?.unit} (${systolicComponent.interpretation?.[0]?.coding?.[0]?.display})`);
  console.log(`    Diastolic: ${diastolicComponent.valueQuantity?.value} ${diastolicComponent.valueQuantity?.unit} (${diastolicComponent.interpretation?.[0]?.coding?.[0]?.display})`);

  // ObservationReferenceRange
  const normalBPRange = new ObservationReferenceRange({
    low: {
      value: 90,
      unit: 'mmHg',
      system: 'http://unitsofmeasure.org',
      code: 'mm[Hg]',
    },
    high: {
      value: 120,
      unit: 'mmHg',
      system: 'http://unitsofmeasure.org',
      code: 'mm[Hg]',
    },
    type: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/referencerange-meaning',
          code: 'normal',
          display: 'Normal Range',
        },
      ],
    },
    text: 'Rango normal para adultos',
  });

  console.log('\n  Reference Range:');
  console.log(`    Low: ${normalBPRange.low?.value} ${normalBPRange.low?.unit}`);
  console.log(`    High: ${normalBPRange.high?.value} ${normalBPRange.high?.unit}`);
  console.log(`    Type: ${normalBPRange.type?.coding?.[0]?.display}`);

  // Complete Observation with backbones
  const bpObservation = new Observation({
    id: 'bp-observation',
    status: 'final',
    category: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/observation-category',
            code: 'vital-signs',
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
    },
    subject: { reference: 'Patient/patient-with-backbones' },
    effectiveDateTime: '2024-01-15T10:30:00Z',
    component: [systolicComponent.toJSON(), diastolicComponent.toJSON()],
    referenceRange: [normalBPRange.toJSON()],
  });

  console.log('\n  Complete Observation:');
  console.log(`    Components: ${bpObservation.component?.length}`);
  console.log(`    Reference Ranges: ${bpObservation.referenceRange?.length}`);

  // ============================================================
  // Bundle Backbone Elements
  // ============================================================
  section('3. Bundle Backbones');

  // BundleLink - Pagination
  const selfLink = new BundleLink({
    relation: 'self',
    url: 'http://api.hospital.cl/fhir/Patient?_count=10&_page=1',
  });

  const nextLink = new BundleLink({
    relation: 'next',
    url: 'http://api.hospital.cl/fhir/Patient?_count=10&_page=2',
  });

  console.log('\n  Bundle Links:');
  console.log(`    Self: ${selfLink.url}`);
  console.log(`    Next: ${nextLink.url}`);

  // BundleEntry with request (for transaction bundle)
  const createPatientEntry = new BundleEntry({
    fullUrl: 'urn:uuid:new-patient-1',
    resource: patientWithBackbones.toJSON(),
    request: {
      method: 'POST',
      url: 'Patient',
    },
  });

  // BundleEntry with response (for response bundle)
  const responseEntry = new BundleEntry({
    fullUrl: 'http://api.hospital.cl/fhir/Patient/123',
    resource: patientWithBackbones.toJSON(),
    response: {
      status: '201 Created',
      location: 'Patient/123/_history/1',
      etag: 'W/"1"',
      lastModified: '2024-01-15T10:30:00Z',
    },
  });

  console.log('\n  Transaction Entry:');
  console.log(`    Method: ${createPatientEntry.request?.method}`);
  console.log(`    URL: ${createPatientEntry.request?.url}`);
  console.log(`    FullUrl: ${createPatientEntry.fullUrl}`);

  console.log('\n  Response Entry:');
  console.log(`    Status: ${responseEntry.response?.status}`);
  console.log(`    Location: ${responseEntry.response?.location}`);
  console.log(`    ETag: ${responseEntry.response?.etag}`);

  // Complete Bundle
  const transactionBundle = new Bundle({
    id: 'transaction-bundle',
    type: 'transaction',
    link: [selfLink.toJSON()],
    entry: [createPatientEntry.toJSON()],
  });

  console.log('\n  Transaction Bundle:');
  console.log(`    Type: ${transactionBundle.type}`);
  console.log(`    Links: ${transactionBundle.link?.length}`);
  console.log(`    Entries: ${transactionBundle.entry?.length}`);

  // ============================================================
  // Encounter Backbone Elements
  // ============================================================
  section('4. Encounter Backbones');

  // EncounterParticipant
  const attendingPhysician = new EncounterParticipant({
    type: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
            code: 'ATND',
            display: 'attender',
          },
        ],
        text: 'Médico Tratante',
      },
    ],
    period: {
      start: '2024-01-15T09:00:00Z',
      end: '2024-01-15T10:00:00Z',
    },
    individual: {
      reference: 'Practitioner/dr-garcia',
      display: 'Dr. Juan García',
    },
  });

  const consultingPhysician = new EncounterParticipant({
    type: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
            code: 'CON',
            display: 'consultant',
          },
        ],
      },
    ],
    individual: {
      reference: 'Practitioner/dr-lopez',
      display: 'Dra. María López - Cardiología',
    },
  });

  console.log('\n  Encounter Participants:');
  console.log(`    Attending: ${attendingPhysician.individual?.display}`);
  console.log(`    Consultant: ${consultingPhysician.individual?.display}`);

  // EncounterDiagnosis
  const primaryDiagnosis = new EncounterDiagnosis({
    condition: {
      reference: 'Condition/hypertension-1',
      display: 'Hipertensión Arterial',
    },
    use: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/diagnosis-role',
          code: 'DD',
          display: 'Discharge diagnosis',
        },
      ],
    },
    rank: 1,
  });

  console.log('\n  Encounter Diagnosis:');
  console.log(`    Condition: ${primaryDiagnosis.condition?.display}`);
  console.log(`    Role: ${primaryDiagnosis.use?.coding?.[0]?.display}`);
  console.log(`    Rank: ${primaryDiagnosis.rank}`);

  // EncounterHospitalization
  const hospitalization = new EncounterHospitalization({
    preAdmissionIdentifier: {
      system: 'http://hospital.cl/pre-admission',
      value: 'PA-2024-001',
    },
    origin: {
      reference: 'Location/emergency-dept',
      display: 'Servicio de Urgencias',
    },
    admitSource: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/admit-source',
          code: 'emd',
          display: 'From accident/emergency department',
        },
      ],
    },
    dietPreference: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/diet',
            code: 'low-salt',
            display: 'Low Salt',
          },
        ],
        text: 'Dieta baja en sodio',
      },
    ],
    dischargeDisposition: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/discharge-disposition',
          code: 'home',
          display: 'Home',
        },
      ],
      text: 'Alta a domicilio',
    },
  });

  console.log('\n  Hospitalization Details:');
  console.log(`    Origin: ${hospitalization.origin?.display}`);
  console.log(`    Admit Source: ${hospitalization.admitSource?.coding?.[0]?.display}`);
  console.log(`    Diet: ${hospitalization.dietPreference?.[0]?.text}`);
  console.log(`    Discharge: ${hospitalization.dischargeDisposition?.text}`);

  // EncounterLocation
  const encounterLocation = new EncounterLocation({
    location: {
      reference: 'Location/room-305',
      display: 'Habitación 305 - Medicina Interna',
    },
    status: 'completed',
    physicalType: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/location-physical-type',
          code: 'ro',
          display: 'Room',
        },
      ],
    },
    period: {
      start: '2024-01-15T09:00:00Z',
      end: '2024-01-20T14:00:00Z',
    },
  });

  console.log('\n  Encounter Location:');
  console.log(`    Location: ${encounterLocation.location?.display}`);
  console.log(`    Status: ${encounterLocation.status}`);
  console.log(`    Type: ${encounterLocation.physicalType?.coding?.[0]?.display}`);

  // Complete Encounter
  const encounter = new Encounter({
    id: 'encounter-with-backbones',
    status: 'finished',
    class: {
      system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
      code: 'IMP',
      display: 'inpatient encounter',
    },
    subject: { reference: 'Patient/patient-with-backbones' },
    participant: [attendingPhysician.toJSON(), consultingPhysician.toJSON()],
    diagnosis: [primaryDiagnosis.toJSON()],
    hospitalization: hospitalization.toJSON(),
    location: [encounterLocation.toJSON()],
  });

  console.log('\n  Complete Encounter:');
  console.log(`    Participants: ${encounter.participant?.length}`);
  console.log(`    Diagnoses: ${encounter.diagnosis?.length}`);
  console.log(`    Locations: ${encounter.location?.length}`);

  // ============================================================
  // Condition Backbone Elements
  // ============================================================
  section('5. Condition Backbones');

  // ConditionStage
  const cancerStage = new ConditionStage({
    summary: {
      coding: [
        {
          system: 'http://cancerstaging.org',
          code: 'IIA',
          display: 'Stage IIA',
        },
      ],
      text: 'Estadio IIA',
    },
    type: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '254293002',
          display: 'TNM tumor staging system',
        },
      ],
    },
  });

  console.log('\n  Condition Stage:');
  console.log(`    Summary: ${cancerStage.summary?.text}`);
  console.log(`    Type: ${cancerStage.type?.coding?.[0]?.display}`);

  // ConditionEvidence
  const conditionEvidence = new ConditionEvidence({
    code: [
      {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '703421000',
            display: 'Temperature (finding)',
          },
        ],
        text: 'Fiebre',
      },
    ],
    detail: [
      {
        reference: 'Observation/temp-observation-1',
        display: 'Temperatura 38.5°C',
      },
    ],
  });

  console.log('\n  Condition Evidence:');
  console.log(`    Code: ${conditionEvidence.code?.[0]?.text}`);
  console.log(`    Detail: ${conditionEvidence.detail?.[0]?.display}`);

  // ============================================================
  // AllergyIntolerance Backbone Elements
  // ============================================================
  section('6. AllergyIntolerance Backbones');

  // AllergyIntoleranceReaction
  const allergyReaction = new AllergyIntoleranceReaction({
    substance: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '764146007',
          display: 'Penicillin',
        },
      ],
    },
    manifestation: [
      {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '39579001',
            display: 'Anaphylaxis',
          },
        ],
        text: 'Anafilaxia',
      },
      {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '271807003',
            display: 'Skin rash',
          },
        ],
        text: 'Erupción cutánea',
      },
    ],
    severity: 'severe',
    onset: '2020-03-15',
    note: [
      {
        text: 'Paciente requirió epinefrina en urgencias',
      },
    ],
  });

  console.log('\n  Allergy Reaction:');
  console.log(`    Substance: ${allergyReaction.substance?.coding?.[0]?.display}`);
  console.log(`    Severity: ${allergyReaction.severity}`);
  console.log(`    Manifestations:`);
  allergyReaction.manifestation?.forEach((m) => {
    console.log(`      - ${m.text}`);
  });

  // Complete AllergyIntolerance
  const penicillinAllergy = new AllergyIntolerance({
    id: 'penicillin-allergy',
    clinicalStatus: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical',
          code: 'active',
        },
      ],
    },
    verificationStatus: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/allergyintolerance-verification',
          code: 'confirmed',
        },
      ],
    },
    type: 'allergy',
    category: ['medication'],
    criticality: 'high',
    code: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '764146007',
          display: 'Penicillin',
        },
      ],
    },
    patient: { reference: 'Patient/patient-with-backbones' },
    reaction: [allergyReaction.toJSON()],
  });

  console.log('\n  Complete Allergy:');
  console.log(`    Code: ${penicillinAllergy.code?.coding?.[0]?.display}`);
  console.log(`    Criticality: ${penicillinAllergy.criticality}`);
  console.log(`    Reactions: ${penicillinAllergy.reaction?.length}`);

  // ============================================================
  // DiagnosticReport Backbone Elements
  // ============================================================
  section('7. DiagnosticReport Backbones');

  // DiagnosticReportMedia
  const xrayMedia = new DiagnosticReportMedia({
    comment: 'Radiografía de tórax PA y lateral',
    link: {
      reference: 'Media/chest-xray-1',
      display: 'Chest X-Ray 2024-01-15',
    },
  });

  console.log('\n  Diagnostic Report Media:');
  console.log(`    Comment: ${xrayMedia.comment}`);
  console.log(`    Link: ${xrayMedia.link?.display}`);

  // ============================================================
  // Immunization Backbone Elements
  // ============================================================
  section('8. Immunization Backbones');

  // ImmunizationPerformer
  const vaccinePerformer = new ImmunizationPerformer({
    function: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
          code: 'AP',
          display: 'Administering Provider',
        },
      ],
    },
    actor: {
      reference: 'Practitioner/nurse-1',
      display: 'Enfermera López',
    },
  });

  console.log('\n  Immunization Performer:');
  console.log(`    Function: ${vaccinePerformer.function?.coding?.[0]?.display}`);
  console.log(`    Actor: ${vaccinePerformer.actor?.display}`);

  // ImmunizationProtocolApplied
  const vaccineProtocol = new ImmunizationProtocolApplied({
    series: 'COVID-19 Primary Series',
    targetDisease: [
      {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '840539006',
            display: 'COVID-19',
          },
        ],
      },
    ],
    doseNumberPositiveInt: 2,
    seriesDosesPositiveInt: 2,
  });

  console.log('\n  Immunization Protocol:');
  console.log(`    Series: ${vaccineProtocol.series}`);
  console.log(`    Dose: ${vaccineProtocol.doseNumberPositiveInt} of ${vaccineProtocol.seriesDosesPositiveInt}`);
  console.log(`    Target Disease: ${vaccineProtocol.targetDisease?.[0]?.coding?.[0]?.display}`);

  // ============================================================
  // CarePlan Backbone Elements
  // ============================================================
  section('9. CarePlan Backbones');

  // CarePlanActivityDetail
  const activityDetail = new CarePlanActivityDetail({
    kind: 'MedicationRequest',
    status: 'in-progress',
    code: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '432102000',
          display: 'Administration of antihypertensive medication',
        },
      ],
      text: 'Administración de antihipertensivo',
    },
    description: 'Tomar Losartán 50mg una vez al día',
    scheduledTiming: {
      repeat: {
        frequency: 1,
        period: 1,
        periodUnit: 'd',
        when: ['MORN'],
      },
    },
  });

  // CarePlanActivity
  const carePlanActivity = new CarePlanActivity({
    outcomeCodeableConcept: [
      {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '385669000',
            display: 'Successful',
          },
        ],
      },
    ],
    detail: activityDetail.toJSON(),
  });

  console.log('\n  CarePlan Activity:');
  console.log(`    Kind: ${carePlanActivity.detail?.kind}`);
  console.log(`    Status: ${carePlanActivity.detail?.status}`);
  console.log(`    Description: ${carePlanActivity.detail?.description}`);

  // ============================================================
  // Summary: Working with Backbones
  // ============================================================
  section('10. Best Practices Summary');

  console.log(`
  Working with Backbone Elements:

  1. Create backbones as class instances:
     const contact = new PatientContact({ ... });

  2. Convert to JSON when adding to resource:
     patient.contact = [contact.toJSON()];

  3. Backbones support:
     - toJSON() for serialization
     - clone() for deep copying
     - with() for immutable updates

  4. Common backbone patterns:
     - Patient: contact, communication, link
     - Observation: component, referenceRange
     - Bundle: entry, link
     - Encounter: participant, diagnosis, hospitalization, location
     - Condition: stage, evidence
     - AllergyIntolerance: reaction
     - CarePlan: activity

  5. Backbones are resource-specific:
     - PatientContact only for Patient
     - ObservationComponent only for Observation
     - BundleEntry only for Bundle
  `);

  console.log('\n');
  console.log('*'.repeat(60));
  console.log('*   Backbone Elements Examples completed!                  *');
  console.log('*'.repeat(60));
  console.log('\n');
}

main().catch(console.error);
