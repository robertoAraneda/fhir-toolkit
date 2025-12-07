/**
 * FHIR DataTypes Examples
 *
 * This file demonstrates how to use FHIR DataType classes.
 * DataTypes are reusable complex types used within resources.
 *
 * Categories:
 * - General Purpose: Identifier, CodeableConcept, Coding, Quantity, etc.
 * - Human Info: HumanName, Address, ContactPoint
 * - References: Reference
 * - Time-related: Period, Timing
 * - Special: Attachment, Annotation, Signature
 */

import {
  // General Purpose DataTypes
  Identifier,
  CodeableConcept,
  Coding,
  Quantity,
  Range,
  Ratio,
  Money,

  // Human Information DataTypes
  HumanName,
  Address,
  ContactPoint,

  // Reference and Metadata
  Reference,
  Meta,
  Narrative,

  // Time-related DataTypes
  Period,
  Timing,
  Duration,
  Age,

  // Special DataTypes
  Attachment,
  Annotation,
  Signature,

  // Quantity Variants
  SimpleQuantity,
  Distance,
  Count,
} from '@fhir-toolkit/r4-models';

// Helper to print section headers
function section(title: string) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`  ${title}`);
  console.log('='.repeat(60));
}

// Helper to print datatype
function printDataType(label: string, dt: any) {
  console.log(`\n  ${label}:`);
  console.log('  ' + JSON.stringify(dt.toJSON(), null, 2).split('\n').join('\n  '));
}

async function main() {
  console.log('\n');
  console.log('*'.repeat(60));
  console.log('*   FHIR Toolkit - DataTypes Examples                      *');
  console.log('*'.repeat(60));

  // ============================================================
  // Identifier Examples
  // ============================================================
  section('1. Identifier DataType');

  // Medical Record Number
  const mrn = new Identifier({
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
    period: {
      start: '2020-01-01',
    },
    assigner: {
      display: 'Hospital Example',
    },
  });

  console.log('\n  Medical Record Number:');
  console.log(`    Use: ${mrn.use}`);
  console.log(`    System: ${mrn.system}`);
  console.log(`    Value: ${mrn.value}`);
  console.log(`    Type: ${mrn.type?.coding?.[0]?.display}`);

  // National ID
  const nationalId = new Identifier({
    use: 'official',
    type: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
          code: 'NI',
          display: 'National unique individual identifier',
        },
      ],
    },
    system: 'http://registrocivil.cl/run',
    value: '12.345.678-9',
  });

  console.log('\n  National ID (RUN):');
  console.log(`    Value: ${nationalId.value}`);

  // ============================================================
  // CodeableConcept and Coding Examples
  // ============================================================
  section('2. CodeableConcept and Coding');

  // Single coding
  const snomedCoding = new Coding({
    system: 'http://snomed.info/sct',
    code: '38341003',
    display: 'Hypertensive disorder, systemic arterial',
  });

  // CodeableConcept with multiple codings
  const hypertensionCode = new CodeableConcept({
    coding: [
      snomedCoding.toJSON(),
      {
        system: 'http://hl7.org/fhir/sid/icd-10',
        code: 'I10',
        display: 'Essential (primary) hypertension',
      },
    ],
    text: 'Hipertensión Arterial',
  });

  console.log('\n  Hypertension CodeableConcept:');
  console.log(`    Text: ${hypertensionCode.text}`);
  console.log(`    Codings: ${hypertensionCode.coding?.length}`);
  hypertensionCode.coding?.forEach((c, i) => {
    console.log(`      ${i + 1}. [${c.system?.split('/').pop()}] ${c.code}: ${c.display}`);
  });

  // ============================================================
  // HumanName Examples
  // ============================================================
  section('3. HumanName DataType');

  // Official name with all parts
  const fullName = new HumanName({
    use: 'official',
    text: 'Dr. Juan Carlos García López',
    family: 'García López',
    given: ['Juan', 'Carlos'],
    prefix: ['Dr.'],
    suffix: ['MD', 'PhD'],
    period: {
      start: '1990-01-01',
    },
  });

  console.log('\n  Full Name:');
  console.log(`    Text: ${fullName.text}`);
  console.log(`    Prefix: ${fullName.prefix?.join(' ')}`);
  console.log(`    Given: ${fullName.given?.join(' ')}`);
  console.log(`    Family: ${fullName.family}`);
  console.log(`    Suffix: ${fullName.suffix?.join(', ')}`);

  // Maiden name
  const maidenName = new HumanName({
    use: 'maiden',
    family: 'Rodríguez',
    period: {
      end: '2015-06-15', // Until marriage
    },
  });

  console.log('\n  Maiden Name:');
  console.log(`    Use: ${maidenName.use}`);
  console.log(`    Family: ${maidenName.family}`);

  // Immutable update
  const updatedName = fullName.with({ suffix: ['MD', 'PhD', 'FACC'] });
  console.log('\n  Updated Name (immutable):');
  console.log(`    Original suffix: ${fullName.suffix?.join(', ')}`);
  console.log(`    Updated suffix: ${updatedName.suffix?.join(', ')}`);

  // ============================================================
  // Address Examples
  // ============================================================
  section('4. Address DataType');

  const homeAddress = new Address({
    use: 'home',
    type: 'physical',
    text: 'Av. Providencia 1234, Depto 56, Providencia, Santiago, Chile',
    line: ['Av. Providencia 1234', 'Depto 56'],
    city: 'Providencia',
    district: 'Santiago',
    state: 'Región Metropolitana',
    postalCode: '7500000',
    country: 'Chile',
    period: {
      start: '2020-01-01',
    },
  });

  console.log('\n  Home Address:');
  console.log(`    Use: ${homeAddress.use}`);
  console.log(`    Lines: ${homeAddress.line?.join(', ')}`);
  console.log(`    City: ${homeAddress.city}`);
  console.log(`    State: ${homeAddress.state}`);
  console.log(`    Country: ${homeAddress.country}`);

  const workAddress = new Address({
    use: 'work',
    type: 'both', // Physical and postal
    line: ['Hospital Central, Piso 5'],
    city: 'Santiago',
    country: 'Chile',
  });

  console.log('\n  Work Address:');
  console.log(`    Use: ${workAddress.use}`);
  console.log(`    Type: ${workAddress.type}`);

  // ============================================================
  // ContactPoint Examples
  // ============================================================
  section('5. ContactPoint DataType');

  const mobilePhone = new ContactPoint({
    system: 'phone',
    value: '+56 9 1234 5678',
    use: 'mobile',
    rank: 1, // Primary contact
  });

  const workPhone = new ContactPoint({
    system: 'phone',
    value: '+56 2 2345 6789',
    use: 'work',
    rank: 2,
  });

  const email = new ContactPoint({
    system: 'email',
    value: 'juan.garcia@hospital.cl',
    use: 'work',
  });

  const fax = new ContactPoint({
    system: 'fax',
    value: '+56 2 2345 6780',
    use: 'work',
  });

  console.log('\n  Contact Points:');
  [mobilePhone, workPhone, email, fax].forEach((cp) => {
    console.log(`    [${cp.system}] ${cp.value} (${cp.use}${cp.rank ? `, rank: ${cp.rank}` : ''})`);
  });

  // ============================================================
  // Quantity Examples
  // ============================================================
  section('6. Quantity and Variants');

  // Basic Quantity
  const weight = new Quantity({
    value: 75.5,
    unit: 'kg',
    system: 'http://unitsofmeasure.org',
    code: 'kg',
  });

  console.log('\n  Weight:');
  console.log(`    Value: ${weight.value} ${weight.unit}`);

  // Quantity with comparator
  const bloodPressureLimit = new Quantity({
    value: 140,
    comparator: '<=',
    unit: 'mmHg',
    system: 'http://unitsofmeasure.org',
    code: 'mm[Hg]',
  });

  console.log('\n  Blood Pressure Limit:');
  console.log(`    Value: ${bloodPressureLimit.comparator}${bloodPressureLimit.value} ${bloodPressureLimit.unit}`);

  // Age
  const patientAge = new Age({
    value: 45,
    unit: 'years',
    system: 'http://unitsofmeasure.org',
    code: 'a',
  });

  console.log('\n  Patient Age:');
  console.log(`    Value: ${patientAge.value} ${patientAge.unit}`);

  // Duration
  const treatmentDuration = new Duration({
    value: 14,
    unit: 'days',
    system: 'http://unitsofmeasure.org',
    code: 'd',
  });

  console.log('\n  Treatment Duration:');
  console.log(`    Value: ${treatmentDuration.value} ${treatmentDuration.unit}`);

  // Distance
  const walkingDistance = new Distance({
    value: 500,
    unit: 'meters',
    system: 'http://unitsofmeasure.org',
    code: 'm',
  });

  console.log('\n  Walking Distance:');
  console.log(`    Value: ${walkingDistance.value} ${walkingDistance.unit}`);

  // Count
  const pillCount = new Count({
    value: 30,
    unit: 'tablets',
  });

  console.log('\n  Pill Count:');
  console.log(`    Value: ${pillCount.value} ${pillCount.unit}`);

  // ============================================================
  // Range and Ratio Examples
  // ============================================================
  section('7. Range and Ratio');

  // Range
  const normalBPRange = new Range({
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
  });

  console.log('\n  Normal Systolic BP Range:');
  console.log(`    Low: ${normalBPRange.low?.value} ${normalBPRange.low?.unit}`);
  console.log(`    High: ${normalBPRange.high?.value} ${normalBPRange.high?.unit}`);

  // Ratio (e.g., 1:100 dilution)
  const dilutionRatio = new Ratio({
    numerator: {
      value: 1,
      unit: 'mL',
    },
    denominator: {
      value: 100,
      unit: 'mL',
    },
  });

  console.log('\n  Dilution Ratio:');
  console.log(`    ${dilutionRatio.numerator?.value}:${dilutionRatio.denominator?.value}`);

  // ============================================================
  // Period Examples
  // ============================================================
  section('8. Period DataType');

  const hospitalization = new Period({
    start: '2024-01-15T08:00:00Z',
    end: '2024-01-20T14:00:00Z',
  });

  console.log('\n  Hospitalization Period:');
  console.log(`    Start: ${hospitalization.start}`);
  console.log(`    End: ${hospitalization.end}`);

  // Open-ended period
  const employment = new Period({
    start: '2015-03-01',
    // No end = still employed
  });

  console.log('\n  Employment Period (ongoing):');
  console.log(`    Start: ${employment.start}`);
  console.log(`    End: ${employment.end || '(ongoing)'}`);

  // ============================================================
  // Money Examples
  // ============================================================
  section('9. Money DataType');

  const consultationFee = new Money({
    value: 50000,
    currency: 'CLP',
  });

  console.log('\n  Consultation Fee:');
  console.log(`    Amount: ${consultationFee.currency} ${consultationFee.value?.toLocaleString()}`);

  const insuranceCopay = new Money({
    value: 25.00,
    currency: 'USD',
  });

  console.log('\n  Insurance Copay:');
  console.log(`    Amount: ${insuranceCopay.currency} ${insuranceCopay.value?.toFixed(2)}`);

  // ============================================================
  // Attachment Examples
  // ============================================================
  section('10. Attachment DataType');

  const xrayImage = new Attachment({
    contentType: 'image/jpeg',
    language: 'es',
    url: 'http://hospital.example.org/images/xray-12345.jpg',
    size: 2048576, // 2MB
    hash: 'SGVsbG8gV29ybGQ=', // Base64 hash
    title: 'Radiografía de Tórax',
    creation: '2024-01-15T10:30:00Z',
  });

  console.log('\n  X-Ray Attachment:');
  console.log(`    Title: ${xrayImage.title}`);
  console.log(`    Content Type: ${xrayImage.contentType}`);
  console.log(`    Size: ${(xrayImage.size! / 1024 / 1024).toFixed(2)} MB`);
  console.log(`    URL: ${xrayImage.url}`);

  // Inline data (for small content)
  const signatureImage = new Attachment({
    contentType: 'image/png',
    data: 'iVBORw0KGgoAAAANSUhEUg...', // Base64 encoded image
    title: 'Firma del Médico',
  });

  console.log('\n  Signature (inline):');
  console.log(`    Title: ${signatureImage.title}`);
  console.log(`    Has inline data: ${!!signatureImage.data}`);

  // ============================================================
  // Annotation Examples
  // ============================================================
  section('11. Annotation DataType');

  const clinicalNote = new Annotation({
    authorReference: {
      reference: 'Practitioner/dr-garcia',
      display: 'Dr. García',
    },
    time: '2024-01-15T11:00:00Z',
    text: 'Paciente presenta mejoría significativa. Continuar con tratamiento actual.',
  });

  console.log('\n  Clinical Note:');
  console.log(`    Author: ${clinicalNote.authorReference?.display}`);
  console.log(`    Time: ${clinicalNote.time}`);
  console.log(`    Text: ${clinicalNote.text}`);

  // Annotation with string author
  const nursingNote = new Annotation({
    authorString: 'Enfermera López',
    time: '2024-01-15T14:30:00Z',
    text: 'Signos vitales estables. Paciente sin dolor.',
  });

  console.log('\n  Nursing Note:');
  console.log(`    Author: ${nursingNote.authorString}`);
  console.log(`    Text: ${nursingNote.text}`);

  // ============================================================
  // Meta DataType
  // ============================================================
  section('12. Meta DataType');

  const resourceMeta = new Meta({
    versionId: '3',
    lastUpdated: '2024-01-15T15:00:00Z',
    source: 'http://hospital.example.org/ehr',
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
  });

  console.log('\n  Resource Meta:');
  console.log(`    Version: ${resourceMeta.versionId}`);
  console.log(`    Last Updated: ${resourceMeta.lastUpdated}`);
  console.log(`    Profile: ${resourceMeta.profile?.[0]}`);
  console.log(`    Security: ${resourceMeta.security?.[0]?.display}`);
  console.log(`    Tag: ${resourceMeta.tag?.[0]?.display}`);

  // ============================================================
  // Reference Examples
  // ============================================================
  section('13. Reference DataType');

  // Reference with display
  const patientRef = new Reference({
    reference: 'Patient/12345',
    display: 'Juan García',
  });

  console.log('\n  Patient Reference:');
  console.log(`    Reference: ${patientRef.reference}`);
  console.log(`    Display: ${patientRef.display}`);

  // Reference with type and identifier
  const organizationRef = new Reference({
    type: 'Organization',
    identifier: {
      system: 'http://minsal.cl/organization',
      value: 'ORG-001',
    },
    display: 'Hospital Regional',
  });

  console.log('\n  Organization Reference (by identifier):');
  console.log(`    Type: ${organizationRef.type}`);
  console.log(`    Identifier: ${organizationRef.identifier?.value}`);
  console.log(`    Display: ${organizationRef.display}`);

  // ============================================================
  // Timing Examples
  // ============================================================
  section('14. Timing DataType');

  const medicationTiming = new Timing({
    repeat: {
      frequency: 3,
      period: 1,
      periodUnit: 'd',
      when: ['MORN', 'AFT', 'EVE'],
    },
    code: {
      text: 'Three times a day with meals',
    },
  });

  console.log('\n  Medication Timing:');
  console.log(`    Frequency: ${medicationTiming.repeat?.frequency} times per ${medicationTiming.repeat?.period} ${medicationTiming.repeat?.periodUnit}`);
  console.log(`    When: ${medicationTiming.repeat?.when?.join(', ')}`);
  console.log(`    Instructions: ${medicationTiming.code?.text}`);

  // ============================================================
  // Datatype Immutability Demo
  // ============================================================
  section('15. Immutability Pattern');

  const originalQuantity = new Quantity({
    value: 100,
    unit: 'mg',
    system: 'http://unitsofmeasure.org',
    code: 'mg',
  });

  // Create modified version without changing original
  const doubledQuantity = originalQuantity.with({ value: 200 });

  console.log('\n  Immutable quantity update:');
  console.log(`    Original: ${originalQuantity.value} ${originalQuantity.unit}`);
  console.log(`    Doubled: ${doubledQuantity.value} ${doubledQuantity.unit}`);
  console.log(`    Original unchanged: ${originalQuantity.value === 100}`);

  console.log('\n');
  console.log('*'.repeat(60));
  console.log('*   DataTypes Examples completed!                          *');
  console.log('*'.repeat(60));
  console.log('\n');
}

main().catch(console.error);
