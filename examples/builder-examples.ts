/**
 * FHIR Builder Examples
 *
 * This file demonstrates how to use the fluent builders to create
 * FHIR resources with type safety and validation.
 */

import {
  PatientBuilder,
  ObservationBuilder,
  EncounterBuilder,
  PractitionerBuilder,
  OrganizationBuilder,
  ConditionBuilder,
  MedicationRequestBuilder,
  MedicationBuilder,
  ImmunizationBuilder,
  CarePlanBuilder,
  ServiceRequestBuilder,
  ProcedureBuilder,
  AllergyIntoleranceBuilder,
  BundleBuilder,
} from '@fhir-toolkit/r4-models';

// Helper to print section headers
function section(title: string) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`  ${title}`);
  console.log('='.repeat(60));
}

// Helper to print resource
function printResource(resource: any) {
  console.log('\n  Generated Resource:');
  console.log('  ' + JSON.stringify(resource, null, 2).split('\n').join('\n  '));
}

async function main() {
  console.log('\n');
  console.log('*'.repeat(60));
  console.log('*   FHIR Toolkit - Builder Examples                        *');
  console.log('*'.repeat(60));

  // ============================================================
  // Example 1: Simple Patient
  // ============================================================
  section('Example 1: Simple Patient');

  const simplePatient = new PatientBuilder()
    .setId('patient-1')
    .setActive(true)
    .addName({
      use: 'official',
      family: 'Smith',
      given: ['John', 'Michael'],
    })
    .setGender('male')
    .setBirthDate('1990-05-15')
    .build();

  printResource(simplePatient);

  // ============================================================
  // Example 2: Complete Patient with All Details
  // ============================================================
  section('Example 2: Complete Patient');

  const completePatient = new PatientBuilder()
    .setId('patient-2')
    .setActive(true)
    .addName({
      use: 'official',
      family: 'Johnson',
      given: ['Emily', 'Rose'],
      prefix: ['Mrs.'],
    })
    .addName({
      use: 'maiden',
      family: 'Williams',
    })
    .setGender('female')
    .setBirthDate('1985-03-22')
    .addTelecom({
      system: 'phone',
      value: '+1-555-234-5678',
      use: 'mobile',
    })
    .addTelecom({
      system: 'email',
      value: 'emily.johnson@example.com',
      use: 'home',
    })
    .addAddress({
      use: 'home',
      type: 'physical',
      line: ['456 Oak Avenue', 'Suite 100'],
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94102',
      country: 'USA',
    })
    .setMaritalStatus({
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus',
          code: 'M',
          display: 'Married',
        },
      ],
    })
    .addIdentifier({
      system: 'http://hospital.example.org/patients',
      value: 'MRN-12345',
    })
    .build();

  console.log('\n  Patient ID:', completePatient.id);
  console.log('  Names:', completePatient.name?.length);
  console.log('  Telecoms:', completePatient.telecom?.length);
  console.log('  Addresses:', completePatient.address?.length);

  // ============================================================
  // Example 3: Vital Signs Observation
  // ============================================================
  section('Example 3: Vital Signs Observation');

  // Note: ObservationBuilder uses setEffective('DateTime', value) for choice types
  // and setValue('Quantity', value) for value[x] choice types
  const vitalSignsObs = new ObservationBuilder()
    .setId('obs-vitals-1')
    .setStatus('final')
    .addCategory({
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/observation-category',
          code: 'vital-signs',
          display: 'Vital Signs',
        },
      ],
    })
    .setCode({
      coding: [
        {
          system: 'http://loinc.org',
          code: '8310-5',
          display: 'Body temperature',
        },
      ],
      text: 'Body Temperature',
    })
    .setSubject({
      reference: 'Patient/patient-1',
      display: 'John Smith',
    })
    .setEffective('DateTime', '2024-01-15T10:30:00Z')
    .setValue('Quantity', {
      value: 37.2,
      unit: 'Cel',
      system: 'http://unitsofmeasure.org',
      code: 'Cel',
    } as any)
    .build();

  printResource(vitalSignsObs);

  // ============================================================
  // Example 4: Blood Pressure with Components
  // ============================================================
  section('Example 4: Blood Pressure Observation');

  const bloodPressure = new ObservationBuilder()
    .setId('bp-observation-1')
    .setStatus('final')
    .addCategory({
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/observation-category',
          code: 'vital-signs',
        },
      ],
    })
    .setCode({
      coding: [
        {
          system: 'http://loinc.org',
          code: '85354-9',
          display: 'Blood pressure panel',
        },
      ],
    })
    .setSubject({ reference: 'Patient/patient-1' })
    .setEffective('DateTime', '2024-01-15T10:30:00Z')
    .addComponent({
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
    })
    .addComponent({
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
    })
    .build();

  console.log('\n  Blood Pressure Components:');
  bloodPressure.component?.forEach((c: any, i: number) => {
    console.log(`    ${i + 1}. ${c.code?.coding?.[0]?.display}: ${c.valueQuantity?.value} ${c.valueQuantity?.unit}`);
  });

  // ============================================================
  // Example 5: Practitioner
  // ============================================================
  section('Example 5: Practitioner');

  const practitioner = new PractitionerBuilder()
    .setId('practitioner-1')
    .setActive(true)
    .addName({
      use: 'official',
      family: 'Garcia',
      given: ['Maria'],
      prefix: ['Dr.'],
      suffix: ['MD', 'PhD'],
    })
    .setGender('female')
    .addTelecom({
      system: 'phone',
      value: '+1-555-987-6543',
      use: 'work',
    })
    .addQualification({
      code: {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v2-0360',
            code: 'MD',
            display: 'Doctor of Medicine',
          },
        ],
      },
      issuer: {
        display: 'Harvard Medical School',
      },
    })
    .build();

  console.log('\n  Practitioner:', practitioner.name?.[0]?.prefix?.[0], practitioner.name?.[0]?.given?.[0], practitioner.name?.[0]?.family);
  console.log('  Qualifications:', practitioner.qualification?.length);

  // ============================================================
  // Example 6: Organization
  // ============================================================
  section('Example 6: Organization');

  const organization = new OrganizationBuilder()
    .setId('org-hospital-1')
    .setActive(true)
    .addType({
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/organization-type',
          code: 'prov',
          display: 'Healthcare Provider',
        },
      ],
    })
    .setName('General Hospital')
    .addTelecom({
      system: 'phone',
      value: '+1-555-000-0000',
      use: 'work',
    })
    .addAddress({
      use: 'work',
      line: ['100 Hospital Drive'],
      city: 'Boston',
      state: 'MA',
      postalCode: '02101',
    })
    .build();

  console.log('\n  Organization:', organization.name);
  console.log('  Type:', organization.type?.[0]?.coding?.[0]?.display);

  // ============================================================
  // Example 7: Encounter
  // ============================================================
  section('Example 7: Encounter');

  const encounter = new EncounterBuilder()
    .setId('encounter-1')
    .setStatus('finished')
    .setClass({
      system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
      code: 'AMB',
      display: 'ambulatory',
    })
    .addType({
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '270427003',
          display: 'Patient-initiated encounter',
        },
      ],
    })
    .setSubject({ reference: 'Patient/patient-1' })
    .addParticipant({
      individual: { reference: 'Practitioner/practitioner-1' },
    })
    .setPeriod({
      start: '2024-01-15T09:00:00Z',
      end: '2024-01-15T10:00:00Z',
    })
    .setServiceProvider({ reference: 'Organization/org-hospital-1', type: "Organization" })
    .build();

  console.log('\n  Encounter:', encounter.id);
  console.log('  Status:', encounter.status);
  console.log('  Class:', encounter.class?.display);
  console.log('  Period:', encounter.period?.start, '-', encounter.period?.end);

  // ============================================================
  // Example 8: Condition
  // ============================================================
  section('Example 8: Condition');

  const condition = new ConditionBuilder()
    .setId('condition-1')
    .setClinicalStatus({
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
          code: 'active',
        },
      ],
    })
    .setVerificationStatus({
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
          code: 'confirmed',
        },
      ],
    })
    .addCategory({
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/condition-category',
          code: 'encounter-diagnosis',
        },
      ],
    })
    .setCode({
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '38341003',
          display: 'Hypertensive disorder',
        },
      ],
      text: 'Hypertension',
    })
    .setSubject({ reference: 'Patient/patient-1' })
    .setOnset('DateTime', '2020-06-15')
    .build();

  console.log('\n  Condition:', condition.code?.text);
  console.log('  Clinical Status:', condition.clinicalStatus?.coding?.[0]?.code);
  console.log('  Onset:', (condition as any).onsetDateTime);

  // ============================================================
  // Example 9: MedicationRequest
  // ============================================================
  section('Example 9: MedicationRequest');

  const medRequest = new MedicationRequestBuilder()
    .setId('med-request-1')
    .setStatus('active')
    .setIntent('order')
    .setMedication('CodeableConcept', {
      coding: [
        {
          system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
          code: '197361',
          display: 'Lisinopril 10 MG Oral Tablet',
        },
      ],
    } as any)
    .setSubject({ reference: 'Patient/patient-1' })
    .setAuthoredOn('2024-01-15')
    .setRequester({ reference: 'Practitioner/practitioner-1' })
    .addDosageInstruction({
      text: 'Take one tablet daily',
      timing: {
        repeat: {
          frequency: 1,
          period: 1,
          periodUnit: 'd',
        },
      },
      route: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '26643006',
            display: 'Oral route',
          },
        ],
      },
      doseAndRate: [
        {
          doseQuantity: {
            value: 1,
            unit: 'tablet',
          },
        },
      ],
    })
    .build();

  console.log('\n  Medication:', (medRequest as any).medicationCodeableConcept?.coding?.[0]?.display);
  console.log('  Status:', medRequest.status);
  console.log('  Intent:', medRequest.intent);
  console.log('  Dosage:', medRequest.dosageInstruction?.[0]?.text);

  // ============================================================
  // Example 10: Bundle with Multiple Resources
  // ============================================================
  section('Example 10: Bundle with Resources');

  const bundle = new BundleBuilder()
    .setId('bundle-example')
    .setType('collection')
    .setTimestamp('2024-01-15T12:00:00Z')
    .addEntry({
      fullUrl: 'urn:uuid:patient-1',
      resource: simplePatient,
    })
    .addEntry({
      fullUrl: 'urn:uuid:obs-1',
      resource: vitalSignsObs,
    })
    .addEntry({
      fullUrl: 'urn:uuid:practitioner-1',
      resource: practitioner,
    })
    .build();

  console.log('\n  Bundle Type:', bundle.type);
  console.log('  Total Entries:', bundle.entry?.length);
  console.log('  Entry Resources:');
  bundle.entry?.forEach((entry, i) => {
    console.log(`    ${i + 1}. ${entry.resource?.resourceType}/${entry.resource?.id}`);
  });

  // ============================================================
  // Example 11: Validation with Builder
  // ============================================================
  section('Example 11: Builder with Validation');

  const patientToValidate = new PatientBuilder()
    .setId('validated-patient')
    .setActive(true)
    .addName({ family: 'Test', given: ['Validation'] })
    .setGender('male')
    .setBirthDate('1990-01-01')
    .build();

  console.log('\n  Validating patient...');

  try {
    await patientToValidate.validateOrThrow();
    console.log('  Validation passed!');
  } catch (error: any) {
    console.log('  Validation failed:', error.message);
  }

  // ============================================================
  // Example 12: Medication
  // ============================================================
  section('Example 12: Medication');

  const medication = new MedicationBuilder()
    .setId('med-lisinopril')
    .setCode({
      coding: [
        {
          system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
          code: '197361',
          display: 'Lisinopril 10 MG Oral Tablet',
        },
      ],
      text: 'Lisinopril 10mg',
    })
    .setStatus('active')
    .setForm({
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '385055001',
          display: 'Tablet',
        },
      ],
    })
    .setManufacturer({ reference: 'Organization/pharma-company', display: 'Pharmaceutical Inc.' })
    .addIngredient({
      itemCodeableConcept: {
        coding: [{ code: 'lisinopril', display: 'Lisinopril' }],
      },
      isActive: true,
      strength: {
        numerator: { value: 10, unit: 'mg' },
        denominator: { value: 1, unit: 'tablet' },
      },
    })
    .setBatch({
      lotNumber: 'LOT-2024-001',
      expirationDate: '2025-12-31',
    })
    .build();

  console.log('\n  Medication:', medication.code?.text);
  console.log('  Form:', medication.form?.coding?.[0]?.display);
  console.log('  Lot Number:', medication.batch?.lotNumber);

  // ============================================================
  // Example 13: Immunization (COVID-19 Vaccine)
  // ============================================================
  section('Example 13: Immunization (COVID-19 Vaccine)');

  const immunization = new ImmunizationBuilder()
    .setId('covid-vax-1')
    .setStatus('completed')
    .setVaccineCode({
      coding: [
        {
          system: 'http://hl7.org/fhir/sid/cvx',
          code: '207',
          display: 'COVID-19, mRNA, LNP-S, PF, 100 mcg/ 0.5 mL dose',
        },
      ],
      text: 'Moderna COVID-19 Vaccine',
    })
    .setPatient({ reference: 'Patient/patient-1', display: 'John Smith' })
    .setOccurrence('DateTime', '2024-01-15T10:00:00Z')
    .setRecorded('2024-01-15T10:05:00Z')
    .setPrimarySource(true)
    .setLocation({ reference: 'Location/clinic-main' })
    .setManufacturer({ reference: 'Organization/moderna', display: 'Moderna' })
    .setLotNumber('VAX-2024-001')
    .setExpirationDate('2025-06-30')
    .setSite({
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v3-ActSite',
          code: 'LA',
          display: 'left arm',
        },
      ],
    })
    .setRoute({
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration',
          code: 'IM',
          display: 'Intramuscular',
        },
      ],
    })
    .setDoseQuantity({ value: 0.5, unit: 'mL' })
    .addPerformer({
      function: { coding: [{ code: 'AP', display: 'Administering Provider' }] },
      actor: { reference: 'Practitioner/nurse-1' },
    })
    .addProtocolApplied({
      series: 'COVID-19 Primary Series',
      doseNumberPositiveInt: 1,
      seriesDosesPositiveInt: 2,
    })
    .build();

  console.log('\n  Vaccine:', immunization.vaccineCode?.text);
  console.log('  Lot Number:', immunization.lotNumber);
  console.log('  Primary Source:', immunization.primarySource);

  // ============================================================
  // Example 14: CarePlan (Diabetes Management)
  // ============================================================
  section('Example 14: CarePlan (Diabetes Management)');

  const carePlan = new CarePlanBuilder()
    .setId('diabetes-plan')
    .setStatus('active')
    .setIntent('plan')
    .setTitle('Type 2 Diabetes Management Plan')
    .setDescription('Comprehensive care plan for managing Type 2 Diabetes')
    .setSubject({ reference: 'Patient/patient-1', display: 'John Smith' })
    .setPeriod({ start: '2024-01-15', end: '2024-12-31' })
    .setCreated('2024-01-15T10:00:00Z')
    .setAuthor({ reference: 'Practitioner/practitioner-1' })
    .addCategory({
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '734163000',
          display: 'Care plan for diabetes',
        },
      ],
    })
    .addAddresses({ reference: 'Condition/condition-1', display: 'Type 2 Diabetes' })
    .addGoal({ reference: 'Goal/hba1c-target', display: 'HbA1c < 7%' })
    .addGoal({ reference: 'Goal/weight-loss', display: 'Lose 15 pounds' })
    .addActivity({
      detail: {
        kind: 'MedicationRequest',
        code: { coding: [{ code: 'medication-therapy' }] },
        status: 'in-progress',
        scheduledTiming: { repeat: { frequency: 2, period: 1, periodUnit: 'd' } },
        description: 'Metformin 1000mg twice daily',
      },
    })
    .addActivity({
      detail: {
        kind: 'ServiceRequest',
        code: { coding: [{ code: 'lab-monitoring' }] },
        status: 'scheduled',
        scheduledTiming: { repeat: { frequency: 1, period: 3, periodUnit: 'mo' } },
        description: 'HbA1c every 3 months',
      },
    })
    .addNote({ text: 'Patient motivated to make lifestyle changes' })
    .build();

  console.log('\n  Care Plan:', carePlan.title);
  console.log('  Goals:', carePlan.goal?.length);
  console.log('  Activities:', carePlan.activity?.length);

  // ============================================================
  // Example 15: ServiceRequest (Lab Order)
  // ============================================================
  section('Example 15: ServiceRequest (Lab Order)');

  const labOrder = new ServiceRequestBuilder()
    .setId('lab-order-lipids')
    .setStatus('active')
    .setIntent('order')
    .setPriority('routine')
    .setCode({
      coding: [
        {
          system: 'http://loinc.org',
          code: '24331-1',
          display: 'Lipid panel - Serum or Plasma',
        },
      ],
      text: 'Lipid Panel',
    })
    .setSubject({ reference: 'Patient/patient-1' })
    .setEncounter({ reference: 'Encounter/encounter-1' })
    .setAuthoredOn('2024-01-15T10:00:00Z')
    .setRequester({ reference: 'Practitioner/practitioner-1' })
    .addCategory({
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '108252007',
          display: 'Laboratory procedure',
        },
      ],
    })
    .addPerformer({ reference: 'Organization/lab-main' })
    .setPatientInstruction('Please fast for 12 hours before your lab appointment')
    .addNote({ text: 'Routine screening for cardiovascular risk' })
    .build();

  console.log('\n  Lab Order:', labOrder.code?.text);
  console.log('  Priority:', labOrder.priority);
  console.log('  Patient Instruction:', labOrder.patientInstruction);

  // ============================================================
  // Example 16: Procedure (Appendectomy)
  // ============================================================
  section('Example 16: Procedure (Appendectomy)');

  const procedure = new ProcedureBuilder()
    .setId('appendectomy-1')
    .setStatus('completed')
    .setCategory({
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '387713003',
          display: 'Surgical procedure',
        },
      ],
    })
    .setCode({
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '80146002',
          display: 'Appendectomy',
        },
      ],
      text: 'Laparoscopic Appendectomy',
    })
    .setSubject({ reference: 'Patient/patient-1' })
    .setPerformed('Period', {
      start: '2024-01-15T09:00:00Z',
      end: '2024-01-15T10:45:00Z',
    } as any)
    .addPerformer({
      function: { coding: [{ code: 'primary-surgeon' }] },
      actor: { reference: 'Practitioner/surgeon-1', display: 'Dr. Surgeon' },
    })
    .setLocation({ reference: 'Location/operating-room-1' })
    .addBodySite({
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '66754008',
          display: 'Appendix',
        },
      ],
    })
    .setOutcome({
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '385669000',
          display: 'Successful',
        },
      ],
    })
    .addNote({ text: 'Procedure completed without complications' })
    .build();

  console.log('\n  Procedure:', procedure.code?.text);
  console.log('  Status:', procedure.status);
  console.log('  Outcome:', procedure.outcome?.coding?.[0]?.display);

  // ============================================================
  // Example 17: AllergyIntolerance (Penicillin Allergy)
  // ============================================================
  section('Example 17: AllergyIntolerance (Penicillin)');

  const allergy = new AllergyIntoleranceBuilder()
    .setId('penicillin-allergy')
    .setClinicalStatus({
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical',
          code: 'active',
        },
      ],
    })
    .setVerificationStatus({
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/allergyintolerance-verification',
          code: 'confirmed',
        },
      ],
    })
    .setType('allergy')
    .addCategory('medication')
    .setCriticality('high')
    .setCode({
      coding: [
        {
          system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
          code: '7980',
          display: 'Penicillin',
        },
      ],
      text: 'Penicillin',
    })
    .setPatient({ reference: 'Patient/patient-1' })
    .setOnset('DateTime', '2010-03-15')
    .setRecordedDate('2024-01-15T10:00:00Z')
    .addReaction({
      manifestation: [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '39579001',
              display: 'Anaphylaxis',
            },
          ],
        },
      ],
      description: 'Severe anaphylactic reaction',
      severity: 'severe',
    })
    .addNote({ text: 'Patient must avoid all penicillin-based antibiotics' })
    .build();

  console.log('\n  Allergy:', allergy.code?.text);
  console.log('  Criticality:', allergy.criticality);
  console.log('  Reactions:', allergy.reaction?.length);

  console.log('\n');
  console.log('*'.repeat(60));
  console.log('*   Builder Examples completed!                            *');
  console.log('*'.repeat(60));
  console.log('\n');
}

main().catch(console.error);
