/**
 * FHIR Validation Examples
 *
 * This file demonstrates how to use the yafv validator to validate FHIR resources.
 */

import { validate, isValid, FhirValidator } from '@fhir-toolkit/yafv';

// Helper to print results nicely
function printResult(title: string, outcome: any) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`  ${title}`);
  console.log('='.repeat(60));

  const errors = outcome.issue?.filter((i: any) => i.severity === 'error') || [];
  const warnings = outcome.issue?.filter((i: any) => i.severity === 'warning') || [];
  const info = outcome.issue?.filter((i: any) => i.severity === 'information') || [];

  if (errors.length === 0 && warnings.length === 0) {
    console.log('\n  Status: VALID');
  } else {
    console.log(`\n  Status: ${errors.length > 0 ? 'INVALID' : 'VALID WITH WARNINGS'}`);
  }

  if (errors.length > 0) {
    console.log(`\n  Errors (${errors.length}):`);
    errors.forEach((e: any, i: number) => {
      console.log(`    ${i + 1}. [${e.code}] ${e.diagnostics}`);
      if (e.expression) {
        console.log(`       Path: ${e.expression.join(', ')}`);
      }
      if (e.details?.coding?.[0]) {
        console.log(`       Type: ${e.details.coding[0].code}`);
      }
    });
  }

  if (warnings.length > 0) {
    console.log(`\n  Warnings (${warnings.length}):`);
    warnings.forEach((w: any, i: number) => {
      console.log(`    ${i + 1}. [${w.code}] ${w.diagnostics}`);
    });
  }

  if (info.length > 0 && errors.length === 0 && warnings.length === 0) {
    console.log(`\n  Info: ${info[0]?.diagnostics}`);
  }
}

async function main() {
  console.log('\n');
  console.log('*'.repeat(60));
  console.log('*   FHIR Toolkit - Validation Examples                     *');
  console.log('*'.repeat(60));

  // ============================================================
  // Example 1: Valid Patient
  // ============================================================
  const validPatient = {
    resourceType: 'Patient',
    id: 'example-patient',
    active: true,
    name: [
      {
        use: 'official',
        family: 'Smith',
        given: ['John', 'Michael'],
      },
    ],
    gender: 'male',
    birthDate: '1990-01-15',
    telecom: [
      {
        system: 'phone',
        value: '+1-555-123-4567',
        use: 'home',
      },
      {
        system: 'email',
        value: 'john.smith@example.com',
        use: 'work',
      },
    ],
    address: [
      {
        use: 'home',
        line: ['123 Main Street', 'Apt 4B'],
        city: 'Boston',
        state: 'MA',
        postalCode: '02101',
        country: 'USA',
      },
    ],
  };

  const result1 = await validate(validPatient);
  printResult('Example 1: Valid Patient', result1);

  // ============================================================
  // Example 2: Patient with Type Errors
  // ============================================================
  const patientWithTypeErrors = {
    resourceType: 'Patient',
    id: 'invalid-patient',
    active: 'yes', // Should be boolean
    birthDate: 19900115, // Should be string in date format
    name: [
      {
        family: 123, // Should be string
        given: 'John', // Should be array
      },
    ],
  };

  const result2 = await validate(patientWithTypeErrors);
  printResult('Example 2: Patient with Type Errors', result2);

  // ============================================================
  // Example 3: Observation with Missing Required Fields
  // ============================================================
  const observationMissingRequired = {
    resourceType: 'Observation',
    id: 'incomplete-obs',
    // Missing required: status, code
    subject: {
      reference: 'Patient/example-patient',
    },
    valueQuantity: {
      value: 98.6,
      unit: 'F',
      system: 'http://unitsofmeasure.org',
      code: '[degF]',
    },
  };

  const result3 = await validate(observationMissingRequired);
  printResult('Example 3: Observation Missing Required Fields', result3);

  // ============================================================
  // Example 4: Valid Observation
  // ============================================================
  const validObservation = {
    resourceType: 'Observation',
    id: 'blood-pressure',
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
      reference: 'Patient/example-patient',
    },
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
        valueQuantity: {
          value: 120,
          unit: 'mmHg',
          system: 'http://unitsofmeasure.org',
          code: 'mm[Hg]',
        },
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
        valueQuantity: {
          value: 80,
          unit: 'mmHg',
          system: 'http://unitsofmeasure.org',
          code: 'mm[Hg]',
        },
      },
    ],
  };

  const result4 = await validate(validObservation);
  printResult('Example 4: Valid Blood Pressure Observation', result4);

  // ============================================================
  // Example 5: Invalid Code/Terminology
  // ============================================================
  const patientInvalidGender = {
    resourceType: 'Patient',
    id: 'invalid-gender',
    gender: 'M', // Should be 'male', 'female', 'other', or 'unknown'
  };

  const result5 = await validate(patientInvalidGender);
  printResult('Example 5: Patient with Invalid Gender Code', result5);

  // ============================================================
  // Example 6: Using isValid() helper
  // ============================================================
  console.log(`\n${'='.repeat(60)}`);
  console.log('  Example 6: Using isValid() Helper');
  console.log('='.repeat(60));

  const valid = await isValid(validPatient);
  const invalid = await isValid(patientWithTypeErrors);

  console.log(`\n  Valid Patient isValid(): ${valid}`);
  console.log(`  Invalid Patient isValid(): ${invalid}`);

  // ============================================================
  // Example 7: Using FhirValidator instance
  // ============================================================
  console.log(`\n${'='.repeat(60)}`);
  console.log('  Example 7: Using FhirValidator Instance');
  console.log('='.repeat(60));

  const validator = new FhirValidator();

  // Validate multiple resources
  const resources = [validPatient, validObservation, patientWithTypeErrors];
  const results = await validator.validateAll(resources);

  console.log('\n  Batch validation results:');
  results.forEach((outcome, index) => {
    const hasErrors = outcome.issue?.some((i) => i.severity === 'error');
    const resourceType = resources[index].resourceType;
    const id = resources[index].id;
    console.log(`    ${index + 1}. ${resourceType}/${id}: ${hasErrors ? 'INVALID' : 'VALID'}`);
  });

  // ============================================================
  // Example 8: Structured Error Details
  // ============================================================
  console.log(`\n${'='.repeat(60)}`);
  console.log('  Example 8: Structured Error Details');
  console.log('='.repeat(60));

  const result8 = await validate(patientWithTypeErrors);
  const firstError = result8.issue?.find((i: any) => i.severity === 'error');

  if (firstError) {
    console.log('\n  First error details:');
    console.log(`    Severity: ${firstError.severity}`);
    console.log(`    Code: ${firstError.code}`);
    console.log(`    Diagnostics: ${firstError.diagnostics}`);
    console.log(`    Expression: ${firstError.expression?.join(', ') || 'N/A'}`);
    console.log(`    Details text: ${firstError.details?.text || 'N/A'}`);
    console.log(`    Details coding: ${JSON.stringify(firstError.details?.coding || [])}`);
  }

  console.log('\n');
  console.log('*'.repeat(60));
  console.log('*   Examples completed!                                    *');
  console.log('*'.repeat(60));
  console.log('\n');
}

main().catch(console.error);
