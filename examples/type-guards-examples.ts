/**
 * FHIR Type Guards Examples
 *
 * This file demonstrates how to use type guards for runtime type checking
 * of FHIR resources with full TypeScript type inference.
 */

import {
  isPatient,
  isObservation,
  isEncounter,
  isCondition,
  isPractitioner,
  isOrganization,
  isMedicationRequest,
  isBundle,
  isFhirResource,
  getResourceType,
  type FhirResource,
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
  console.log('*   FHIR Toolkit - Type Guards Examples                    *');
  console.log('*'.repeat(60));

  // ============================================================
  // Example 1: Basic Type Guard Usage
  // ============================================================
  section('Example 1: Basic Type Guard Usage');

  const patient = {
    resourceType: 'Patient',
    id: 'example',
    name: [{ family: 'Smith', given: ['John'] }],
  };

  const observation = {
    resourceType: 'Observation',
    id: 'obs-1',
    status: 'final',
    code: { text: 'Blood Pressure' },
  };

  console.log('\n  Checking resource types:');
  console.log(`    isPatient(patient): ${isPatient(patient)}`);
  console.log(`    isObservation(patient): ${isObservation(patient)}`);
  console.log(`    isPatient(observation): ${isPatient(observation)}`);
  console.log(`    isObservation(observation): ${isObservation(observation)}`);

  // ============================================================
  // Example 2: Type Narrowing in Conditionals
  // ============================================================
  section('Example 2: Type Narrowing in Conditionals');

  function processResource(resource: FhirResource) {
    if (isPatient(resource)) {
      // TypeScript knows this is IPatient
      console.log(`    Processing Patient: ${resource.name?.[0]?.family || 'Unknown'}`);
      return `Patient: ${resource.id}`;
    }

    if (isObservation(resource)) {
      // TypeScript knows this is IObservation
      console.log(`    Processing Observation: ${resource.code?.text || 'Unknown'}`);
      return `Observation: ${resource.status}`;
    }

    if (isEncounter(resource)) {
      // TypeScript knows this is IEncounter
      console.log(`    Processing Encounter: ${resource.class?.code || 'Unknown'}`);
      return `Encounter: ${resource.status}`;
    }

    return `Unknown resource type: ${getResourceType(resource)}`;
  }

  console.log('\n  Processing resources with type narrowing:');
  processResource(patient as FhirResource);
  processResource(observation as FhirResource);

  // ============================================================
  // Example 3: Filtering Arrays by Type
  // ============================================================
  section('Example 3: Filtering Arrays by Type');

  const mixedResources: FhirResource[] = [
    { resourceType: 'Patient', id: 'p1', name: [{ family: 'Doe' }] } as FhirResource,
    { resourceType: 'Observation', id: 'o1', status: 'final', code: { text: 'Test' } } as FhirResource,
    { resourceType: 'Patient', id: 'p2', name: [{ family: 'Smith' }] } as FhirResource,
    { resourceType: 'Condition', id: 'c1', subject: { reference: 'Patient/p1' } } as FhirResource,
    { resourceType: 'Observation', id: 'o2', status: 'preliminary', code: { text: 'Lab' } } as FhirResource,
  ];

  // Filter to get only patients
  const patients = mixedResources.filter(isPatient);
  console.log(`\n  Filtered patients (${patients.length}):`);
  patients.forEach((p) => {
    // TypeScript knows these are IPatient
    console.log(`    - ${p.id}: ${p.name?.[0]?.family}`);
  });

  // Filter to get only observations
  const observations = mixedResources.filter(isObservation);
  console.log(`\n  Filtered observations (${observations.length}):`);
  observations.forEach((o) => {
    // TypeScript knows these are IObservation
    console.log(`    - ${o.id}: ${o.status}`);
  });

  // ============================================================
  // Example 4: isFhirResource for Unknown Objects
  // ============================================================
  section('Example 4: Checking if Object is FHIR Resource');

  const validResource = { resourceType: 'Patient', id: '123' };
  const invalidObject = { type: 'something', data: 'value' };
  const nullValue = null;
  const stringValue = 'not a resource';

  console.log('\n  Testing isFhirResource():');
  console.log(`    validResource: ${isFhirResource(validResource)}`);
  console.log(`    invalidObject: ${isFhirResource(invalidObject)}`);
  console.log(`    nullValue: ${isFhirResource(nullValue)}`);
  console.log(`    stringValue: ${isFhirResource(stringValue)}`);

  // ============================================================
  // Example 5: getResourceType Helper
  // ============================================================
  section('Example 5: Getting Resource Type');

  const resources = [patient, observation];

  console.log('\n  Getting resource types:');
  resources.forEach((r) => {
    console.log(`    ${r.id}: ${getResourceType(r as FhirResource)}`);
  });

  // ============================================================
  // Example 6: Switch Statement with Type Guards
  // ============================================================
  section('Example 6: Switch Statement Pattern');

  function describeResource(resource: FhirResource): string {
    const type = getResourceType(resource);

    switch (type) {
      case 'Patient':
        if (isPatient(resource)) {
          const name = resource.name?.[0];
          return `Patient: ${name?.given?.join(' ')} ${name?.family}`;
        }
        break;
      case 'Observation':
        if (isObservation(resource)) {
          return `Observation (${resource.status}): ${resource.code?.text}`;
        }
        break;
      case 'Condition':
        if (isCondition(resource)) {
          return `Condition: ${resource.code?.text || 'Unknown condition'}`;
        }
        break;
      case 'Practitioner':
        if (isPractitioner(resource)) {
          const name = resource.name?.[0];
          return `Practitioner: Dr. ${name?.family}`;
        }
        break;
    }

    return `${type}: ${resource.id}`;
  }

  console.log('\n  Describing resources:');
  mixedResources.forEach((r) => {
    console.log(`    - ${describeResource(r)}`);
  });

  // ============================================================
  // Example 7: Bundle Processing
  // ============================================================
  section('Example 7: Processing Bundle Entries');

  const bundle = {
    resourceType: 'Bundle',
    type: 'collection',
    entry: [
      { resource: { resourceType: 'Patient', id: 'p1', name: [{ family: 'Jones' }] } },
      { resource: { resourceType: 'Observation', id: 'o1', status: 'final', code: { text: 'BMI' } } },
      { resource: { resourceType: 'MedicationRequest', id: 'm1', status: 'active', intent: 'order' } },
    ],
  };

  if (isBundle(bundle)) {
    console.log('\n  Bundle entries:');
    bundle.entry?.forEach((entry, index) => {
      const resource = entry.resource as FhirResource;
      if (isFhirResource(resource)) {
        console.log(`    ${index + 1}. ${getResourceType(resource)}/${resource.id}`);
      }
    });

    // Extract specific resource types from bundle
    const bundlePatients = bundle.entry
      ?.map((e) => e.resource)
      .filter((r): r is FhirResource => isFhirResource(r))
      .filter(isPatient);

    console.log(`\n  Patients in bundle: ${bundlePatients?.length || 0}`);
  }

  // ============================================================
  // Example 8: Type-Safe Resource Factory
  // ============================================================
  section('Example 8: Type-Safe Resource Processing');

  interface ProcessedResult {
    type: string;
    summary: string;
    isValid: boolean;
  }

  function processAndSummarize(resource: FhirResource): ProcessedResult {
    if (isPatient(resource)) {
      return {
        type: 'Patient',
        summary: `${resource.name?.[0]?.family}, ${resource.name?.[0]?.given?.join(' ')}`,
        isValid: !!resource.name && resource.name.length > 0,
      };
    }

    if (isObservation(resource)) {
      return {
        type: 'Observation',
        summary: `${resource.code?.text} - ${resource.status}`,
        isValid: !!resource.status && !!resource.code,
      };
    }

    if (isMedicationRequest(resource)) {
      return {
        type: 'MedicationRequest',
        summary: `${resource.status} - ${resource.intent}`,
        isValid: !!resource.status && !!resource.intent,
      };
    }

    return {
      type: getResourceType(resource),
      summary: `Resource ${resource.id}`,
      isValid: true,
    };
  }

  console.log('\n  Processed results:');
  mixedResources.forEach((r) => {
    const result = processAndSummarize(r);
    console.log(`    - [${result.type}] ${result.summary} (valid: ${result.isValid})`);
  });

  console.log('\n');
  console.log('*'.repeat(60));
  console.log('*   Type Guards Examples completed!                        *');
  console.log('*'.repeat(60));
  console.log('\n');
}

main().catch(console.error);
