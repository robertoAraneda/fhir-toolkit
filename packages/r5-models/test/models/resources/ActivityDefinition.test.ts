import { describe, it, expect } from 'vitest';
import { ActivityDefinition, ActivityDefinitionBuilder } from '../../../src/index.js';
import type { IActivityDefinition, ICodeableConcept, IReference, IDosage } from '@fhir-toolkit/r5-types';
import {
  expectSerializationRoundtrip,
  expectImmutability,
  expectDeepClone,
  expectNoUndefinedInJSON,
  expectBuilderProducesType,
  expectChoiceTypeClearsOthers,
} from '../../helpers/test-utils.js';

describe('ActivityDefinition', () => {
  const minimalActivityDefinition: IActivityDefinition = {
    resourceType: 'ActivityDefinition',
    status: 'active',
  };

  const fullActivityDefinition: IActivityDefinition = {
    resourceType: 'ActivityDefinition',
    id: 'activity-1',
    url: 'http://example.org/ActivityDefinition/blood-pressure-measurement',
    identifier: [
      {
        system: 'http://example.org/identifiers',
        value: 'bp-measurement-001',
      },
    ],
    version: '1.0.0',
    name: 'BloodPressureMeasurement',
    title: 'Blood Pressure Measurement Activity',
    subtitle: 'Standard BP measurement protocol',
    status: 'active',
    experimental: false,
    date: '2024-01-15',
    publisher: 'Example Health Organization',
    contact: [
      {
        name: 'Admin',
        telecom: [{ system: 'email', value: 'admin@example.org' }],
      },
    ],
    description: 'This activity definition describes the standard protocol for blood pressure measurement.',
    useContext: [
      {
        code: { system: 'http://terminology.hl7.org/CodeSystem/usage-context-type', code: 'focus' },
        valueCodeableConcept: {
          coding: [{ system: 'http://snomed.info/sct', code: '75367002', display: 'Blood pressure' }],
        },
      },
    ],
    jurisdiction: [
      {
        coding: [{ system: 'urn:iso:std:iso:3166', code: 'US' }],
      },
    ],
    purpose: 'To standardize blood pressure measurement across the organization',
    copyright: 'Copyright 2024 Example Health Organization',
    kind: 'ServiceRequest',
    code: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '75367002',
          display: 'Blood pressure (observable entity)',
        },
      ],
    },
    intent: 'order',
    priority: 'routine',
    doNotPerform: false,
    timingTiming: {
      repeat: {
        frequency: 1,
        period: 1,
        periodUnit: 'd',
      },
    },
    location: {
      concept: {
        coding: [{ system: 'http://example.org/locations', code: 'clinic' }],
      },
    },
    participant: [
      {
        type: 'practitioner',
        role: {
          coding: [{ system: 'http://example.org/roles', code: 'nurse', display: 'Nurse' }],
        },
      },
    ],
    bodySite: [
      {
        coding: [{ system: 'http://snomed.info/sct', code: '368209003', display: 'Right upper arm' }],
      },
    ],
  };

  describe('Model', () => {
    describe('Construction', () => {
      it('should create an instance with minimal data', () => {
        const activity = new ActivityDefinition(minimalActivityDefinition);
        expect(activity.resourceType).toBe('ActivityDefinition');
        expect(activity.status).toBe('active');
      });

      it('should create an instance with full data', () => {
        const activity = new ActivityDefinition(fullActivityDefinition);
        expect(activity.id).toBe('activity-1');
        expect(activity.url).toBe('http://example.org/ActivityDefinition/blood-pressure-measurement');
        expect(activity.name).toBe('BloodPressureMeasurement');
        expect(activity.title).toBe('Blood Pressure Measurement Activity');
        expect(activity.kind).toBe('ServiceRequest');
        expect(activity.intent).toBe('order');
        expect(activity.participant).toHaveLength(1);
      });

      it('should handle empty constructor', () => {
        const activity = new ActivityDefinition();
        expect(activity.resourceType).toBe('ActivityDefinition');
        expect(activity.status).toBeUndefined();
      });
    });

    describe('Serialization', () => {
      it('should roundtrip through JSON', () => {
        const activity = new ActivityDefinition(fullActivityDefinition);
        expectSerializationRoundtrip(activity, ActivityDefinition);
      });

      it('should not include undefined values in JSON', () => {
        const activity = new ActivityDefinition(minimalActivityDefinition);
        expectNoUndefinedInJSON(activity.toJSON());
      });

      it('should preserve choice type values', () => {
        const activity = new ActivityDefinition({
          ...minimalActivityDefinition,
          timingTiming: { repeat: { frequency: 1 } },
        });
        const json = activity.toJSON();
        expect(json.timingTiming).toBeDefined();
        expect(json.timingAge).toBeUndefined();
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new ActivityDefinition(minimalActivityDefinition);
        const updated = original.with({ status: 'draft' });
        expectImmutability(original, updated, 'status');
        expect(original.status).toBe('active');
        expect(updated.status).toBe('draft');
      });

      it('should create new instance with .applyTransform()', () => {
        const original = new ActivityDefinition(minimalActivityDefinition);
        const updated = original.applyTransform((data) => ({
          title: 'New Title',
          description: 'Added description',
        }));
        expect(original.title).toBeUndefined();
        expect(updated.title).toBe('New Title');
        expect(updated.description).toBe('Added description');
      });
    });

    describe('Clone', () => {
      it('should create a deep clone', () => {
        const original = new ActivityDefinition(fullActivityDefinition);
        const cloned = original.clone();
        expectDeepClone(original, cloned);
      });

      it('should not share nested objects with clone', () => {
        const original = new ActivityDefinition(fullActivityDefinition);
        const cloned = original.clone();
        cloned.participant![0].type = 'device';
        expect(original.participant?.[0].type).toBe('practitioner');
      });
    });

    describe('String Representation', () => {
      it('should return proper toString', () => {
        const activity = new ActivityDefinition({ ...minimalActivityDefinition, id: 'act-123' });
        expect(activity.toString()).toContain('ActivityDefinition');
        expect(activity.toString()).toContain('act-123');
      });
    });
  });

  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build a minimal activity definition', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .build();

        expectBuilderProducesType({ build: () => activity }, ActivityDefinition);
        expect(activity.status).toBe('active');
      });

      it('should build a complete activity definition', () => {
        const activity = new ActivityDefinitionBuilder()
          .setId('activity-builder-1')
          .setUrl('http://example.org/ActivityDefinition/test')
          .setVersion('1.0.0')
          .setName('TestActivity')
          .setTitle('Test Activity Definition')
          .setStatus('active')
          .setExperimental(true)
          .setDate('2024-01-15')
          .setPublisher('Test Publisher')
          .setDescription('A test activity definition')
          .setPurpose('For testing')
          .setKind('ServiceRequest')
          .setIntent('order')
          .setPriority('routine')
          .setDoNotPerform(false)
          .setCode({
            coding: [{ system: 'http://example.org', code: 'test-code' }],
          })
          .build();

        expect(activity.id).toBe('activity-builder-1');
        expect(activity.url).toBe('http://example.org/ActivityDefinition/test');
        expect(activity.version).toBe('1.0.0');
        expect(activity.name).toBe('TestActivity');
        expect(activity.title).toBe('Test Activity Definition');
        expect(activity.status).toBe('active');
        expect(activity.experimental).toBe(true);
        expect(activity.kind).toBe('ServiceRequest');
        expect(activity.intent).toBe('order');
      });
    });

    describe('Choice Types', () => {
      it('should set timing[x] as Timing', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .setTiming('Timing', {
            repeat: { frequency: 2, period: 1, periodUnit: 'd' },
          })
          .build();

        expect(activity.timingTiming).toBeDefined();
        expect(activity.timingTiming?.repeat?.frequency).toBe(2);
      });

      it('should set timing[x] as Age', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .setTiming('Age', {
            value: 18,
            unit: 'years',
            system: 'http://unitsofmeasure.org',
            code: 'a',
          })
          .build();

        expect(activity.timingAge).toBeDefined();
        expect(activity.timingAge?.value).toBe(18);
      });

      it('should set timing[x] as Duration', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .setTiming('Duration', {
            value: 30,
            unit: 'min',
            system: 'http://unitsofmeasure.org',
            code: 'min',
          })
          .build();

        expect(activity.timingDuration).toBeDefined();
        expect(activity.timingDuration?.value).toBe(30);
      });

      it('should clear other timing types when setting a new timing', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .setTiming('Timing', { repeat: { frequency: 1 } })
          .setTiming('Age', { value: 21 })
          .build();

        expectChoiceTypeClearsOthers(
          activity.toJSON(),
          'timingAge',
          ['timingTiming', 'timingDuration', 'timingRange']
        );
      });

      it('should set subject[x] as CodeableConcept', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .setSubject('CodeableConcept', {
            coding: [{ system: 'http://hl7.org/fhir/resource-types', code: 'Patient' }],
          })
          .build();

        expect(activity.subjectCodeableConcept).toBeDefined();
      });

      it('should set subject[x] as Reference', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .setSubject('Reference', { reference: 'Group/123' })
          .build();

        expect(activity.subjectReference).toBeDefined();
        expect(activity.subjectReference?.reference).toBe('Group/123');
      });

      it('should set product[x] as CodeableConcept', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .setProduct('CodeableConcept', {
            coding: [{ system: 'http://example.org/medications', code: 'med-001' }],
          })
          .build();

        expect(activity.productCodeableConcept).toBeDefined();
      });

      it('should set product[x] as Reference', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .setProduct('Reference', { reference: 'Medication/123' })
          .build();

        expect(activity.productReference).toBeDefined();
      });

      it('should set asNeeded[x] as Boolean', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .setAsNeeded('Boolean', true)
          .build();

        expect(activity.asNeededBoolean).toBe(true);
      });

      it('should set asNeeded[x] as CodeableConcept', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .setAsNeeded('CodeableConcept', {
            coding: [{ code: 'prn-reason' }],
          })
          .build();

        expect(activity.asNeededCodeableConcept).toBeDefined();
      });

      it('should set versionAlgorithm[x] as String', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .setVersionAlgorithm('String', 'semver')
          .build();

        expect(activity.versionAlgorithmString).toBe('semver');
      });

      it('should set versionAlgorithm[x] as Coding', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .setVersionAlgorithm('Coding', {
            system: 'http://terminology.hl7.org/CodeSystem/version-algorithm',
            code: 'semver',
          })
          .build();

        expect(activity.versionAlgorithmCoding).toBeDefined();
      });
    });

    describe('Array Properties', () => {
      it('should accumulate identifiers', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .addIdentifier({ system: 'http://example.org/id1', value: 'val1' })
          .addIdentifier({ system: 'http://example.org/id2', value: 'val2' })
          .build();

        expect(activity.identifier).toHaveLength(2);
      });

      it('should accumulate contacts', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .addContact({ name: 'Contact 1' })
          .addContact({ name: 'Contact 2' })
          .build();

        expect(activity.contact).toHaveLength(2);
      });

      it('should accumulate useContexts', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .addUseContext({
            code: { system: 'http://example.org', code: 'context1' },
            valueCodeableConcept: { text: 'Context 1' },
          })
          .addUseContext({
            code: { system: 'http://example.org', code: 'context2' },
            valueCodeableConcept: { text: 'Context 2' },
          })
          .build();

        expect(activity.useContext).toHaveLength(2);
      });

      it('should accumulate jurisdictions', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .addJurisdiction({ coding: [{ code: 'US' }] })
          .addJurisdiction({ coding: [{ code: 'CA' }] })
          .build();

        expect(activity.jurisdiction).toHaveLength(2);
      });

      it('should accumulate topics', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .addTopic({ coding: [{ code: 'education' }] })
          .addTopic({ coding: [{ code: 'treatment' }] })
          .build();

        expect(activity.topic).toHaveLength(2);
      });

      it('should accumulate authors', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .addAuthor({ name: 'Author 1' })
          .addAuthor({ name: 'Author 2' })
          .build();

        expect(activity.author).toHaveLength(2);
      });

      it('should accumulate participants', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .addParticipant({ type: 'practitioner' })
          .addParticipant({ type: 'patient' })
          .addParticipant({ type: 'device' })
          .build();

        expect(activity.participant).toHaveLength(3);
      });

      it('should accumulate dosages', () => {
        const dosage1: IDosage = {
          sequence: 1,
          text: 'Take one tablet daily',
        };
        const dosage2: IDosage = {
          sequence: 2,
          text: 'Take two tablets if needed',
        };

        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .addDosage(dosage1)
          .addDosage(dosage2)
          .build();

        expect(activity.dosage).toHaveLength(2);
      });

      it('should accumulate bodySites', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .addBodySite({ coding: [{ code: 'left-arm' }] })
          .addBodySite({ coding: [{ code: 'right-arm' }] })
          .build();

        expect(activity.bodySite).toHaveLength(2);
      });

      it('should accumulate dynamicValues', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .addDynamicValue({
            path: 'status',
            expression: {
              language: 'text/fhirpath',
              expression: "'active'",
            },
          })
          .addDynamicValue({
            path: 'priority',
            expression: {
              language: 'text/fhirpath',
              expression: "'routine'",
            },
          })
          .build();

        expect(activity.dynamicValue).toHaveLength(2);
      });

      it('should accumulate relatedArtifacts', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .addRelatedArtifact({
            type: 'documentation',
            display: 'Related Document 1',
          })
          .addRelatedArtifact({
            type: 'derived-from',
            display: 'Source Document',
          })
          .build();

        expect(activity.relatedArtifact).toHaveLength(2);
      });
    });

    describe('Method Chaining', () => {
      it('should support fluent method chaining', () => {
        const activity = new ActivityDefinitionBuilder()
          .setId('chain-test')
          .setUrl('http://example.org/chain')
          .setVersion('2.0.0')
          .setName('ChainedActivity')
          .setTitle('Chained Activity Test')
          .setSubtitle('Testing chaining')
          .setStatus('draft')
          .setExperimental(true)
          .setDate('2024-06-01')
          .setPublisher('Chain Publisher')
          .setDescription('Testing method chaining')
          .setPurpose('Verify builder pattern')
          .setUsage('Use for testing')
          .setCopyright('2024')
          .setKind('MedicationRequest')
          .setIntent('proposal')
          .setPriority('urgent')
          .setDoNotPerform(false)
          .setQuantity({ value: 10, unit: 'tablets' })
          .setLocation({ concept: { text: 'Home' } })
          .addIdentifier({ value: 'id-1' })
          .addParticipant({ type: 'practitioner' })
          .build();

        expect(activity.id).toBe('chain-test');
        expect(activity.url).toBe('http://example.org/chain');
        expect(activity.name).toBe('ChainedActivity');
        expect(activity.status).toBe('draft');
        expect(activity.experimental).toBe(true);
        expect(activity.kind).toBe('MedicationRequest');
        expect(activity.intent).toBe('proposal');
        expect(activity.priority).toBe('urgent');
        expect(activity.quantity?.value).toBe(10);
        expect(activity.identifier).toHaveLength(1);
        expect(activity.participant).toHaveLength(1);
      });
    });

    describe('DomainResource Properties', () => {
      it('should set DomainResource properties through builder', () => {
        const activity = new ActivityDefinitionBuilder()
          .setId('domain-test')
          .setMeta({ versionId: '1', lastUpdated: '2024-01-15T10:00:00Z' })
          .setLanguage('en')
          .setText({ status: 'generated', div: '<div>Activity</div>' })
          .setStatus('active')
          .build();

        expect(activity.id).toBe('domain-test');
        expect(activity.meta?.versionId).toBe('1');
        expect(activity.language).toBe('en');
        expect(activity.text?.status).toBe('generated');
      });
    });

    describe('Separate Properties (Not Choice Types)', () => {
      it('should handle type, typeCanonical, typeReference as separate properties on participants', () => {
        const activity = new ActivityDefinitionBuilder()
          .setStatus('active')
          .addParticipant({
            type: 'practitioner',
            typeCanonical: 'http://example.org/ActorDefinition/nurse',
            typeReference: { reference: 'HealthcareService/123' },
          })
          .build();

        expect(activity.participant?.[0].type).toBe('practitioner');
        expect(activity.participant?.[0].typeCanonical).toBe('http://example.org/ActorDefinition/nurse');
        expect(activity.participant?.[0].typeReference?.reference).toBe('HealthcareService/123');
      });
    });
  });

  describe('fromJSON', () => {
    it('should create instance from JSON', () => {
      const activity = ActivityDefinition.fromJSON(fullActivityDefinition);
      expect(activity).toBeInstanceOf(ActivityDefinition);
      expect(activity.id).toBe('activity-1');
      expect(activity.name).toBe('BloodPressureMeasurement');
      expect(activity.kind).toBe('ServiceRequest');
    });
  });
});
