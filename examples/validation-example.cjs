/**
 * FHIR Validation Example (CommonJS)
 *
 * This file demonstrates how to use the yafv validator with require() syntax.
 * Compatible with Node.js without ESM support.
 */

const { validate, isValid } = require('@fhir-toolkit/yafv');

async function main() {
  console.log('\n');
  console.log('*'.repeat(60));
  console.log('*   FHIR Toolkit - CommonJS Validation Example             *');
  console.log('*'.repeat(60));

  // Valid Patient
  const validPatient = {
    resourceType: 'Patient',
    id: 'example-patient',
    active: true,
    name: [
      {
        use: 'official',
        family: 'Smith',
        given: ['John'],
      },
    ],
    gender: 'male',
    birthDate: '1990-01-15',
  };

  // Invalid Patient
  const invalidPatient = {
    resourceType: 'Patient',
    active: 'yes', // Should be boolean
    birthDate: 12345, // Should be string
  };

  console.log('\n--- Validating Valid Patient ---');
  const result1 = await validate(validPatient);
  const valid1 = await isValid(validPatient);
  console.log('Is valid:', valid1);
  console.log('Issues:', result1.issue.length);

  console.log('\n--- Validating Invalid Patient ---');
  const result2 = await validate(invalidPatient);
  const valid2 = await isValid(invalidPatient);
  console.log('Is valid:', valid2);
  console.log('Errors:');
  result2.issue
    .filter((i) => i.severity === 'error')
    .forEach((error, i) => {
      console.log(`  ${i + 1}. [${error.code}] ${error.diagnostics}`);
    });

  console.log('\n');
  console.log('*'.repeat(60));
  console.log('*   Example completed!                                     *');
  console.log('*'.repeat(60));
  console.log('\n');
}

main().catch(console.error);
